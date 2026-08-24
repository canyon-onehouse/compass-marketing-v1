import type { Metadata } from 'next';
import LegalAccordion from '@/components/LegalAccordion';

export const metadata: Metadata = {
  title: 'Legal & FAQs',
  description:
    'The quiet print — privacy policy, terms of use, and frequently asked questions for Compass Design Studio.',
};

export default function LegalPage() {
  return (
    <main>
      <section className="legal">
        <div className="wrap">
          <div className="lhead">
            <div>
              <span className="eyebrow">
                <span className="tick"></span>The quiet print
              </span>
              <h1 className="display ltitle">Legal &amp; frequently asked.</h1>
            </div>
          </div>
          <LegalAccordion />
        </div>
      </section>
    </main>
  );
}
