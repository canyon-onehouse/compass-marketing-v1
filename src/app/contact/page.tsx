import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { CONTACT } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us about your project. Compass Design Studio takes on a handful of projects each year — share a little about yours and we’ll set up a conversation.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="begin" id="begin">
        <div className="texture"></div>
        <div className="wrap inner">
          <div className="pitch">
            <span className="eyebrow">
              <span className="tick"></span>Begin a project
            </span>
            <h1 className="bt">Tell us about your project.</h1>
            <p className="bl">
              We take on a handful of projects each year. Share a little about your project and
              we&rsquo;ll contact you back to set up a conversation.
            </p>
            <div className="contacts">
              <a href={`mailto:${CONTACT.emails.join(',')}`}>
                <span className="k">Email</span> {CONTACT.emails[0]}
                <br />
                {CONTACT.emails[1]}
              </a>
              <a href={CONTACT.phoneHref}>
                <span className="k">Call</span> {CONTACT.phone}
              </a>
              <Link href="/studio">
                <span className="k">Studio</span> Northern Alabama
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
