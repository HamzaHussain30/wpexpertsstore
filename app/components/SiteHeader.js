import BtnRoll from './BtnRoll';
import { productLogoSrc } from '../lib/productLogos';

const Arrow = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

// Mega menu: six top plugins + a link to the full list.
const megaItems = [
  ['B2B Wholesale (AI)', 'Wholesale pricing, roles & quotes', '/products/wholesale-for-woocommerce-pro'],
  ['Donation', 'Charity & recurring fundraising', '/products/donation-for-woocommerce'],
  ['Currency Switcher', 'Multi-currency & higher AOV', '/products/currency-switcher-for-woocommerce'],
  ['Sales Agent', 'Agents & automated commissions', '/products/sales-agent-for-woocommerce'],
  ['Bulk Order Product Table', 'Fast B2B ordering table', '/products/bulk-order-form-for-woocommerce'],
  ['User Registration', 'Custom signup form builder', '/products/user-registration-for-woocommerce'],
];

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
              <div className="mega__grid">
                {megaItems.map(([name, sub, href]) => (
                  <a className="mega__item" key={name} href={href}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={productLogoSrc(name)} alt="" width="40" height="40" />
                    <span><b>{name}</b><small>{sub}</small></span>
                  </a>
                ))}
              </div>
              <a className="mega__all" href="/products">View all 40+ plugins <Arrow /></a>
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
