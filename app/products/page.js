import { plugins, pluginCategories } from '../data/plugins';
import ProductList from './ProductList';

export const metadata = {
  title: 'All WooCommerce Plugins — 40+ Premium Extensions | WPExperts',
  description:
    'Browse the full WPExperts library of 40+ premium WooCommerce plugins — B2B wholesale, donations, currency switching, checkout, pricing, store operations and more.',
  alternates: { canonical: 'https://store.wpexperts.io/products' },
};

const itemListJson = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'WPExperts WooCommerce Plugins',
  itemListElement: plugins.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: p.href,
  })),
};

export default function ProductsArchive() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }} />

      <section className="page-hero">
        <div className="page-hero__grid" aria-hidden="true"></div>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a><span>/</span><span>Plugins</span>
          </nav>
          <h1>All WooCommerce <span className="grad">Plugins</span></h1>
          <p>Browse 40+ premium WooCommerce extensions built by real WooCommerce experts. Filter by category or search to find exactly what your store needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductList plugins={plugins} categories={pluginCategories} />
        </div>
      </section>
    </main>
  );
}
