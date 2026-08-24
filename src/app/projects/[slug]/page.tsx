import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, projectBySlug } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { images: [project.hero.src] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();
  const next = projectBySlug(project.next);

  return (
    <main>
      <section className="case-head">
        <div className="wrap">
          <div className="inner">
            <Link className="ulink back" href="/projects">
              ← Selected work
            </Link>
            <div className="tt">
              <div>
                <span className="eyebrow">
                  <span className="tick"></span>
                  {project.eyebrow}
                </span>
                <h1 className="display ct">{project.title}</h1>
              </div>
              {project.meta && <p className="cm">{project.meta}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="case-hero">
        <div className={`shot ${project.hero.tone}`}>
          <Image
            className="ph"
            src={project.hero.src}
            alt={project.hero.alt}
            fill
            sizes="100vw"
            priority
          />
          {project.hero.capsule && (
            <span className="capsule">
              <span className="dot"></span>
              {project.hero.capsule}
            </span>
          )}
        </div>
      </section>

      <section className="case-body">
        <div className="wrap inner">
          <div className="prose">
            {project.prose.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <aside className="sheet">
            <div className="sh">{project.sheetHeading}</div>
            {project.sheet.map((row) => (
              <div className="srow" key={row.label}>
                <div className="k">{row.label}</div>
                <div className="v">{row.value}</div>
              </div>
            ))}
            {project.sheetCta && (
              <Link className="btn btn-primary sheet-cta" href="/contact">
                Request plans
              </Link>
            )}
          </aside>
        </div>
      </section>

      <section className={`case-gallery${project.galleryClass ? ` ${project.galleryClass}` : ''}`}>
        <div className="wrap inner">
          {project.gallery.map((tile) => (
            <div
              className={`shot ${tile.tone}${tile.modifier ? ` ${tile.modifier}` : ''}`}
              key={tile.src + tile.caption}
            >
              <Image
                className="ph"
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span className="capsule">
                <span className="dot"></span>
                {tile.caption}
              </span>
            </div>
          ))}
        </div>
      </section>

      {project.testimonial && (
        <section className="quote">
          <div className="texture"></div>
          <div className="wrap inner">
            <div className="mark">&ldquo;</div>
            <p className="q">{project.testimonial.quote}</p>
            <div className="who">
              <span className="nm">{project.testimonial.name}</span>
              <span className="rl">{project.testimonial.role}</span>
            </div>
          </div>
        </section>
      )}

      <section className="nextband case-next">
        <div className="wrap">
          <div className="inner">
            {next && (
              <Link className="big" href={`/projects/${next.slug}`}>
                <p className="lbl">Next project</p>
                <p className="nm">{next.title} →</p>
              </Link>
            )}
            <Link className="btn btn-outline" href="/projects">
              All work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
