'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

type Filter = 'all' | 'projects' | 'plans';

const TABS: { filter: Filter; label: string }[] = [
  { filter: 'all', label: 'All' },
  { filter: 'projects', label: 'Projects' },
  { filter: 'plans', label: 'Ready-to-build plans' },
];

export default function ProjectsFilter() {
  const [filter, setFilter] = useState<Filter>('all');

  // initialize from the URL hash after mount and follow hash changes
  // (matches the prototype's #projects / #plans deep links)
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projects' || hash === 'plans') setFilter(hash);
      else if (hash === '') setFilter('all');
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const apply = (f: Filter) => {
    setFilter(f);
    try {
      history.replaceState(null, '', f === 'all' ? window.location.pathname : `#${f}`);
    } catch {}
  };

  return (
    <>
      <div className="studiobar">
        <nav className="tabs" aria-label="Work categories">
          {TABS.map((t) => (
            <button
              key={t.filter}
              className={`tab${filter === t.filter ? ' on' : ''}`}
              type="button"
              aria-pressed={filter === t.filter}
              onClick={() => apply(t.filter)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="wgrid">
        {projects.map((p) => (
          <Link
            className="wcard"
            href={`/projects/${p.slug}`}
            key={p.slug}
            hidden={filter !== 'all' && p.category !== filter}
          >
            <div className={`wshot shot ${p.card.tone}`}>
              <Image
                className="ph"
                src={p.card.src}
                alt={p.card.alt}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
            </div>
            <div className="wname">
              <span className="nm">{p.title}</span>
              <span className="yr">{p.card.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
