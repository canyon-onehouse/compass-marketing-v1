import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Who owns the drawings, photographs, and words on this site — and what this site is, and is not.',
};

export default function TermsPage() {
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
                <span className="tick"></span>02 — Terms of use
              </span>
              <h1 className="display ltitle">Using this site.</h1>
            </div>
          </div>

          <article>
            <section className="lsec">
              <div className="ln">Terms of use</div>
              <div>
                <p>
                  The drawings, photographs, and words on this site are the work of Compass Design
                  Studio and its collaborators. They are here for you to look at, not to reuse —
                  please do not reproduce them without our written permission.
                </p>
                <p>
                  Nothing on this site is residential design, engineering, or legal advice. Every
                  site and every building is particular; what was right for one project may be wrong
                  for yours. The studio accepts no liability for decisions made on the basis of this
                  site alone.
                </p>
                <p>
                  Project descriptions reflect each commission as completed. Conditions, codes, and
                  costs change; we make no promise that past scope or outcomes can be repeated.
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
