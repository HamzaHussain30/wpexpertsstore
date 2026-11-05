// One merged record per plugin: app/data/plugins.js (name, price, category) + product-details.json
// (copy scraped from the store by scripts/scrape-products.py). Plugins with no store page get a lean record.
import raw from './product-details.json';
import { plugins } from './plugins';

const slugify = (n) => n.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Facts checked on the live store page that the scraper can't read (prices are filled in by script there).
const EXTRA = {
  'B2B Wholesale for WooCommerce': {
    demo: 'https://wpedemo.com/wholesale-for-woocommerce',
    tiers: [
      { name: 'Basic', sites: 'Single site', price: '$129.99' },
      { name: 'Pro', sites: '3 sites', price: '$199.99', was: '$387', off: '49% off', popular: true },
      { name: 'Agency', sites: '100 sites', price: '$249.99', was: '$1,290' },
    ],
  },
};

export const catalog = plugins.map((p) => {
  const d = raw[p.name] || {};
  return {
    ...p,
    ...d,
    ...(EXTRA[p.name] || {}),
    slug: d.slug || slugify(p.name),
    storePage: d.slug ? `https://store.wpexperts.io/products/${d.slug}/` : null,
    heroPoints: d.heroPoints || [],
    highlights: d.highlights || [],
    features: d.features || [],
    faqs: d.faqs || [],
  };
});

export const bySlug = (slug) => catalog.find((p) => p.slug === slug);
export const relatedTo = (p, n = 3) => catalog.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, n);
export const priceNumber = (p) => (p.price.match(/[\d.]+/) || ['0'])[0];
