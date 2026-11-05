import '../../home-v2.css'; // .v2-cta band, reviews tints, brands strip
import '../../product-detail.css';
import BtnRoll from '../../components/BtnRoll';
import PluginCard from '../../components/PluginCard';
import { catalog, bySlug, relatedTo, priceNumber } from '../../data/details';
import { ICONS, iconFor } from '../../lib/pluginIcons';
import { IS_DEV, pluginImage, slotPath } from '../../lib/pluginImages';
import { productLogoSrc } from '../../lib/productLogos';

// no `dynamicParams = false`: with output "export" it trips next dev's fallback check (blog/[slug] does the same)
export function generateStaticParams() {
  return catalog.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = bySlug(params.slug);
  return {
    title: `${p.title || `${p.name} for WooCommerce`} | WPExperts`,
    description: p.meta || p.desc,
    alternates: { canonical: `https://store.wpexperts.io/products/${p.slug}` },
  };
}

const BUNDLE = 'https://store.wpexperts.io/woocommerce-all-access/';
const PRESALE = 'https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/4';
const INCLUDED = ['Priority support', 'Regular plugin updates', 'All core features included', 'Auto-renew subscription'];
const FIRST_FEATURES = 9; // the rest sit behind "Show all"
const MAX_SHOTS = 6;

const Ic = ({ name, size = 20 }) => (
  <svg className="ic" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }} />
);
const shorten = (s, n = 240) => (s.length <= n ? s : (s.slice(0, n).match(/^.*[.!?](?=\s|$)/) || [s.slice(0, n).replace(/\s+\S*$/, '') + '…'])[0]);

// An image slot: the picture if the file exists, otherwise an icon tile (and, in `npm run dev`, the exact file to add).
function Slot({ slug, file, size, icon, label, className = '' }) {
  const src = pluginImage(slug, file);
  if (src) {
    /* eslint-disable-next-line @next/next/no-img-element */
    return <img className={`pd-img ${className}`} src={src} alt={label} loading="lazy" />;
  }
  return (
    <div className={`pd-slot ${className}`}>
      <span className="pd-slot__ic"><Ic name={icon} size={40} /></span>
      {IS_DEV ? <span className="pd-slot__hint"><b>Add image</b><code>{slotPath(slug, file)}</code><em>{size}</em></span> : null}
    </div>
  );
}

