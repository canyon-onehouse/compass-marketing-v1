/* eslint-disable @next/next/no-img-element -- SVG logo, no optimization needed */
import Link from 'next/link';
import { CONTACT, SOCIAL } from '@/data/site';

export default function Footer() {
  return (
    <footer className="foot foot--light">
      <div className="wrap">
        <div className="top">
          <div className="brandcol">
            <img className="wm" src="/images/compass_wordmark.svg" alt="Compass" />
            <p>
              Compass Design Studio is a residential design and interiors practice rooted in Midwest
              integrity, Southern hospitality, and a quiet, faith-shaped commitment to service.
            </p>
          </div>
          <div className="col">
            <div className="k">Explore</div>
            <Link href="/projects">Work</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/process">Process</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="col">
            <div className="k">Studio</div>
            <Link href="/studio">Northern Alabama</Link>
            <a href={`mailto:${CONTACT.emails.join(',')}`}>Email us</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </div>
          <div className="col">
            <div className="k">Follow along</div>
            <div className="social">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"></circle></svg>
              </a>
              <a href={SOCIAL.pinterest} target="_blank" rel="noopener" aria-label="Pinterest">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3a9 9 0 0 0-3.3 17.4c-.1-.8-.1-2 .1-2.9l1.1-4.6s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.1-.2.9.5 1.6 1.4 1.6 1.6 0 2.8-1.7 2.8-4.1 0-2.2-1.5-3.7-3.8-3.7a3.9 3.9 0 0 0-4 4c0 .8.3 1.6.7 2.1l-.3 1.1c0 .2-.2.3-.4.2-1.1-.5-1.8-2.1-1.8-3.4 0-2.8 2-5.3 5.8-5.3 3.1 0 5.4 2.2 5.4 5.1 0 3-1.9 5.5-4.6 5.5-.9 0-1.7-.5-2-1l-.6 2.1c-.2.8-.7 1.7-1.1 2.3A9 9 0 1 0 12 3Z"></path></svg>
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.28-.13-2.42-.13-2.4 0-4.03 1.46-4.03 4.15V9.9H7.5V13h2.75v8h3.25Z"></path></svg>
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.3V21H3.3V8.9Zm5.4 0h3.16v1.65h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.9 2.17 3.9 5v6.15h-3.3v-5.45c0-1.3-.02-2.97-1.8-2.97-1.8 0-2.08 1.4-2.08 2.87V21H8.7V8.9Z"></path></svg>
              </a>
            </div>
            <p className="social-note">Our work lives day-to-day on social.</p>
          </div>
        </div>
        <div className="rule"></div>
        <div className="meta">
          <span className="m">© MMXXVI Compass Design Studio</span>
          <span className="m">Northern Alabama</span>
          <span className="m">Residential Design · Interiors</span>
          <Link className="m" href="/legal">Legal · FAQs</Link>
        </div>
      </div>
    </footer>
  );
}
