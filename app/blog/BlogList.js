'use client';
import { useMemo, useState } from 'react';

export default function BlogList({ posts }) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const okCat = cat === 'All' || p.category === cat;
      const okQ =
        !q ||
        `${p.title} ${p.excerpt} ${p.plugin} ${p.author}`.toLowerCase().includes(q);
      return okCat && okQ;
    });
  }, [posts, query, cat]);

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
            placeholder="Search articles…"
            aria-label="Search articles"
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

      {filtered.length ? (
        <div className="blog-grid">
          {filtered.map((p) => (
            <a className="post" key={p.slug} href={`/blog/${p.slug}`}>
              <div className="post__img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/photos/${p.image}.jpg`} alt={p.title} loading="lazy" />
                <span className="post__cat">{p.category}</span>
              </div>
              <div className="post__body">
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="post__meta"><span>by <b>{p.author}</b></span><span>{p.date}</span></div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="blog-empty">No articles match your search. Try a different keyword or filter.</p>
      )}
    </>
  );
}
