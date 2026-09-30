import { notFound } from 'next/navigation';
import { posts, getPost } from '../../data/posts';

const SITE = 'https://store.wpexperts.io';

const BIOS = {
  'Muhammad Jaffer':
    'Muhammad Jaffer is a WooCommerce expert with 7+ years of experience in development, blogging, SEO, and social media marketing. A passionate individual with a bachelor’s in technology, he creates custom-optimized WooCommerce solutions that drive business growth. He has experience working with startups and top companies like WPExperts.',
};
const bioFor = (name) =>
  BIOS[name] ||
  `${name} writes about WooCommerce, ecommerce growth and the WPExperts plugin suite, helping store owners sell more and work less.`;
const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | WPExperts`,
    description: post.excerpt,
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${SITE}/blog/${post.slug}`,
      images: [`${SITE}/images/photos/${post.image}.jpg`],
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${SITE}/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE}/images/photos/${post.image}.jpg`,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'WPExperts', logo: { '@type': 'ImageObject', url: `${SITE}/images/logo.png` } },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
  };

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="article-head">
        <div className="container container--article">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>{post.category}</span>
          </nav>
          <span className="pill pill--art"><i className="art__star">✦</i> {post.plugin}</span>
          <h1>{post.title}</h1>
          <div className="article__meta">
            <span className="author-chip"><span className="author-chip__av">{initials(post.author)}</span>{post.author}</span>
            <span>Updated on {post.date}</span>
            <span className="tag-chip">{post.category}</span>
          </div>
        </div>
      </section>

      <div className="container container--article">
        <div className="article-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/images/photos/${post.image}.jpg`} alt={post.title} width="1100" height="620" loading="eager" fetchPriority="high" />
        </div>

        {post.toc?.length ? (
          <nav className="toc" aria-label="Table of contents">
            <h4>Table of Contents</h4>
            <ol>
              {post.toc.map(([id, label]) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ol>
          </nav>
        ) : null}

        <article className="article__body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

        {/* plugin CTA */}
        <aside className="post-cta">
          <div>
            <h3>Get {post.plugin}</h3>
            <p>Check out our best WooCommerce plugins &amp; add-ons, with professional WP services and support.</p>
          </div>
          <div className="post-cta__actions">
            <a className="btn btn--primary" href={SITE} target="_blank" rel="noopener">Get the Plugin</a>
            <a className="btn btn--outline" href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener">Talk to Experts</a>
          </div>
        </aside>

        {/* author box */}
        <div className="author-box">
          <span className="author-box__av">{initials(post.author)}</span>
          <div>
            <span className="author-box__label">Article by</span>
            <b>{post.author}</b>
            <p>{bioFor(post.author)}</p>
          </div>
        </div>

        {/* share */}
        <div className="share">
          <span className="share__label">Share This Article</span>
          <div className="share__btns">
            <a className="share__btn share__btn--x" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener" aria-label="Share on X">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" /></svg>
              <span>X</span>
            </a>
            <a className="share__btn share__btn--in" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener" aria-label="Share on LinkedIn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h4v12H3v-12zM9 8.98h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v6.31h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9v-12z" /></svg>
              <span>LinkedIn</span>
            </a>
            <a className="share__btn share__btn--fb" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener" aria-label="Share on Facebook">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" /></svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* related */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head"><h2>There’s More to Read</h2></div>
          <div className="blog-grid">
            {related.map((p) => (
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
        </div>
      </section>
    </main>
  );
}
