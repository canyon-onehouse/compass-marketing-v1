'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/data/site';

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes; lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="nav">
      <div className="wrap row">
        <Link href="/" aria-label="Compass Design Studio — home">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no optimization needed */}
          <img className="wm" src="/images/compass_wordmark.svg" alt="Compass" />
        </Link>
        <nav className="links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} className={isActive(l.href) ? 'on' : undefined} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="navcta">
          <Link className="btn btn-primary" href="/contact">
            Begin a project
          </Link>
        </div>
        <button
          className="nav-menu-btn"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-menu-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} className={isActive(l.href) ? 'on' : undefined} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-primary mobile-menu-cta" href="/contact">
          Begin a project
        </Link>
      </div>
    </header>
  );
}
