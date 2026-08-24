import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BioAccordion from '@/components/BioAccordion';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Compass Design Studio is a small residential design and interiors practice in Northern Alabama, kept small on purpose.',
};

export default function StudioPage() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <div className="inner">
            <div>
              <span className="eyebrow">
                <span className="tick"></span>The studio
              </span>
              <h1 className="display pt">A place to listen first.</h1>
            </div>
            <p className="pl">
              A small residential design and interiors practice in Northern Alabama, kept small on
              purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="section studio">
        <div className="wrap inner">
          <div className="media shot tone-stone" style={{ aspectRatio: '4/3' }}>
            <Image
              className="ph"
              src="/images/studio-office.webp"
              alt="Watercolor of the studio: a large drafting table with plans, sketchbook, and material samples under a task lamp, tall windows at left and shelves of books behind"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <div className="copy">
            <span className="eyebrow">
              <span className="tick"></span>Est MMXVIII
            </span>
            <h2 className="display st">Small on purpose.</h2>
            <p>
              Compass is a small residential design and interiors practice in Northern Alabama. We
              keep our project list short, so every home receives the founders&rsquo; hands from
              first sketch to final walk-through.
            </p>
            <p>
              We work in warm, quiet materials — cedar, stone, lime plaster, brass that ages — and
              we build to last for generations, not seasons.
            </p>
            <div className="sig">
              {/* eslint-disable-next-line @next/next/no-img-element -- SVG glyph */}
              <img src="/images/compass_glyph.svg" alt="" />
              <div>
                <div className="sg">Compass Design Studio</div>
                <div className="sgr">Residential Design · Interiors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team">
        <div className="wrap">
          <div className="thead">
            <div>
              <span className="eyebrow">
                <span className="tick"></span>The people
              </span>
              <h2 className="display ttitle">Who you&rsquo;ll work with.</h2>
            </div>
            <p className="thint">Select a portrait to read who they are to the studio.</p>
          </div>
          <div className="people">
            <BioAccordion
              person={{
                id: 'elena',
                portrait: {
                  src: '/images/slot-team-elena.webp',
                  alt: 'Portrait of Allison Browning',
                  tone: 'tone-stone',
                },
                name: 'Allison Browning',
                role: 'Founder · Principal Designer',
                bio: 'Allison founded Compass in 2025 after spending her career working in small residential design firms in the Midwest. She leads every project’s design — first site walk to final walk-through — and is the reason the studio stays small.',
              }}
            />
            <BioAccordion
              person={{
                id: 'daniel',
                portrait: {
                  src: '/images/slot-team-daniel.webp',
                  alt: 'Portrait of Canyon Browning',
                  tone: 'tone-tan',
                },
                name: 'Canyon Browning',
                role: 'Co-Founder · Managing Partner',
                bio: 'Canyon co-founded the studio and keeps the practice running — schedules, budgets, builders, and the steady client communication Compass is known for. When the work moves, it moves through Canyon.',
              }}
            />
          </div>
        </div>
      </section>

      <section className="nextband">
        <div className="wrap">
          <div className="inner">
            <p className="q">See what the studio has built.</p>
            <Link className="btn btn-outline" href="/projects">
              View projects <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
