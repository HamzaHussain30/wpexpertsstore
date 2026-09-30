const STORE = 'https://store.wpexperts.io';

// Full WooCommerce plugin archive. `href` points to the store product/listing.
export const plugins = [
  // B2B & Wholesale
  { name: 'B2B Wholesale for WooCommerce', icon: 'b2b', category: 'B2B & Wholesale', price: 'From $129', badge: 'AI-Powered', desc: 'The complete AI-powered B2B WooCommerce plugin — wholesale pricing, roles, quotes and analytics.', href: `${STORE}/product/wholesale-for-woocommerce/` },
  { name: 'B2B Request a Quote', icon: 'invoice', category: 'B2B & Wholesale', price: 'From $49', desc: 'Hide prices, collect quotes and negotiate deals with a Get a Quote flow.', href: STORE },
  { name: 'Bulk Order Product Table', icon: 'table', category: 'B2B & Wholesale', price: 'From $79', desc: 'A fast, searchable wholesale ordering table with sorting, filters and pagination.', href: `${STORE}/product/bulk-order-b2b-product-table/` },
  { name: 'Sales Agent for WooCommerce', icon: 'chart', category: 'B2B & Wholesale', price: 'From $49', desc: 'Manage sales agents, automate commissions and track B2B performance.', href: `${STORE}/product/sales-agent/` },
  { name: 'B2B Payments & Invoicing', icon: 'lock', category: 'B2B & Wholesale', price: 'From $49', desc: 'Invoice payment methods, company credits and account permissions.', href: STORE },
  { name: 'Tiered & Role-Based Pricing', icon: 'tag', category: 'B2B & Wholesale', price: 'From $49', desc: 'Dynamic wholesale pricing per customer group, tier and role.', href: STORE },
  { name: 'B2B Company Credits & Permissions', icon: 'shield', category: 'B2B & Wholesale', price: 'From $49', desc: 'Company credit lines and granular buyer permissions for teams.', href: STORE },

  // Pricing & Discounts
  { name: 'Smart Discounts & Coupons', icon: 'discount', category: 'Pricing & Discounts', price: 'From $49', desc: 'Boost sales with advanced, rule-based discounts and coupons.', href: STORE },
  { name: 'Dynamic & Role-Based Pricing', icon: 'tag', category: 'Pricing & Discounts', price: 'From $49', desc: 'Custom pricing by user role, quantity and product attributes.', href: STORE },
  { name: 'Smart Product Bundles', icon: 'box', category: 'Pricing & Discounts', price: 'From $49', desc: 'Create bundles, subscription boxes and bulk deals to lift AOV.', href: STORE },
  { name: 'Pay Your Price', icon: 'zap', category: 'Pricing & Discounts', price: 'From $49', desc: 'Let customers pay what they want — ideal for donations and flexible pricing.', href: STORE },
  { name: 'Conditional Fees', icon: 'invoice', category: 'Pricing & Discounts', price: 'From $49', desc: 'Apply fees by role, product, category or cart conditions.', href: STORE },
  { name: 'Spin Wheel', icon: 'refresh', category: 'Pricing & Discounts', price: 'From $49', desc: 'Gamified discount wheel that grows your email list and engagement.', href: STORE },

  // Checkout & Conversion
  { name: 'Instant Checkout', icon: 'zap', category: 'Checkout & Conversion', price: 'From $49', desc: 'One-page checkout that cuts abandonment and speeds up purchases.', href: STORE },
  { name: 'Abandoned Cart Recovery', icon: 'cart', category: 'Checkout & Conversion', price: 'From $49', desc: 'Recover lost sales with automatic follow-up emails and offers.', href: STORE },
  { name: 'Custom Checkout Fields Editor', icon: 'edit', category: 'Checkout & Conversion', price: 'From $49', desc: 'Add, reorder and personalize checkout fields with no code.', href: STORE },
  { name: 'Address Autocomplete', icon: 'pin', category: 'Checkout & Conversion', price: 'From $49', desc: 'Google Maps auto-fill for accurate, faster delivery addresses.', href: STORE },
  { name: 'Product Quantity', icon: 'hash', category: 'Checkout & Conversion', price: 'From $49', desc: 'Set minimum, maximum and step quantity rules per product.', href: STORE },
  { name: 'Notifications (FOMO)', icon: 'bell', category: 'Checkout & Conversion', price: 'From $49', desc: 'Real-time social-proof sales alerts to boost conversions.', href: STORE },
  { name: 'User Registration', icon: 'user', category: 'Checkout & Conversion', price: 'From $49', desc: 'Build custom signup forms with 25+ fields and automated onboarding.', href: `${STORE}/product/user-registration/` },
  { name: 'Delivery Options', icon: 'pin', category: 'Checkout & Conversion', price: 'From $49', desc: 'Offer flexible delivery dates and time-slot selection at checkout.', href: STORE },
  { name: 'Smart Wishlist', icon: 'heart', category: 'Checkout & Conversion', price: 'From $49', desc: 'Let customers save and manage multiple wishlists to buy later.', href: STORE },
  { name: 'Custom Product Add-ons & Fields', icon: 'edit', category: 'Checkout & Conversion', price: 'From $49', desc: 'Add extra product options, fields and personalization at checkout.', href: STORE },

  // Donations & Fundraising
  { name: 'Donation for WooCommerce', icon: 'heart', category: 'Donations & Fundraising', price: 'From $99', desc: 'The best WooCommerce donation plugin for one-time and recurring giving.', href: `${STORE}/product/donation/` },
  { name: 'Fundraising', icon: 'star', category: 'Donations & Fundraising', price: 'From $49', desc: 'Run multiple donor and campaign drives with progress goals.', href: STORE },
  { name: 'Store Credits & Gift Cards', icon: 'gift', category: 'Donations & Fundraising', price: 'From $49', desc: 'Reward supporters and repeat customers with credits and gift cards.', href: STORE },
  { name: 'Loyalty — Points & Rewards', icon: 'refresh', category: 'Donations & Fundraising', price: 'From $79', desc: 'Points and rewards that drive repeat purchases and giving.', href: STORE },
  { name: 'Gamification', icon: 'shield', category: 'Donations & Fundraising', price: 'From $79', desc: 'Badges and ranks that turn shopping into an engaging experience.', href: STORE },

  // Store Operations
  { name: 'Bulk Product Editor', icon: 'edit', category: 'Store Operations', price: 'From $49', desc: 'Edit hundreds of products at once from a spreadsheet-style interface.', href: STORE },
  { name: 'Smart Inventory Management', icon: 'inventory', category: 'Store Operations', price: 'From $79', desc: 'Stock control and supplier coordination for busy stores.', href: STORE },
  { name: 'PDF Packing Slips & Invoices', icon: 'invoice', category: 'Store Operations', price: 'From $49', desc: 'Branded invoices, credit notes and packing slips in a click.', href: STORE },
  { name: 'Sequence Order Number', icon: 'hash', category: 'Store Operations', price: 'From $49', desc: 'Custom sequential order numbering with prefixes and suffixes.', href: STORE },
  { name: 'Advanced Order Notes', icon: 'edit', category: 'Store Operations', price: 'From $29', desc: 'Better order communication, tracking and internal notes.', href: STORE },
  { name: 'NetSuite Connector', icon: 'plug', category: 'Store Operations', price: 'From $299', desc: 'Sync WooCommerce with NetSuite in real time and automate workflows.', href: STORE },

  // Global & Niche
  { name: 'Currency Switcher', icon: 'globe', category: 'Global & Niche', price: 'From $99', desc: 'Multi-currency support with auto-detection and live exchange rates.', href: `${STORE}/product/currency-switcher/` },
  { name: 'Restaurant — Menu & Delivery', icon: 'food', category: 'Global & Niche', price: 'From $149', desc: 'Online food ordering and menu builder for restaurants.', href: STORE },
  { name: 'Store Finder', icon: 'store', category: 'Global & Niche', price: 'From $49', desc: 'Google Maps store locator with live filtering.', href: STORE },
  { name: 'Age Verification & Disclaimer', icon: 'age', category: 'Global & Niche', price: 'From $49', desc: 'Age gates, warnings and policy pop-ups for regulated products.', href: STORE },
  { name: 'Product Variations & Swatches', icon: 'swatch', category: 'Global & Niche', price: 'From $49', desc: 'Turn simple products into rich variable products with swatches.', href: STORE },
  { name: 'License Manager', icon: 'key', category: 'Global & Niche', price: 'From $129', desc: 'Sell and manage digital license keys with ease.', href: STORE },
  { name: 'Keap (Infusionsoft) Integration', icon: 'plug', category: 'Store Operations', price: 'From $99', desc: 'Sync WooCommerce customers and orders with Keap CRM automatically.', href: STORE },
  { name: 'Smart Custom Product Bundles', icon: 'box', category: 'Store Operations', price: 'From $49', desc: 'Build mix-and-match bundles and kits from your existing catalog.', href: STORE },
];

export const pluginCategories = ['All', ...Array.from(new Set(plugins.map((p) => p.category)))];
