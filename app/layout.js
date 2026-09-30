import './globals.css';
import './content-pages.css';
import './blog-tools.css';
import './products.css';
import Script from 'next/script';
import { Figtree } from 'next/font/google';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import WhatsAppFab from './components/WhatsAppFab';
import SmoothScroll from './components/SmoothScroll';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://store.wpexperts.io'),
  title: 'WooCommerce Plugins Store | 40+ Premium Extensions | WPExperts',
  description:
    'WPExperts is the #1 WooCommerce plugins store. Get 40+ premium WooCommerce extensions, including AI-powered B2B Wholesale, Donation, Currency Switcher, Sales Agent and more. Trusted by 1.5M+ stores. 14-day money-back guarantee.',
  keywords:
    'WooCommerce plugins, WooCommerce experts, WooCommerce extensions, WooCommerce plugin, woo marketplace, WooCommerce pro partner, woo plugins, best WooCommerce extensions, WooCommerce plugins store',
  authors: [{ name: 'WPExperts' }],
  alternates: { canonical: 'https://store.wpexperts.io/' },
  robots: 'index, follow, max-image-preview:large',
  openGraph: {
    type: 'website',
    siteName: 'WPExperts',
    title: 'WooCommerce Plugins Store | 40+ Premium Extensions | WPExperts',
    description:
      'The #1 WooCommerce plugins store. 40+ premium extensions including AI-powered B2B Wholesale. Trusted by 1.5M+ stores worldwide.',
    url: 'https://store.wpexperts.io/',
    images: ['https://store.wpexperts.io/images/og-cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WooCommerce Plugins Store | WPExperts',
    description:
      '40+ premium WooCommerce extensions, including AI-powered B2B Wholesale. Trusted by 1.5M+ stores.',
    images: ['https://store.wpexperts.io/images/og-cover.png'],
  },
};

export const viewport = {
  themeColor: '#0b1b4d',
};

const orgJson = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WPExperts',
  url: 'https://store.wpexperts.io/',
  logo: 'https://store.wpexperts.io/images/logo.png',
  description:
    'WPExperts is a globally recognized leader in WordPress and WooCommerce development with 14+ years of expertise and 5,000+ successful projects.',
  foundingDate: '2011',
  sameAs: ['https://www.youtube.com/@WPExpertsio/videos'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', reviewCount: '5000' },
};

const storeJson = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'WPExperts WooCommerce Plugins Store',
  url: 'https://store.wpexperts.io/',
  priceRange: '$49 - $799',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'B2B Wholesale for WooCommerce (AI-Powered)' }, price: '129', priceCurrency: 'USD' },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Donation for WooCommerce' }, price: '99', priceCurrency: 'USD' },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Currency Switcher for WooCommerce' }, price: '99', priceCurrency: 'USD' },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Sales Agent for WooCommerce' }, price: '49', priceCurrency: 'USD' },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Bulk Order Product Table for WooCommerce' }, price: '79', priceCurrency: 'USD' },
    { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'User Registration for WooCommerce' }, price: '49', priceCurrency: 'USD' },
  ],
};

const faqJson = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What makes WPExperts the #1 WooCommerce plugins store?', acceptedAnswer: { '@type': 'Answer', text: "WPExperts builds 40+ premium WooCommerce extensions backed by free updates, a 200+ member support team and a 14-day money-back guarantee. With 14+ years of WooCommerce expertise, we're a recognized WooCommerce pro partner." } },
    { '@type': 'Question', name: 'Is B2B Wholesale for WooCommerce really AI-powered?', acceptedAnswer: { '@type': 'Answer', text: "Yes. It's a complete AI-powered B2B ecommerce plugin automating wholesale pricing, buyer roles, quote requests and bulk ordering, plus a real-time B2B analytics dashboard, all inside one WooCommerce store." } },
    { '@type': 'Question', name: 'Can I use one plugin on multiple websites?', acceptedAnswer: { '@type': 'Answer', text: 'License tiers cover 1, 5 or 100 sites. The All Access bundle unlocks every current and future WooCommerce plugin under one membership, starting at $399.99/year.' } },
    { '@type': 'Question', name: 'Do you offer a money-back guarantee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every WooCommerce plugin and the All Access bundle include a 14-day money-back guarantee.' } },
    { '@type': 'Question', name: 'Do the plugins receive regular updates and support?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All plugins get free updates for the latest WooCommerce, PHP and WordPress versions plus premium support with a 6-hour average response.' } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFab />
        <SmoothScroll />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      </body>
    </html>
  );
}
