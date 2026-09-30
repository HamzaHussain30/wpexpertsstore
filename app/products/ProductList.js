'use client';
import { useMemo, useState } from 'react';
import { iconHtml } from '../lib/icons';

export default function ProductList({ plugins, categories }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return plugins.filter((p) => {
      const okCat = cat === 'All' || p.category === cat;
      const okQ = !q || `${p.name} ${p.desc} ${p.category}`.toLowerCase().includes(q);
      return okCat && okQ;
    });
  }, [plugins, query, cat]);

  return (
    <>
      <div className="blog-tools">
        <div className="blog-search">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M10 2a8 8 0 105.29 14.03l4.84 4.84 1.41-1.41-4.84-4.84A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 40+ WooCommerce plugins…"
            aria-label="Search plugins"
          />
        </div>
        <div className="chips" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip${cat === c ? ' active' : ''}`}
              onClick={() => setCat(c)}
              role="tab"
              aria-selected={cat === c}
            >
              <span>{c}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="prod-count">{filtered.length} plugin{filtered.length === 1 ? '' : 's'}</p>

      {filtered.length ? (
        <div className="prod-grid">
          {filtered.map((p) => (
            <a className="prod-card" key={p.name} href={p.href} target="_blank" rel="noopener">
              {p.badge ? <span className="prod-card__badge">{p.badge}</span> : null}
              <span className="prod-card__ic" dangerouslySetInnerHTML={{ __html: iconHtml(p.icon) }} />
              <span className="prod-card__cat">{p.category}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="prod-card__foot">
                <span className="prod-card__price">{p.price}</span>
                <span className="prod-card__link">View Plugin →</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="blog-empty">No plugins match your search. Try a different keyword or category.</p>
      )}
    </>
  );
}
