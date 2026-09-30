import { posts } from '../data/posts';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog — WooCommerce Guides, Updates & Know-How | WPExperts',
  description:
    'Actionable WooCommerce guides, product updates and B2B ecommerce know-how from the WPExperts team. Learn how to sell more with WooCommerce.',
  alternates: { canonical: 'https://store.wpexperts.io/blog' },
};

export default function BlogArchive() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true"></div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><span>Blog</span>
          </nav>
          <h1>Guides, Updates &amp; WooCommerce Know-How</h1>
          <p>Actionable tips and product news to help you sell more with WooCommerce.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <BlogList
            posts={posts.map(({ slug, title, category, author, date, image, excerpt, plugin }) => ({
              slug, title, category, author, date, image, excerpt, plugin,
            }))}
          />
        </div>
      </section>
    </main>
  );
}
