import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectsFilter from '@/components/ProjectsFilter';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected residential design and interiors work by Compass Design Studio — custom projects and ready-to-build plans.',
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="works">
        <div className="wrap">
          <ProjectsFilter />
        </div>
      </section>

      <section className="nextband">
        <div className="wrap">
          <div className="inner">
            <p className="q">Have a site in mind?</p>
            <Link className="btn btn-primary" href="/contact">
              Begin a project <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
