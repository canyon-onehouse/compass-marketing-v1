'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SLIDES = [
  {
    tone: 'tone-tan',
    src: '/images/home-gallery-mcm-ranch.webp',
    alt: 'Mid-century ranch with a low wide gable, exposed beams, vertical wood siding, and full-height glazing to the living rooms',
  },
  {
    tone: 'tone-stone',
    src: '/images/home-gallery-cottage.webp',
    alt: 'Painted brick cottage with a steep shingled roof, twin front gables, dormers, and a stone walk through the lawn',
  },
  {
    tone: 'tone-navy',
    src: '/images/home-gallery-cabin.webp',
    alt: 'Timber cabin in the pines with a stone chimney, black-framed glazed entry under a gabled porch, and a flagstone terrace',
  },
];

export default function HeroRotator() {
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      if (!paused.current) setIdx((i) => (i + 1) % SLIDES.length);
    }, 6000);
  };

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section
      className="hg"
      id="top"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {SLIDES.map((s, i) => (
        <div key={s.src} className={`slide ${s.tone}${i === idx ? ' on' : ''}`}>
          <Image className="ph" src={s.src} alt={s.alt} fill sizes="100vw" priority={i === 0} />
        </div>
      ))}

      <div className="veil" aria-hidden="true" />

      {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo */}
      <img className="logo" src="/images/compass_wordmark_light.svg" alt="Compass Design Studio" />

      <div className="dots" role="tablist" aria-label="Gallery">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            className={i === idx ? 'on' : undefined}
            aria-label={`Photo ${i + 1}`}
            onClick={() => {
              setIdx(i);
              restart();
            }}
          ></button>
        ))}
      </div>
    </section>
  );
}
