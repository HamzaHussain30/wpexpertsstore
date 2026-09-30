import BtnRoll from './BtnRoll';

export default function SiteHeader() {
  return (
    <>
      {/* ============ ANNOUNCEMENT BAR ============ */}
      <div className="announce" role="region" aria-label="Promotion">
        <div className="container announce__inner">
          <span className="announce__spark">💎</span>
          <p>
            Get the <strong>All Access Bundle</strong> — 40+ premium WooCommerce plugins in one membership, <strong>save up to 80%</strong>
          </p>
          <a className="announce__cta" href="https://store.wpexperts.io/" target="_blank" rel="noopener">Get Bundle Now →</a>
        </div>
      </div>

      {/* ============ HEADER ============ */}
      <header className="site-header" id="siteHeader">
      <div className="container site-header__inner">
        <a href="/" className="brand" aria-label="WPExperts home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand__logo" src="/images/photos/Logo.svg" alt="WPExperts" width="127" height="28" />
        </a>

        <nav className="nav" aria-label="Primary">
          <div className="nav-item nav-item--mega" id="pluginsMenu">
            <button className="nav-link" aria-haspopup="true" aria-expanded="false">
              Plugins{' '}
              <span className="caret" data-icon="chevrondown"></span>
            </button>
            <div className="mega" role="menu">
              <div className="mega__head">
                <span>Top WooCommerce Plugins</span>
                <a href="/#categories">Browse By Category →</a>
              </div>
              <div className="mega__grid" id="megaGrid"></div>
              <a className="mega__all" href="/products">View All 40+ WooCommerce Plugins →</a>
            </div>
          </div>
          <a href="/#b2b">B2B Wholesale</a>
          <a href="/#compare">Why Us</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/blog">Blog</a>
          <a href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener">Support</a>
        </nav>

        <div className="site-header__cta">
          <a href="/products" className="btn btn--dark"><BtnRoll>Browse Plugins</BtnRoll></a>
        </div>

        <button className="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav className="mobile-nav" id="mobileNav" aria-label="Mobile">
        <a href="/products">Plugins</a>
        <a href="/#b2b">B2B Wholesale</a>
        <a href="/#compare">Why Us</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/blog">Blog</a>
        <a href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener">Support</a>
        <a href="/products" className="btn btn--dark btn--block"><BtnRoll>Browse Plugins</BtnRoll></a>
      </nav>
    </header>
    </>
  );
}
