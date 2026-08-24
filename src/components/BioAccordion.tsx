'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Tone } from '@/data/projects';

interface Person {
  id: string;
  portrait: { src: string; alt: string; tone: Tone };
  name: string;
  role: string;
  bio: string;
}

export default function BioAccordion({ person }: { person: Person }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`person${open ? ' open' : ''}`}>
      <div className={`pshot shot ${person.portrait.tone}`}>
        <Image
          className="ph"
          src={person.portrait.src}
          alt={person.portrait.alt}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
      <button
        className="pbar"
        type="button"
        aria-expanded={open}
        aria-controls={`bio-${person.id}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="pn">{person.name}</span>
        <span className="pp" aria-hidden="true"></span>
        <span className="pr">{person.role}</span>
      </button>
      <div className="pbio" id={`bio-${person.id}`}>
        <div className="pin">
          <p>{person.bio}</p>
        </div>
      </div>
    </article>
  );
}
