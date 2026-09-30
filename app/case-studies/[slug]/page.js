import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '../../data/caseStudies';

const SITE = 'https://store.wpexperts.io';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — ${cs.org} Case Study | WPExperts`,
    description: cs.subtitle,
    alternates: { canonical: `${SITE}/case-studies/${cs.slug}` },
    openGraph: {
      type: 'article',
      title: `${cs.title} — ${cs.org}`,
      description: cs.subtitle,
      url: `${SITE}/case-studies/${cs.slug}`,
      images: [`${SITE}/images/photos/${cs.image}.jpg`],
    },
  };
}

export default function CaseStudyPage({ params }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const more = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.title,
    description: cs.subtitle,
    image: `${SITE}/images/photos/${cs.image}.jpg`,
    author: { '@type': 'Organization', name: 'WPExperts' },
    publisher: { '@type': 'Organization', name: 'WPExperts', logo: { '@type': 'ImageObject', url: `${SITE}/images/logo.png` } },
    mainEntityOfPage: `${SITE}/case-studies/${cs.slug}`,
  };

  return (
    <main className="cs-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="cs-hero">
        <div className="cs-hero__deco" aria-hidden="true"></div>
        <div className="container">
          <nav className="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><a href="/case-studies">Case Studies</a><span>/</span><span>{cs.org}</span>
          </nav>
          <h1>{cs.title}</h1>
          <p>{cs.subtitle}</p>
        </div>
      </section>

      <div className="container cs-layout">
        {/* meta panel */}
        <aside className="cs-meta">
          <div className="cs-meta__cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/photos/${cs.image}.jpg`} alt={`${cs.org} case study`} width="1100" height="620" loading="eager" />
          </div>
          <dl>
            <div><dt>Organization</dt><dd>{cs.org}</dd></div>
            <div><dt>Website</dt><dd><a href={cs.websiteUrl} target="_blank" rel="noopener">{cs.website}</a></dd></div>
            <div><dt>Plugin Used</dt><dd><a href={cs.pluginUrl} target="_blank" rel="noopener">{cs.plugin}</a></dd></div>
            <div><dt>Type</dt><dd>{cs.type}</dd></div>
            <div><dt>Focus Area</dt><dd>{cs.focus}</dd></div>
          </dl>
        </aside>

        {/* body */}
        <article className="cs-body">
          <section><h2>Summary</h2><p>{cs.summary}</p></section>
          <section><h2>About the Customer</h2><p>{cs.about}</p></section>
          <section><h2>Understanding the Challenge</h2><p>{cs.challenge}</p></section>
          <section><h2>Solution</h2><p>{cs.solution}</p></section>
          <section><h2>Result</h2><p>{cs.result}</p></section>
        </article>
      </div>

      {/* CTA */}
      <section className="cs-cta-wrap">
        <div className="container">
          <div className="cs-cta">
            <span className="cs-cta__glow" aria-hidden="true"></span>
            <span className="pill pill--onDark">Get Started</span>
            <h2>{cs.cta.heading}</h2>
            <p>{cs.cta.text}</p>
            <div className="cs-cta__actions">
              <a className="btn btn--primary btn--lg" href={cs.pluginUrl} target="_blank" rel="noopener">Get the Plugin</a>
              <a className="btn btn--outline-light btn--lg" href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener">Talk to Experts</a>
            </div>
          </div>
        </div>
      </section>

      {/* more case studies */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head"><h2>Explore More Case Studies</h2></div>
          <div className="cs-grid">
            {more.map((c) => (
              <a className="cscard" key={c.slug} href={`/case-studies/${c.slug}`}>
                <div className="cscard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/photos/${c.image}.jpg`} alt={`${c.org} WooCommerce case study`} loading="lazy" />
                  <span className="cscard__tag">{c.tag}</span>
                </div>
                <div className="cscard__body">
                  <span className="cscard__org">{c.org}</span>
                  <h3>{c.title}</h3>
                  <p>{c.subtitle}</p>
                  <span className="cscard__link">Read case study →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
