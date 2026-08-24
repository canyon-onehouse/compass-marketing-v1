import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="page-head">
        <div className="wrap">
          <div className="inner">
            <div>
              <span className="eyebrow">
                <span className="tick"></span>404
              </span>
              <h1 className="display pt">Off the map.</h1>
            </div>
            <p className="pl">The page you&rsquo;re looking for isn&rsquo;t here.</p>
          </div>
        </div>
      </section>
      <section className="nextband">
        <div className="wrap">
          <div className="inner">
            <p className="q">Find your bearing.</p>
            <Link className="btn btn-primary" href="/">
              Back home <span className="ar">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
