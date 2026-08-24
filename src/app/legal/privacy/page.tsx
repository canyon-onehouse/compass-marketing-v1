import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What Compass Design Studio keeps when you write to the studio, the single purpose we use it for, and how to have it removed.',
};

const inlineLink = {
  textTransform: 'none',
  letterSpacing: '.02em',
  fontSize: 'inherit',
} as const;

export default function PrivacyPage() {
  return (
    <main>
      <section className="legal">
        <div className="wrap">
          <Link className="ulink lback" href="/legal">
            ← Legal &amp; FAQs
          </Link>

          <div className="lhead">
            <div>
              <span className="eyebrow">
                <span className="tick"></span>01 — Privacy
              </span>
              <h1 className="display ltitle">What we keep, and why.</h1>
            </div>
          </div>

          <article>
            <section className="lsec">
              <div className="ln">Privacy policy</div>
              <div>
                <p>
                  When you write to the studio — through the inquiry form, by email, or by phone —
                  we keep what you send us: your name, your contact details, and what you tell us
                  about your site and your project. We use it for one purpose: to respond to you
                  and, if we work together, to do the work.
                </p>
                <p>
                  We do not sell, rent, or share your information with anyone outside the studio,
                  except the consultants engaged on your project and only with your knowledge. We do
                  not run advertising trackers on this site.
                </p>
                <p>
                  If you would like to see what we hold, or have us remove it, write to{' '}
                  <a
                    className="ulink"
                    href="mailto:allison@compass-design.studio,canyon@compass-design.studio"
                    style={inlineLink}
                  >
                    allison@compass-design.studio
                  </a>{' '}
                  and we will take care of it.
                </p>
                <div className="upd">Last revised · June MMXXVI</div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
