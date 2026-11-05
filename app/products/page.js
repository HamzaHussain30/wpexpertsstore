import '../home-v2.css'; // .v2-cta band, hero rating line
import BtnRoll from '../components/BtnRoll';
import { catalog } from '../data/details';
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
  itemListElement: catalog.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: `https://store.wpexperts.io/products/${p.slug}`,
  })),
};

// only what the cards need, so the big per-plugin copy isn't shipped to the browser
const list = catalog.map(({ name, desc, price, slug }) => ({ name, desc, price, slug }));

const Check = () => (
  <svg className="ic" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
);

export default function ProductsArchive() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }} />

      <ProductList plugins={list} />

      <section className="v2-sec prod-cta">
        <div className="container">
          <div className="v2-cta">
            <h2>Get 40+ Sales-Boosting Plugins From Just <span>$399</span></h2>
            <p>Join the All Access Club and unlock every WooCommerce plugin we build. Start free, upgrade only when it&apos;s making you money.</p>
            <div className="v2-cta__actions">
              <a href="https://store.wpexperts.io/" target="_blank" rel="noopener" className="btn btn--primary btn--lg"><BtnRoll>Join The Club</BtnRoll></a>
              <a href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener" className="btn btn--outline btn--lg"><BtnRoll>Talk To Support</BtnRoll></a>
            </div>
            <ul>
              <li><Check />14-day money-back</li>
              <li><Check />Instant access</li>
              <li><Check />Cancel anytime</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
