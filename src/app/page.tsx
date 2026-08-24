import Image from 'next/image';
import Link from 'next/link';
import HeroRotator from '@/components/HeroRotator';

export default function HomePage() {
  return (
    <main>
      <HeroRotator />

      <section className="motto">
        <div className="inner">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG glyph */}
          <img className="glyph" src="/images/compass_glyph.svg" alt="" />
          <span className="eyebrow">
            <span className="tick"></span>Our bearing
          </span>
          <p className="line">Designing your home should be the best part of having one.</p>
          <div className="mrule"></div>
        </div>
      </section>

      <section className="cta-work">
        <div className="shot tone-navy">
          <Image
            className="ph"
            src="/images/hurricane-exterior.webp"
            alt="Hurricane Ranch — two-story home in dark-stained board-and-batten and brick under a black standing-seam metal roof, with timber trusses over the entry and balcony"
            fill
            sizes="100vw"
          />
          <span className="capsule">
            <span className="dot"></span>Hurricane Ranch · New Market · 2026
          </span>
        </div>
        <div className="panel">
          <span className="eyebrow">
            <span className="tick"></span>Selected work
          </span>
          <h2 className="pt">A few places we&rsquo;ve shaped.</h2>
          <Link className="btn btn-primary" href="/projects">
            View projects <span className="ar">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
