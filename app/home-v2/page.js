import fs from 'fs';
import path from 'path';
import './home-v2.css';
import BtnRoll from '../components/BtnRoll';
import { plugins } from '../data/plugins';
import { productLogoSrc } from '../lib/productLogos';
import { IC as BASE_IC } from '../lib/icons';

const IC = {
  ...BASE_IC,
  headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="4" height="6" rx="1.6"/><rect x="17.5" y="13" width="4" height="6" rx="1.6"/><path d="M20 19a4 4 0 0 1-4 3h-3"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};

export const metadata = {
  title: 'WPExperts — WooCommerce Plugins Built To Grow Your Store (Draft)',
  alternates: { canonical: 'https://store.wpexperts.io/home-v2' },
  robots: 'noindex, nofollow',
};

const Ic = ({ name, size = 22 }) => (
  <svg className="ic" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: IC[name] || '' }} />
);

const byName = (n) => plugins.find((p) => p.name === n);

// Hero marquee: four plugins per category, dealt into 2 rows.
const wall = [...new Set(plugins.map((p) => p.category))].flatMap((c) => plugins.filter((p) => p.category === c).slice(0, 4));
const wallRows = [0, 1].map((i) => wall.filter((_, n) => n % 2 === i));
const goals = [['Wholesale', 'wholesale'], ['Pricing', 'pricing'], ['Checkout', 'checkout'], ['Discounts', 'discount']];

// Flagship = full-width dark card. Others = staggered two-column cards.
// Drop each screenshot at `shot` (1200x700 PNG); until it exists a placeholder shows the expected filename.
const flagship = { name: 'B2B Wholesale for WooCommerce', title: 'B2B Wholesale for WooCommerce', badge: 'AI-Powered', pitch: 'The complete AI-powered B2B engine: wholesale pricing, buyer roles, quotes, bulk ordering and a live analytics dashboard in one plugin.', shot: '/images/photos/wholesale-ai-dashboard.png', points: ['AI price suggestions & auto-quotes', 'Role-based & tiered wholesale pricing', 'Company accounts, credit & invoicing'] };
const featured = [
  { name: 'Currency Switcher', badge: 'Best seller', pitch: 'Sell worldwide in local currencies with auto-detection, live exchange rates and one-click switching.', shot: '/images/shots/currency-switcher.png' },
  { name: 'Donation for WooCommerce', pitch: 'Accept one-time and recurring donations with goals, progress bars and flexible amounts.', shot: '/images/shots/donation.png' },
];
const cols = [featured.filter((_, i) => i % 2 === 0), featured.filter((_, i) => i % 2 === 1)];

const exists = (src) => fs.existsSync(path.join(process.cwd(), 'public', src));

function Shot({ src, name }) {
  return (
    <div className="v2-shot">
      {exists(src)
        ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={src} alt={`${name} screenshot`} width="1200" height="700" loading="lazy" />
        : <div className="v2-shot__ph"><img src={productLogoSrc(name)} alt="" width="64" height="64" /><span>Add {src}</span></div>}
    </div>
  );
}

const why = [
  ['ai', 'AI-Powered', 'Smart pricing suggestions, auto-generated quotes and predictive B2B workflows.'],
  ['box', 'All-In-One Value', 'One membership unlocks 40+ plugins and every future release, saving up to 80%.'],
  ['headset', 'Expert Support', '200+ WooCommerce specialists on 24/7 coverage, 6-hour average response.'],
  ['shield', 'Battle-Tested', '1.5M+ active installs, tested against every WooCommerce release.'],
];

const reviews = [
  { t: 'The B2B Wholesale plugin replaced three tools for us. Wholesale pricing, quotes and analytics just work.', n: 'Marcus Reed', r: 'Founder, Nova Retail', a: 'MR', c: '#2450e6' },
  { t: 'The bulk order product table cut our wholesale checkout time by nearly half. Buyers love it.', n: 'Liam O’Brien', r: 'Distributor', a: 'LO', c: '#16a34a' },
  { t: 'Sales Agent automated commissions we used to track in spreadsheets. Huge time saver every month.', n: 'Sofia Marín', r: 'Sales Manager', a: 'SM', c: '#9333ea' },
];

