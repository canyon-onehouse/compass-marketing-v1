import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Where Compass Design Studio works, how an engagement runs, how long a project takes, and how to begin.',
};

const inlineLink = {
  textTransform: 'none',
  letterSpacing: '.02em',
  fontSize: 'inherit',
} as const;

export default function FaqsPage() {
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
                <span className="tick"></span>03 — Frequently asked
              </span>
              <h1 className="display ltitle">Asked, answered.</h1>
            </div>
          </div>

          <article>
            <section className="lsec">
              <div className="ln">FAQs</div>
              <div>
                <div className="faq">
                  <div className="fq">
                    <p className="q">Where does the studio work?</p>
                    <p>
                      Our offices are located in Northern Alabama near Huntsville. We operate
                      nationwide servicing clients through all 50 states. We have a suite of
                      software products that allows us to coordinate all design remotely and several
                      of our design packages include on-site visits when appropriate.
                    </p>
                  </div>
                  <div className="fq">
                    <p className="q">What does an engagement look like?</p>
                    <p>
                      Every project starts with a design consultation, proposal and design services
                      agreement. From there: concept, design development, documentation, and
                      construction — with the founders&rsquo; hands on each phase. The{' '}
                      <Link className="ulink" href="/process" style={inlineLink}>
                        Process page
                      </Link>{' '}
                      walks through it.
                    </p>
                  </div>
                  <div className="fq">
                    <p className="q">Do you take interiors-only work?</p>
                    <p>
                      Absolutely. We offer the full range of design services from drafting,
                      full-service residential design, interior design, owner&rsquo;s representation
                      and construction administration services.
                    </p>
                  </div>
                  <div className="fq">
                    <p className="q">How long does a project take?</p>
                    <p>
                      Our most common package (Design Essentials) is a 30-day design process that
                      gets you a set of schematic plans ready for builder pricing.
                    </p>
                  </div>
                  <div className="fq">
                    <p className="q">How do we begin?</p>
                    <p>
                      Write to us through the{' '}
                      <Link className="ulink" href="/contact" style={inlineLink}>
                        Contact page
                      </Link>
                      . Tell us about the site, the lives the building must hold, and where you hope
                      it lands — we respond to every serious inquiry within the week.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
