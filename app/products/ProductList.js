'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import PluginCard from '../components/PluginCard';

const goals = [['Wholesale', 'wholesale'], ['Pricing', 'pricing'], ['Checkout', 'checkout'], ['Discounts', 'discount']];
const price = (p) => parseInt(p.price.replace(/\D/g, ''), 10) || 0;
const sorts = {
  featured: ['Featured', null],
  low: ['Price: low to high', (a, b) => price(a) - price(b)],
  high: ['Price: high to low', (a, b) => price(b) - price(a)],
  name: ['Name: A–Z', (a, b) => a.name.localeCompare(b.name)],
};

export default function ProductList({ plugins }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const input = useRef(null);
  useEffect(() => { setQuery(new URLSearchParams(window.location.search).get('q') || ''); }, []);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    const list = plugins.filter((p) => !q || `${p.name} ${p.desc} ${p.category}`.toLowerCase().includes(q));
    return sorts[sort][1] ? [...list].sort(sorts[sort][1]) : list;
  }, [plugins, q, sort]);

  return (
    <>
      <section className="phero">
        <div className="container">
          <h1>All WooCommerce Plugins</h1>
          <p>40+ premium extensions built by real WooCommerce experts. Every plugin comes with a 14-day money-back guarantee.</p>
        </div>
      </section>

      <section className="section section--framed" id="all-plugins">
        <div className="container">
          <div className="ptool" role="search">
            <label className="ptool__search">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
              <input
                ref={input}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Escape') setQuery(''); }}
                placeholder={`Search ${plugins.length} plugins, e.g. wholesale, currency…`}
                aria-label="Search plugins"
                autoComplete="off"
              />
              {query ? <button type="button" onClick={() => { setQuery(''); input.current?.focus(); }} aria-label="Clear search">×</button> : null}
            </label>
            <p className="ptool__count" aria-live="polite">{q ? `${filtered.length} of ${plugins.length}` : plugins.length} plugins</p>
            <label className="ptool__sort">
              <span>Sort by</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {Object.entries(sorts).map(([k, [label]]) => <option key={k} value={k}>{label}</option>)}
              </select>
            </label>
          </div>

          {filtered.length ? (
            <div className="pgrid">
              {filtered.map((p) => <PluginCard key={p.slug} p={p} />)}
            </div>
          ) : (
            <div className="prod-empty">
              <p>No plugins match &ldquo;{query.trim()}&rdquo;. Try a broader word, or start from a popular one:</p>
              <div className="prod-empty__chips">
                {goals.map(([label, term]) => <button key={term} type="button" className="chip" onClick={() => setQuery(term)}>{label}</button>)}
              </div>
              <button type="button" className="btn btn--dark" onClick={() => setQuery('')}>Show all plugins</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
