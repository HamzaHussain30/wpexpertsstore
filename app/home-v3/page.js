import './home-v3.css';
import V3Header from './V3Header';
import HeroArt from './HeroArt';
import { Ic } from './Ic';
import { plugins } from '../data/plugins';
import { productLogoSrc } from '../lib/productLogos';

export const metadata = {
  title: 'WPExperts: Premium WooCommerce Plugins To Grow Your Store (Draft v3)',
  alternates: { canonical: 'https://store.wpexperts.io/home-v3' },
  robots: 'noindex, nofollow',
};

const byName = (n) => plugins.find((p) => p.name === n);
const count = (c) => plugins.filter((p) => p.category === c).length;
const catHref = (c) => `/products?cat=${encodeURIComponent(c)}`;

// Real catalogue categories (counts come from app/data/plugins.js).
const cats = [
  { name: 'B2B & Wholesale', icon: 'b2b', tone: 'blue', desc: 'Wholesale pricing, quotes and bulk ordering' },
  { name: 'Pricing & Discounts', icon: 'discount', tone: 'amber', desc: 'Smarter offers that lift order value' },
  { name: 'Checkout & Conversion', icon: 'cart', tone: 'green', desc: 'Faster checkout, fewer abandoned carts' },
  { name: 'Donations & Fundraising', icon: 'heart', tone: 'rose', desc: 'One-time and recurring giving' },
  { name: 'Store Operations', icon: 'inventory', tone: 'violet', desc: 'Automate orders, inventory and invoices' },
  { name: 'Global & Niche', icon: 'globe', tone: 'cyan', desc: 'Currencies, delivery and niche stores' },
];

const featured = [
  { name: 'B2B Wholesale for WooCommerce', title: 'B2B Wholesale for WooCommerce', badge: 'Best Seller', desc: 'The complete AI-powered wholesale engine: pricing, roles, quotes and analytics in one plugin.', art: '/images/shots/wholesale.png', alt: 'Wholesale price tiers with AI quote and price suggestion' },
  { name: 'Currency Switcher', title: 'Currency Switcher for WooCommerce', desc: 'Sell worldwide in local currencies with auto-detection and live exchange rates.', art: '/images/shots/currency-switcher.png', alt: 'Currency Switcher widget on a product page' },
  { name: 'Donation for WooCommerce', title: 'Donation for WooCommerce', desc: 'Accept one-time and recurring donations with goals and progress bars.', art: '/images/shots/donation.png', alt: 'Donation widget with amounts and progress bar' },
];

const why = [
  ['box', 'All-in-One Value', '40+ plugins to power every part of your store.'],
  ['award', '14+ Years of Expertise', 'Trusted by hundreds of thousands of businesses.'],
  ['headset', 'Dedicated Support', 'Get help from real experts whenever you need it.'],
  ['shield', 'Built for Growth', 'Reliable, secure, and regularly updated.'],
];

// Genuine reviews already published on the current site (public/js/main.js).
const reviews = [
  { t: 'The B2B Wholesale plugin replaced three tools for us. Wholesale pricing, quotes and analytics just work. Real WooCommerce experts.', n: 'Marcus Reed', r: 'Founder, Nova Retail', a: 'MR', c: '#2450e6', featured: true },
  { t: 'Best WooCommerce extensions we’ve bought. Support answered in hours and the currency switcher lifted our AOV noticeably.', n: 'Aisha Khan', r: 'Ops Lead, BluePeak', a: 'AK', c: '#7c3aed' },
  { t: 'Donation for WooCommerce made recurring campaigns effortless for our nonprofit. Clean, reliable woo plugins.', n: 'Elena Rossi', r: 'Community Nonprofit', a: 'ER', c: '#f59e0b' },
];

// Verified figures already used on the site.
const stats = [
  ['4.6/5', 'Average Rating', 'rating-star'],
  ['500K+', 'Happy Customers', 'customers-smile'],
  ['14+', 'Years of Expertise', 'experience-calendar'],
  ['750K+', 'Active Plugin Installs', 'installs-globe'],
];

const bundle = ['Wholesale for WooCommerce', 'Currency Switcher', 'Donation for WooCommerce', 'Bulk Order Product Table', 'Smart Discounts & Coupons', 'Instant Checkout'];

const metrics = [
  ['user', '500K+', 'Happy Users'],
  ['award', '14+', 'Years of Expertise'],
  ['star', '4.6/5', 'Average Rating'],
];

