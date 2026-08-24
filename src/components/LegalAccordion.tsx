'use client';

import { useState } from 'react';
import Link from 'next/link';

const ROWS = [
  {
    id: 'privacy',
    no: '01',
    title: 'Privacy',
    body: 'What we keep when you write to the studio, the single purpose we use it for, and how to have it removed.',
    href: '/legal/privacy',
    linkText: 'Read the policy',
  },
  {
    id: 'terms',
    no: '02',
    title: 'Terms of use',
    body: 'Who owns the drawings, photographs, and words on this site — and what this site is, and is not.',
    href: '/legal/terms',
    linkText: 'Read the terms',
  },
  {
    id: 'faqs',
    no: '03',
    title: 'Frequently asked',
    body: 'Where we work, how an engagement runs, how long a building takes, and how to begin.',
    href: '/faqs',
    linkText: 'Read the answers',
  },
];

export default function LegalAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="lrows">
      {ROWS.map((row) => (
        <div className={`lrow${open === row.id ? ' open' : ''}`} key={row.id}>
          <button
            className="lbar"
            type="button"
            aria-expanded={open === row.id}
            aria-controls={`panel-${row.id}`}
            onClick={() => setOpen((v) => (v === row.id ? null : row.id))}
          >
            <span className="no">{row.no}</span>
            <span className="lt">{row.title}</span>
            <span className="pp" aria-hidden="true"></span>
          </button>
          <div className="lpanel" id={`panel-${row.id}`}>
            <div className="pin">
              <div className="lbody">
                <p>{row.body}</p>
                <Link className="ulink" href={row.href}>
                  {row.linkText} <span className="ar">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