const numbers = [
  ['4.6/5', 'Average rating from 5,000+ reviews', 'rating-star'],
  ['40+', 'Premium WooCommerce plugins', 'plugins-plug'],
  ['500K+', 'Happy customers worldwide', 'customers-smile', true],
  ['14 Yrs', 'Of WooCommerce & WordPress expertise', 'experience-calendar'],
  ['750K+', 'Active plugin installs', 'installs-globe'],
];

export default function HomeV2() {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <h1>WooCommerce Plugins That Turn <span className="grad">Browsers Into Buyers</span></h1>
            <p className="hero__sub">40+ premium WooCommerce extensions that solve one problem properly: conversion, retention, B2B wholesale and design. Built by real WooCommerce experts. Try any plugin risk-free; upgrade only when it&apos;s making you money.</p>
            <form className="hero__search" role="search" action="/products" method="get">
              <input type="search" name="q" placeholder="Search plugins, e.g. wholesale, currency…" aria-label="Search plugins" />
              <button type="submit" aria-label="Search">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
              </button>
            </form>
            <div className="hero__goals">
              <span>Popular:</span>
              {goals.map(([label, q]) => <a key={q} href={`/products?q=${q}`}>{label}</a>)}
            </div>
            <div className="hero__trust" aria-label="Platform and checkout partners">
              <img src="/images/partners/woo-pro.webp" alt="Woo Pro Partner" width="189" height="51" />
              <span className="hero__checkout"><img src="/images/partners/freemius.svg" alt="Freemius" width="112" height="25" /><span>Secure checkout</span></span>
            </div>
            <p className="v2-rating"><span className="v2-stars">★★★★★</span> 4.6 average from 5,000+ reviews</p>
          </div>
        </div>
        <div className="hrow" aria-hidden="true">
          {wallRows.map((row, i) => (
            <div className="hrow__row" key={i}>
              <div className="hrow__track">
                {[...row, ...row].map((p, n) => (
                  <div className="htile" key={n}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={productLogoSrc(p.name)} alt="" width="36" height="36" loading="eager" />
                    <b>{p.name}</b>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ IMPORTANT PLUGINS (top) ============ */}
      <section className="v2-sec" id="featured">
        <div className="container">
          <div className="v2-head">
            <h2>Our Plugins For Your Growth &amp; Success</h2>
            <p>The tools merchants reach for first: wholesale, pricing, checkout and giving.</p>
          </div>

          <article className="v2-flag">
            <div className="v2-flag__copy">
              <span className="v2-badge v2-badge--ai"><Ic name="ai" size={14} /> {flagship.badge}</span>
              <h3>{flagship.title}</h3>
              <p>{flagship.pitch}</p>
              <ul>{flagship.points.map((t) => <li key={t}><Ic name="check" size={18} />{t}</li>)}</ul>
              <a href={byName(flagship.name).href} target="_blank" rel="noopener" className="btn btn--primary btn--lg"><BtnRoll>Explore B2B Wholesale</BtnRoll></a>
            </div>
            <div className="v2-flag__shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={flagship.shot} alt="AI-powered B2B analytics dashboard for WooCommerce Wholesale" width="1254" height="1254" loading="lazy" />
            </div>
          </article>

          <div className="v2-cols">
            {cols.map((col, ci) => (
              <div className="v2-col" key={ci}>
                {col.map((f) => {
                  const p = byName(f.name);
                  return (
                    <article className="v2-card" key={f.name}>
                      <header>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={productLogoSrc(f.name)} alt="" width="44" height="44" />
                        <h3>{f.name}</h3>
                        {f.badge ? <span className="v2-badge">{f.badge}</span> : null}
                      </header>
                      <p>{f.pitch}</p>
                      <Shot src={f.shot} name={f.name} />
                      <a href={p.href} target="_blank" rel="noopener" className="v2-link">Explore {f.name.replace(' for WooCommerce', '')} <Ic name="arrow" size={16} /></a>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="v2-more"><a href="#all-plugins" className="btn btn--dark btn--lg"><BtnRoll>Browse all 40+ plugins</BtnRoll></a></div>
        </div>
      </section>

      {/* ============ WHAT MAKES US DIFFERENT ============ */}
      <section className="v2-sec v2-sec--soft">
        <div className="container">
          <div className="v2-head">
            <h2>What Makes Us Different</h2>
            <p>Not just another plugin developer company. Here&apos;s what we do differently.</p>
          </div>
          <div className="v2-why">
            {why.map(([ic, h, p]) => (
              <div className="v2-why__card" key={h}>
                <span className="v2-why__ic"><Ic name={ic} size={24} /></span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="v2-sec">
        <div className="container">
          <div className="v2-head">
            <h2>Recognized By Merchants &amp; WooCommerce Experts</h2>
            <p>A matter of pride to see store owners and agencies trust us.</p>
          </div>
          <div className="v2-rev">
            {reviews.map((r) => (
              <figure className="v2-rev__card" key={r.n}>
                <div className="v2-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>{r.t}</blockquote>
                <figcaption>
                  <span className="v2-av" style={{ background: r.c }}>{r.a}</span>
                  <span><b>{r.n}</b>{r.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NUMBERS ============ */}
      <section className="v2-sec v2-sec--soft">
        <div className="container">
          <div className="v2-head">
            <h2>Trusted By WordPress &amp; WooCommerce Users</h2>
            <p>Backed by store owners, wholesalers and agencies around the world.</p>
          </div>
          <div className="v2-num">
            {numbers.map(([n, l, ic, hi]) => (
              <div className={`v2-num__tile${hi ? ' v2-num__tile--hi' : ''}`} key={l}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="v2-num__img" src={`/images/stats/${ic}.png`} alt="" width="512" height="512" loading="lazy" />
                <b>{n}</b><span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ALL PLUGINS (bottom): same markup as the main homepage, rendered by /js/main.js ============ */}
      <section className="section section--framed" id="all-plugins">
        <div className="container">
          <div className="section__head">
            <h2>Find The Perfect Plugin <br /> For Your Niche</h2>
            <p>Browse 40+ WooCommerce extensions organized by exactly <br /> what you&apos;re trying to achieve.</p>
          </div>
          <div className="ctabs" id="catTabs" role="tablist"></div>
          <div className="cat-bar">
            <div>
              <h3 id="catTitle">B2B &amp; Wholesale</h3>
              <p id="catGoal"></p>
            </div>
            <span className="cat-count">40+ plugins available</span>
          </div>
          <div className="cat-grid" id="catGrid"></div>
          <div className="section__foot"><a href="/products" className="btn btn--dark btn--lg"><BtnRoll>View all plugins</BtnRoll></a></div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="v2-sec v2-sec--tight">
        <div className="container">
          <div className="v2-cta">
            <h2>Get 40+ Sales-Boosting Plugins From Just <span>$399</span></h2>
            <p>Join the All Access Club and unlock every WooCommerce plugin we build. Start free, upgrade only when it&apos;s making you money.</p>
            <div className="v2-cta__actions">
              <a href="https://store.wpexperts.io/" target="_blank" rel="noopener" className="btn btn--primary btn--lg"><BtnRoll>Join The Club</BtnRoll></a>
              <a href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener" className="btn btn--outline btn--lg"><BtnRoll>Talk To Support</BtnRoll></a>
            </div>
            <ul>
              <li><Ic name="check" size={16} />14-day money-back</li>
              <li><Ic name="check" size={16} />Instant access</li>
              <li><Ic name="check" size={16} />Cancel anytime</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
