import { productLogoSrc } from '../lib/productLogos';

// Archive + "related plugins" card. Links to our own product page (/products/<slug>).
export default function PluginCard({ p }) {
  return (
    <a className="pc" href={`/products/${p.slug}`}>
      <div className="pc__head">
        <span className="pc__ic"><img src={productLogoSrc(p.name)} alt="" width="48" height="48" loading="lazy" /></span>
        <h3>{p.name}</h3>
      </div>
      <p>{p.desc}</p>
      <div className="pc__foot">
        <span className="pc__price"><small>From</small>{p.price.replace('From ', '')}</span>
        <span className="pc__go">
          View details
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </div>
    </a>
  );
}
