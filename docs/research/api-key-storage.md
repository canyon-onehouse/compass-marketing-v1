# Should API keys ever be committed to a git repository?

**No.** Every primary source consulted — OWASP, the 12-Factor App methodology, GitHub, Vercel, Next.js, and Resend itself — says the same thing: API keys and other secrets must live outside the codebase, in environment variables or a secret manager, and must never be committed. Resend's own documentation states it flatly: "Never commit API keys to version control" ([Resend, How to handle API keys](https://resend.com/docs/knowledge-base/how-to-handle-api-keys)). The 12-Factor App gives the litmus test: proper config management means "the codebase could be made open source at any moment, without compromising any credentials" ([12factor.net/config](https://12factor.net/config)).

Git makes this worse than it sounds: a committed key lives in history forever, in every clone and fork, even after the file is deleted in a later commit. That is why the remedy for an accidental commit is **rotation, not history rewriting** (see section 3).

All guidance below is drawn from primary sources (official docs and first-party vendor documentation); URLs are collected in the Sources section.

---

## 1. What the industry-standard sources say

### OWASP Secrets Management Cheat Sheet
- Describes hardcoded secrets in source ("littered throughout configuration files") as a problem to be eliminated, not a practice.
- Recommended homes for a secret (section "Where should a secret be?"): CI/CD platform secret storage, a **dedicated secrets management system** (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, HashiCorp Vault, CyberArk Conjur), or runtime retrieval by the service itself.
- On rotation: "You should regularly rotate secrets so that any stolen credentials will only work for a short time."
- Remediation for a leaked secret (section 9.2): **revoke, rotate, delete from exposed systems, and log/audit** — in that order of urgency.
- Caveat worth knowing: OWASP notes plain environment variables are "generally accessible to all processes and may be included in logs" — env vars are far better than committing keys, but a managed platform store (like Vercel's, which encrypts at rest) or a secret manager is preferred over ad-hoc env handling.

### 12-Factor App (Factor III: Config)
- Demands "strict separation of config from code"; credentials for backing services are config, and config "varies substantially across deploys, code does not."
- Config files checked into version control are called out as a violation; the prescription is: "The twelve-factor app stores config in environment variables."

### GitHub
- Secret scanning exists precisely because committed secrets are a known failure mode: it scans full git history on all branches (plus issues, PRs, wikis, gists) to "prevent fraudulent use of your secrets by automatically detecting exposed credentials before they can be exploited."
- GitHub's guidance when a secret lands in a repo: "rotate the affected credential immediately"; scrubbing history is "time-intensive and often unnecessary if you've already revoked the credential."

### Vercel
- Environment variables are "key-value pairs configured **outside your source code**," encrypted at rest, scoped per environment (Production / Preview / Development), and safe for sensitive values like tokens. Rotation without downtime is documented at [vercel.com/docs/environment-variables/rotating-secrets](https://vercel.com/docs/environment-variables/rotating-secrets).

### Resend (the vendor of this project's key)
- "Store API keys in environment variables."
- "Never commit API keys to version control."
- "Never hard-code API keys in your code or share them publicly."
- "Rotate keys at least every 90 days, or immediately if you suspect a key has been compromised."
- A key's value is shown **once** at creation and "cannot be viewed or edited after it has been created" — so a leaked key can only be replaced, never recovered or amended.
- Resend also recommends multiple scoped keys "to isolate different application actions… view logs per key, detect possible abuse, and control any damage."

---

## 2. Where the key should live instead (this stack: Next.js App Router + Vercel + Resend)

### Local development: gitignored `.env.local`
Next.js loads `.env*` files automatically into `process.env`. Its docs carry an explicit warning:

> "The default `create-next-app` template ensures all `.env` files are added to your `.gitignore`. You almost never want to commit these files to your repository."

Conventions that matter here:
- `.env.local` is the intended place for local secrets; `.env*.local` files are "intended to be ignored through `.gitignore`."
- Load order (first match wins): `process.env` → `.env.$(NODE_ENV).local` → `.env.local` → `.env.$(NODE_ENV)` → `.env`.
- `RESEND_API_KEY` has **no `NEXT_PUBLIC_` prefix**, which is correct: "By default, environment variables are only available on the server." A `NEXT_PUBLIC_`-prefixed variable would be inlined into the client JavaScript bundle at build time — never do that with a secret. The contact form's server action (`src/app/contact/actions.ts`) reads the key server-side only.

So locally:

```bash
# .env.local  (gitignored, never committed)
RESEND_API_KEY=re_xxxxxxxxxxxx
```

**Repo-specific note:** this repo's `.gitignore` currently ignores only `.env*.local`. That covers `.env.local`, but a plain `.env` — which is exactly what `vercel env pull` creates by default — would be committable. Current `create-next-app` templates ignore all `.env*` files. Recommended hardening:

```gitignore
# env files (can opt back in with !.env.example)
.env*
!.env.example
```

A committed `.env.example` with placeholder values (no real keys) is the conventional way to document which variables the app needs.

### Deployed environments: Vercel project environment variables
- Set `RESEND_API_KEY` in the Vercel dashboard (Project → Settings → Environment Variables) or via CLI (`vercel env add RESEND_API_KEY`), scoped to Production (and Preview if the contact form should send from preview deploys). Values are encrypted at rest; changes apply to the *next* deployment.
- `vercel env pull` populates a local `.env` file from the project's Development environment, and `vercel dev` loads them into memory automatically — no committed file involved at any point.

### Higher-assurance option: dedicated secret managers
For teams with more secrets or compliance needs, OWASP recommends purpose-built systems (Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) with centralized audit, access control, and automated rotation. For a single Resend key on Vercel, the platform's env-var store is the appropriate weight.

---

## 3. If a key IS accidentally committed

### Step 1 — rotate immediately. This is the actual fix.
GitHub's sensitive-data documentation is unambiguous: "as a first step you need to revoke and/or rotate that secret," and "Once the secret is revoked or rotated, it can no longer be used for access, and that may be sufficient to solve your problem." Treat any committed key as compromised the moment it is pushed — even to a private repo.

For this project: create a new key in the Resend dashboard (keys are create/delete only — there is no "edit"), update `RESEND_API_KEY` in Vercel and in `.env.local`, redeploy, then delete the old key in Resend.

### Step 2 — understand why history rewriting alone is NOT enough
Tools like `git filter-repo` (the tool GitHub's docs recommend) or BFG Repo-Cleaner can rewrite history, but GitHub warns that after a rewrite and force-push, "the commits with sensitive data may still be accessible elsewhere":
- in **any clones or forks** of the repository;
- **directly via their SHA-1 hashes in cached views on GitHub** (unreachable objects are not immediately garbage-collected server-side);
- through **any pull requests that reference them**.

Fully purging cached/dereferenced views requires contacting GitHub Support, and "GitHub Support… will only assist in the removal of sensitive data in cases where we determine that the risk can't be mitigated by rotating affected credentials." In other words: GitHub itself treats rotation as the remedy and history-scrubbing as optional hygiene.

### Step 3 — know what GitHub does automatically for Resend keys
Per GitHub's supported-patterns list, `resend_api_key` **is** a supported secret-scanning pattern with **push protection support**, but Resend is **not** a secret-scanning *partner*. Consequences:
- A leaked Resend key in a public repo generates an alert in the repo's Security tab — but **Resend is not notified and will not auto-revoke the key**. (Partner-program secrets, e.g. AWS or Stripe, are reported directly to the provider, who "can take action, such as revoking the credential.")
- Rotation is therefore entirely on you; nothing happens automatically on Resend's side.

---

## 4. Prevention tooling

- **`.gitignore` for env files** — first line of defense; see the `.env*` / `!.env.example` pattern in section 2. Next.js's own template does this for you in new projects.
- **GitHub push protection** — "blocks pushes that contain secrets *before* they reach your repository." It is enabled by default for pushes to public repos at the user level, and can be enabled per-repo/org (private repos require GitHub Secret Protection on paid plans). Since `resend_api_key` is a push-protection-supported pattern, a push containing a live-format Resend key to a covered repo is blocked at push time.
- **GitHub secret scanning** — retroactive detection across full history; free and automatic on public repos.
- **gitleaks** — "a tool for detecting secrets like passwords, API keys, and tokens in git repos, files, and whatever else you wanna throw at it via stdin." Runs as a CLI (`gitleaks git`, `gitleaks dir`), a pre-commit hook (via `.pre-commit-config.yaml`), or a GitHub Action.
- **TruffleHog** — scans git history (and GitHub orgs, S3, Docker images, etc.) and *verifies* findings: "For every secret TruffleHog can classify, it can also log in to confirm if that secret is live or not." Also available as a pre-commit hook and GitHub Action.
- **Pre-commit hooks** — wiring gitleaks or TruffleHog into `pre-commit` catches a secret before it ever enters local history, which is strictly cheaper than any remediation after the fact.

A sensible minimal setup for this repo: the hardened `.gitignore` pattern, GitHub push protection left enabled, and optionally a gitleaks pre-commit hook.

---

## Sources

- OWASP Secrets Management Cheat Sheet — https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- The Twelve-Factor App, III. Config — https://12factor.net/config
- GitHub Docs, About secret scanning — https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning
- GitHub Docs, About push protection — https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection
- GitHub Docs, Supported secret scanning patterns (Resend: `resend_api_key`, push protection ✓, partner ✗) — https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns
- GitHub Docs, Removing sensitive data from a repository — https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
- Vercel Docs, Environment variables — https://vercel.com/docs/environment-variables
- Vercel Docs, Rotating secrets — https://vercel.com/docs/environment-variables/rotating-secrets
- Next.js Docs, Environment variables guide — https://nextjs.org/docs/app/guides/environment-variables
- Resend Docs, API keys introduction — https://resend.com/docs/dashboard/api-keys/introduction
- Resend Docs, How to handle API keys — https://resend.com/docs/knowledge-base/how-to-handle-api-keys
- gitleaks (first-party README) — https://github.com/gitleaks/gitleaks
- TruffleHog (first-party README) — https://github.com/trufflesecurity/trufflehog