export default function HomeV3() {
  return (
    <div className="v3">
      <V3Header />
      <main>
        {/* ============ HERO ============ */}
        <section className="v3-hero">
          <div className="container v3-hero__inner">
            <div className="v3-hero__copy">
              <span className="v3-eyebrow">Trusted WooCommerce Experts</span>
              <h1>Power Your WooCommerce Store With Smarter Plugins</h1>
              <p>40+ powerful WooCommerce plugins to increase sales, simplify operations, and grow your business.</p>
              <div className="v3-hero__cta">
                <a href="/products" className="v3-btn v3-btn--amber v3-btn--lg">Explore Plugins <Ic name="arrow" size={18} stroke={2.2} /></a>
                <a href="#popular" className="v3-btn v3-btn--ghost v3-btn--lg">View Best Sellers</a>
              </div>
              <ul className="v3-metrics">
                {metrics.map(([ic, n, l]) => (
                  <li key={l}>
                    <span className="v3-metrics__ic"><Ic name={ic} size={20} /></span>
                    <span><b>{n}</b>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <HeroArt />
          </div>
        </section>

        {/* ============ CATEGORY STRIP ============ */}
        <section className="v3-strip-wrap" aria-label="Plugin categories">
          <div className="container">
            <div className="v3-strip">
              {cats.slice(0, 5).map((c) => (
                <a className="v3-strip__item" key={c.name} href={catHref(c.name)}>
                  <span className={`v3-tile v3-tile--${c.tone}`}><Ic name={c.icon} size={22} /></span>
                  <span><b>{c.name}</b><small>{c.desc}</small></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FEATURED PLUGINS ============ */}
        <section className="v3-sec" id="popular">
          <div className="container">
            <div className="v3-head v3-head--row">
              <div>
                <h2>Our Most Popular Plugins</h2>
                <p>Powerful solutions for every type of WooCommerce store.</p>
              </div>
              <a href="/products" className="v3-link">View All Plugins <Ic name="arrow" size={16} stroke={2} /></a>
            </div>
            <div className="v3-feat">
              {featured.map((f) => {
                const p = byName(f.name);
                return (
                  <a className="v3-card" key={f.title} href={p.href} target="_blank" rel="noopener">
                    <div className="v3-card__art">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.art} alt={f.alt} width="1642" height="958" loading="lazy" />
                      {f.badge ? <span className="v3-badge">{f.badge}</span> : null}
                    </div>
                    <div className="v3-card__body">
                      <span className="v3-card__meta">{p.category}</span>
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                      <div className="v3-card__foot">
                        <span className="v3-card__price"><small>From</small>{p.price.replace('From ', '')}</span>
                        <span className="v3-link">Explore plugin <Ic name="arrow" size={16} stroke={2} /></span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ WHY WPEXPERTS ============ */}
        <section className="v3-sec v3-sec--soft" id="why">
          <div className="container">
            <div className="v3-head">
              <h2>What Makes WPExperts Different</h2>
              <p>More than just plugins: a partner in your WooCommerce growth.</p>
            </div>
            <div className="v3-why">
              {why.map(([ic, h, p]) => (
                <div className="v3-why__card" key={h}>
                  <span className="v3-tile v3-tile--blue v3-tile--lg"><Ic name={ic} size={26} /></span>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="v3-sec" id="reviews">
          <div className="container">
            <div className="v3-head">
              <h2>Loved by Merchants Worldwide</h2>
              <p>Trusted by store owners, developers, and agencies around the globe.</p>
            </div>
            <div className="v3-rev">
              {reviews.map((r) => (
                <figure className={`v3-rev__card${r.featured ? ' is-featured' : ''}`} key={r.n}>
                  <div className="v3-stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote>{r.t}</blockquote>
                  <figcaption>
                    <span className="v3-av" style={{ background: r.c }}>{r.a}</span>
                    <span><b>{r.n}</b>{r.r}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATS ============ */}
        <section className="v3-stats" aria-label="WPExperts in numbers">
          <div className="container v3-stats__inner">
            {stats.map(([n, l, img]) => (
              <div className="v3-stats__item" key={l}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/stats/${img}.png`} alt="" width="64" height="64" loading="lazy" />
                <span><b>{n}</b>{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ EXPLORE BY CATEGORY ============ */}
        <section className="v3-sec" id="categories">
          <div className="container">
            <div className="v3-head">
              <h2>Explore Plugins by Category</h2>
              <p>Find the perfect solution for your business needs.</p>
            </div>
            <div className="v3-cats">
              {cats.map((c) => (
                <a className="v3-cats__card" key={c.name} href={catHref(c.name)}>
                  <span className={`v3-tile v3-tile--${c.tone} v3-tile--lg`}><Ic name={c.icon} size={26} /></span>
                  <b>{c.name}</b>
                  <small>{count(c.name)} plugins</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="v3-cta">
          <div className="container v3-cta__inner">
            <div className="v3-cta__copy">
              <h2>Get 40+ <span className="v3-nowrap">Sales-Boosting</span> Plugins From Just <span>$399</span></h2>
              <p>Join 500K+ WooCommerce store owners who trust WPExperts to build, scale, and grow their online business.</p>
              <div className="v3-cta__btns">
                <a href="/products" className="v3-btn v3-btn--amber v3-btn--lg">Explore All Plugins <Ic name="arrow" size={18} stroke={2.2} /></a>
                <a href="https://store.wpexperts.io/" target="_blank" rel="noopener" className="v3-btn v3-btn--ghost v3-btn--lg">View Pricing</a>
              </div>
            </div>
            <ul className="v3-cta__list">
              {['Regular updates', 'Dedicated support', '14-day money-back guarantee'].map((t) => (
                <li key={t}><span><Ic name="check" size={16} stroke={2.6} /></span>{t}</li>
              ))}
            </ul>
            <div className="v3-bundle" aria-hidden="true">
              {bundle.map((n) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={n} src={productLogoSrc(n)} alt="" width="64" height="64" loading="lazy" />
              ))}
              <span className="v3-bundle__tag">40+ plugins</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
