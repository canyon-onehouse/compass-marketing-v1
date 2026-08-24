import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process',
  description:
    'How Compass Design Studio works — a free discovery call, a clear proposal tailored to your project, and a design process built around listening.',
};

const TENETS = [
  {
    num: '01 — Discovery',
    heading: 'Start with a conversation',
    body: 'Book a free discovery call to tell us about your project and goals. Together, we’ll explore how Compass can help bring your vision to life.',
    tone: 'tone-tan',
    src: '/images/process-discovery.webp',
    alt: 'Watercolor and pencil study of a cottage, half rendered and half left as construction lines',
  },
  {
    num: '02 — Connect',
    heading: 'Only what you need',
    body: 'We’ll create a clear proposal tailored to what your project truly needs. You’ll receive transparent pricing without unnecessary services or added costs.',
    tone: 'tone-stone',
    src: '/images/process-connect.webp',
    alt: 'Watercolor floor plan with a gold-washed living core, a small elevation study, and drafting tools on the sheet',
  },
  {
    num: '03 — Begin',
    heading: 'Your vision designed',
    body: 'Once you sign your proposal, your project officially begins. Through a thoughtful series of design calls, we’ll listen closely and design around your vision.',
    tone: 'tone-navy',
    src: '/images/process-begin.webp',
    alt: 'Watercolor rendering of a stone house with steep slate roof and dormers, plan and elevation studies drawn alongside',
  },
];

export default function ProcessPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <div className="inner">
            <div>
              <span className="eyebrow">
                <span className="tick"></span>How we work
              </span>
              <h1 className="display pt">Design made by listening first.</h1>
            </div>
            <p className="pl">
              Every project gets the founders,
              <br />
              their full attention, and the patience a<br />
              good building deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="approach" style={{ borderBottom: 0 }}>
        <div className="wrap inner">
          <div className="tenets">
            {TENETS.map((t) => (
              <div className="tenet" key={t.num}>
                <div className={`shot tshot ${t.tone}`}>
                  <Image
                    className="ph"
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <div className="tn">{t.num}</div>
                <div className="th" style={{ fontSize: '27px' }}>
                  {t.heading}
                </div>
                <p className="tb">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nextband">
        <div className="wrap">
          <div className="inner">
            <p className="q">See where this process leads.</p>
            <Link className="btn btn-outline" href="/projects">
              View projects <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