export default function ProductPage({ params }) {
  const p = bySlug(params.slug);
  const buy = p.storePage || p.href;
  const lead = shorten(p.lead || p.desc);
  const related = relatedTo(p);
  const hero = pluginImage(p.slug, 'hero');
  const shots = Array.from({ length: MAX_SHOTS }, (_, i) => pluginImage(p.slug, `shot-${i + 1}`)).filter(Boolean);
  // in dev, show up to three empty slots so you can see where screenshots go
  const shotSlots = shots.length ? shots.length : IS_DEV ? 3 : 0;
  const showShots = shots.length > 0 || IS_DEV;
  const nav = [
    p.highlights.length && ['overview', 'Overview'],
    p.features.length && ['features', 'Features'],
    showShots && ['screenshots', 'Screenshots'],
    ['pricing', 'Pricing'],
    p.faqs.length && ['faq', 'FAQ'],
  ].filter(Boolean);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      description: p.meta || p.desc,
      image: `https://store.wpexperts.io${hero || productLogoSrc(p.name)}`,
      brand: { '@type': 'Organization', name: 'WPExperts' },
      offers: { '@type': 'Offer', price: priceNumber(p), priceCurrency: 'USD', url: `https://store.wpexperts.io/products/${p.slug}`, availability: 'https://schema.org/InStock' },
    },
    p.faqs.length && {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ].filter(Boolean);

  const Tier = ({ name, sites, price, was, off, popular, href, label = 'Buy now' }) => (
    <div className={`pd-tier${popular ? ' pd-tier--pop' : ''}`}>
      {popular ? <span className="pd-tier__badge">Most popular</span> : null}
      <h3>{name}</h3>
      <p className="pd-tier__sites">{sites}</p>
      <p className="pd-tier__price"><b>{price}</b><small> / year</small></p>
      <p className="pd-tier__was">{was ? <><s>{was}</s>{off ? <em>{off}</em> : null}</> : ' '}</p>
      <ul>{INCLUDED.map((t) => <li key={t}><Ic name="check" size={18} />{t}</li>)}</ul>
      <a className={`btn ${popular ? 'btn--primary' : 'btn--outline'} btn--block`} href={href} target="_blank" rel="noopener"><BtnRoll>{label}</BtnRoll></a>
    </div>
  );

  return (
    <main>
      {/* scraped copy goes in here, so "<" is escaped to keep a stray "</script>" from ending the tag */}
      {jsonLd.map((j, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j).replace(/</g, '\\u003c') }} />)}

      {/* ============ HERO ============ */}
      <section className="pd-hero">
        <div className="container pd-hero__inner">
          <div className="pd-hero__copy">
            <a className="pd-back" href="/products"><Ic name="arrow" size={16} /> All plugins</a>
            <h1>{p.name}</h1>
            <p className="pd-lead">{lead}</p>
            {p.heroPoints.length ? (
              <ul className="pd-points">
                {p.heroPoints.slice(0, 4).map((t) => <li key={t}><Ic name={iconFor(t)} size={18} />{t}</li>)}
              </ul>
            ) : null}
            <div className="pd-cta">
              <a className="btn btn--primary btn--lg" href={buy} target="_blank" rel="noopener"><BtnRoll>{`Buy now · ${p.price}`}</BtnRoll></a>
              {p.demo ? <a className="btn btn--outline btn--lg" href={p.demo} target="_blank" rel="noopener"><BtnRoll>Live demo</BtnRoll></a> : null}
              {p.docs ? <a className="pd-link" href={p.docs} target="_blank" rel="noopener">Read the docs <Ic name="arrow" size={16} /></a> : null}
            </div>
            <div className="pd-trust">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/partners/woo-pro.webp" alt="Woo Pro Partner" width="126" height="34" />
              <span className="pd-trust__item">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/partners/freemius.svg" alt="Freemius" width="84" height="19" /><small>Secure checkout</small></span>
              <span className="pd-trust__item"><Ic name="shield" size={22} /><small>14-day money-back</small></span>
            </div>
          </div>
          <div className="pd-hero__visual">
            {hero ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img className="pd-shot" src={hero} alt={`${p.name} screenshot`} width="1100" height="642" />
            ) : (
              <div className="pd-panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={productLogoSrc(p.name)} alt="" width="112" height="112" />
                {p.features.length ? <ul>{p.features.slice(0, 3).map((f) => <li key={f.t}><Ic name={iconFor(f.t)} size={16} />{f.t}</li>)}</ul> : null}
                {IS_DEV ? <span className="pd-slot__hint pd-slot__hint--panel"><b>Add hero image</b><code>{slotPath(p.slug, 'hero')}</code><em>1100 x 642</em></span> : null}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============ STICKY SECTION NAV ============ */}
      <nav className="pd-nav" aria-label="On this page">
        <div className="container pd-nav__inner">
          <ul>{nav.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
          <a className="btn btn--primary btn--sm" href={buy} target="_blank" rel="noopener"><BtnRoll>Buy now</BtnRoll></a>
        </div>
      </nav>

      {/* ============ TRUSTED BY (same logos as the homepage; filled by /js/main.js) ============ */}
      <section className="brands v2-brands pd-brands" aria-label="Customers">
        <div className="container">
          <p className="brands__label">Trusted By <strong>1.5&nbsp;Million+</strong> Brands, Distributors &amp; Stores Worldwide</p>
        </div>
        <div className="brands__marquee">
          <div className="brands__row" id="brandRowA"></div>
          <div className="brands__row brands__row--rev" id="brandRowB"></div>
        </div>
      </section>

      {/* ============ OVERVIEW: what it does, each with its own image slot ============ */}
      {p.highlights.length ? (
        <section className="pd-sec" id="overview">
          <div className="container">
            <div className="v2-head">
              <h2>What {p.name} does for your store</h2>
              <p>The core of the plugin, in plain terms.</p>
            </div>
            <div className="pd-rows">
              {p.highlights.map((h, i) => (
                <article className={`pd-row${i % 2 ? ' pd-row--flip' : ''}`} key={h.t}>
                  <div className="pd-row__copy">
                    <span className="pd-row__ic"><Ic name={iconFor(h.t, iconFor(h.d, 'sparkles'))} size={24} /></span>
                    <h3>{h.t}</h3>
                    <p>{h.d}</p>
                    {h.b.length ? <ul>{h.b.map((b) => <li key={b}><Ic name="check" size={18} />{b}</li>)}</ul> : null}
                  </div>
                  <Slot slug={p.slug} file={`section-${i + 1}`} size="900 x 560" icon={iconFor(h.t, iconFor(h.d, 'sparkles'))} label={h.t} className="pd-row__media" />
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ============ FEATURES ============ */}
      {p.features.length ? (
        <section className="pd-sec pd-sec--soft" id="features">
          <div className="container">
            <div className="v2-head">
              <h2>Every feature, at a glance</h2>
              <p>{p.features.length} features included in every plan.</p>
            </div>
            <div className="pd-fg">
              {p.features.slice(0, FIRST_FEATURES).map((f) => <Feature key={f.t} f={f} />)}
            </div>
            {p.features.length > FIRST_FEATURES ? (
              <details className="pd-more">
                <summary><span className="pd-more__open">Show all {p.features.length} features</span><span className="pd-more__close">Show fewer</span></summary>
                <div className="pd-fg">
                  {p.features.slice(FIRST_FEATURES).map((f) => <Feature key={f.t} f={f} />)}
                </div>
              </details>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* ============ SCREENSHOTS ============ */}
      {showShots ? (
        <section className="pd-sec" id="screenshots">
          <div className="container">
            <div className="v2-head">
              <h2>See it in action</h2>
              <p>Screenshots of {p.name} inside WordPress and on your storefront.</p>
            </div>
            <div className="pd-gallery">
              {Array.from({ length: shotSlots }, (_, i) => (
                <Slot key={i} slug={p.slug} file={`shot-${i + 1}`} size="1200 x 750" icon="image" label={`${p.name} screenshot ${i + 1}`} className="pd-gallery__item" />
              ))}
              {IS_DEV && shots.length && shots.length < MAX_SHOTS ? <Slot slug={p.slug} file={`shot-${shots.length + 1}`} size="1200 x 750" icon="image" label="" className="pd-gallery__item" /> : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* ============ PRICING ============ */}
      <section className="pd-sec pd-sec--soft" id="pricing">
        <div className="container">
          <div className="v2-head">
            <h2>Simple, transparent pricing</h2>
            <p>Every plan includes all core features, priority support and regular updates, backed by a 14-day money-back guarantee.</p>
          </div>
          {p.tiers ? (
            <div className="pd-tiers">{p.tiers.map((t) => <Tier key={t.name} {...t} href={buy} />)}</div>
          ) : (
            <div className="pd-tiers pd-tiers--2">
              <Tier name={p.name} sites={`Starting at ${p.price.replace('From ', '')}`} price={p.price.replace('From ', '')} href={buy} />
              <Tier name="All Access Bundle" sites="All 40+ plugins" price="$399.99" popular href={BUNDLE} label="Get the bundle" />
            </div>
          )}
          {!p.tiers ? <p className="pd-note">Multi-site plans are available at checkout.</p> : null}
        </div>
      </section>

      {/* ============ REVIEWS (same cards as the homepage; filled by /js/main.js) ============ */}
      <section className="section v2-reviews pd-reviews" id="reviews">
        <div className="container">
          <div className="section__head">
            <span className="pill">★ 4.6 Average · 5,000+ Reviews</span>
            <h2>Loved By Merchants Everywhere</h2>
            <p>Trusted by store owners, wholesalers and agencies who ship faster with WPExperts.</p>
          </div>
        </div>
        <div className="reviews-marquee">
          <div className="reviews-row" id="reviewRowA"></div>
          <div className="reviews-row reviews-row--rev" id="reviewRowB"></div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      {p.faqs.length ? (
        <section className="pd-sec pd-sec--soft" id="faq">
          <div className="container container--narrow">
            <div className="v2-head">
              <h2>Frequently asked questions</h2>
              <p>Quick answers about {p.name}.</p>
            </div>
            <div className="pd-faq">
              {p.faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ============ DOCS / DEMO / PRE-SALE ============ */}
      <section className="pd-sec pd-sec--tight">
        <div className="container">
          <div className="pd-help">
            {p.docs ? <a href={p.docs} target="_blank" rel="noopener"><span className="pd-help__ic"><Ic name="book" size={24} /></span><span><b>Documentation</b><small>Setup guides and answers</small></span></a> : null}
            {p.demo ? <a href={p.demo} target="_blank" rel="noopener"><span className="pd-help__ic"><Ic name="play" size={24} /></span><span><b>Live demo</b><small>Try it before you buy</small></span></a> : null}
            <a href={PRESALE} target="_blank" rel="noopener"><span className="pd-help__ic"><Ic name="headset" size={24} /></span><span><b>Pre-sale question?</b><small>Ask the WPExperts team</small></span></a>
          </div>
        </div>
      </section>

      {/* ============ RELATED ============ */}
      {related.length ? (
        <section className="pd-sec pd-sec--tight">
          <div className="container">
            <div className="v2-head"><h2>More plugins you might like</h2></div>
            <div className="pgrid">{related.map((r) => <PluginCard key={r.slug} p={r} />)}</div>
          </div>
        </section>
      ) : null}

      {/* ============ CTA ============ */}
      <section className="v2-sec pd-ctaband">
        <div className="container">
          <div className="v2-cta">
            <h2>Get 40+ Sales-Boosting Plugins From Just <span>$399</span></h2>
            <p>Join the All Access Club and unlock every WooCommerce plugin we build. Start free, upgrade only when it&apos;s making you money.</p>
            <div className="v2-cta__actions">
              <a href={BUNDLE} target="_blank" rel="noopener" className="btn btn--primary btn--lg"><BtnRoll>Join The Club</BtnRoll></a>
              <a href="/products" className="btn btn--outline btn--lg"><BtnRoll>Browse all plugins</BtnRoll></a>
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

function Feature({ f }) {
  return (
    <div className="pd-f">
      <span className="pd-f__ic"><Ic name={iconFor(f.t, iconFor(f.d))} size={22} /></span>
      <div><h3>{f.t}</h3><p>{f.d}</p></div>
    </div>
  );
}
