import { caseStudies } from '../data/caseStudies';

export const metadata = {
  title: 'Case Studies — Real Results From WPExperts Plugins | WPExperts',
  description:
    'See how stores, wholesalers and nonprofits grow with WPExperts WooCommerce plugins — real results from B2B Wholesale, Donation, Currency Switcher and more.',
  alternates: { canonical: 'https://store.wpexperts.io/case-studies' },
};

export default function CaseStudyArchive() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true"></div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><span>Case Studies</span>
          </nav>
          <span className="pill">Real Results</span>
          <h1>Customer <span className="grad">Success Stories</span></h1>
          <p>Discover how WPExperts’ WooCommerce plugins transform stores, nonprofits and wholesalers worldwide.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cs-grid">
            {caseStudies.map((c) => (
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
