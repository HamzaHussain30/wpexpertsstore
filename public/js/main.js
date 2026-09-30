/* =========================================================================
   WPExperts Store - Home Page interactions & content
   ========================================================================= */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const STORE = 'https://store.wpexperts.io';

  /* ---------- Icon set — Lucide (lucide.dev), basic single-tone, used everywhere ---------- */
  const IC = {
    b2b: '<rect x="2.5" y="7" width="19" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2.5 12h19"/>',
    heart: '<path d="M20.5 5.5a5 5 0 0 0-7.1 0L12 6.9l-1.4-1.4a5 5 0 1 0-7.1 7.1L12 21l8.5-8.4a5 5 0 0 0 0-7.1z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    chart: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6" rx="1"/><rect x="12" y="8" width="3" height="10" rx="1"/><rect x="17" y="14" width="3" height="4" rx="1"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14.5h18M9 9v11"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    ai: '<path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6z"/><path d="M18.5 14l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
    dashboard: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="5" rx="1.5"/><rect x="13" y="10" width="8" height="11" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/>',
    tag: '<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 18l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    discount: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="8.5" cy="8.5" r="1.4"/><circle cx="15.5" cy="15.5" r="1.4"/><path d="M8.5 15.5l7-7"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8C10 8 7 8 7 5.5S10 4 12 8zM12 8c2 0 5 0 5-2.5S14 4 12 8z"/>',
    cart: '<circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M2 3h3l2.4 12h11l2-8H6"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.5 21a2 2 0 0 1-3 0"/>',
    zap: '<path d="M13 2L4 14h7l-2 8 9-12h-7z"/>',
    box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v9"/>',
    invoice: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    store: '<path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M4 9h16M9.5 20v-6h5v6"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    inventory: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h8M8 16h5"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>',
    plug: '<path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0zM12 16v6"/>',
    food: '<path d="M6 3v7a2 2 0 0 0 4 0V3M8 12v9M18 3c-2 0-3 2-3 5s1 4 3 4v9"/>',
    age: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M10 10.5h1v4M13 10.5h1.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H13z"/>',
    swatch: '<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10.5" r="1"/><circle cx="12" cy="8.5" r="1"/><circle cx="15.5" cy="10.5" r="1"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8 2 2-2 2 2 2"/>',
    quote: '<path d="M9 6H5a2 2 0 0 0-2 2v4h6V6zM11 12V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z"/>',
    headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="4" height="6" rx="1.6"/><rect x="17.5" y="13" width="4" height="6" rx="1.6"/><path d="M20 19a4 4 0 0 1-4 3h-3"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowupright: '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
    chevrondown: '<path d="m6 9 6 6 6-6" />',
  };
  const icon = (n, cls = '') =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ''}</svg>`;

  /* ---------- Duotone icon set — Solar, used ONLY for the B2B spotlight feature cards ---------- */
  const ICD = {
    ai: '<g fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.036 3.652c2.215-1.312 3.322-1.968 4.136-1.503c.813.466.793 1.744.755 4.3l-.01.662c-.012.727-.017 1.09.118 1.41c.136.319.397.558.919 1.036l.475.435c1.837 1.683 2.756 2.524 2.54 3.47c-.215.944-1.422 1.366-3.835 2.212l-.624.218c-.686.24-1.028.36-1.291.601c-.264.24-.417.575-.724 1.243l-.28.609c-1.079 2.351-1.619 3.527-2.565 3.646c-.947.118-1.673-.899-3.125-2.934l-.376-.526c-.413-.578-.62-.867-.917-1.038c-.298-.17-.654-.203-1.365-.268l-.648-.06c-2.505-.228-3.757-.343-4.126-1.214c-.37-.872.388-1.923 1.903-4.026l.392-.544c.43-.597.646-.896.725-1.242s.012-.7-.12-1.409l-.122-.645c-.468-2.493-.702-3.74.016-4.397s1.913-.29 4.302.445l.618.19c.678.21 1.018.314 1.365.27c.346-.043.661-.23 1.29-.602z"/><path fill="currentColor" d="M17.53 16.47a.75.75 0 1 0-1.06 1.06zm2.94 5.06a.75.75 0 1 0 1.06-1.06zm-4-4l4 4l1.06-1.06l-4-4z" opacity=".5"/></g>',
    dashboard: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5Z"/><path d="M13.5 17.5C13.5 15.2909 15.2909 13.5 17.5 13.5C19.7091 13.5 21.5 15.2909 21.5 17.5C21.5 19.7091 19.7091 21.5 17.5 21.5C15.2909 21.5 13.5 19.7091 13.5 17.5Z" opacity=".5"/><path d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z"/><path d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z" opacity=".5"/></g>',
    tag: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.5988 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z" opacity=".5"/><path d="M15.3893 15.3891C15.9751 14.8033 16.0542 13.9327 15.5661 13.4445C15.0779 12.9564 14.2073 13.0355 13.6215 13.6213C13.0358 14.2071 12.1652 14.2863 11.677 13.7981C11.1888 13.3099 11.268 12.4393 11.8538 11.8536M15.3893 15.3891L15.7429 15.7426M15.3893 15.3891C14.9883 15.7901 14.4539 15.9537 14 15.8604M11.5002 11.5L11.8538 11.8536M11.8538 11.8536C12.185 11.5223 12.6073 11.3531 13 11.3568"/><circle cx="8.607" cy="8.879" r="2" transform="rotate(-45 8.607 8.879)"/></g>',
    table: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M3 15.333H21M3 8.6665H21M12 2L12 22" opacity=".5"/><path d="M13 2C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10L21 14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22L11 22C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14L3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2L13 2Z"/></g>',
    shield: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z" opacity=".5"/><path stroke-linejoin="round" d="M9.5 12.4L10.9286 14L14.5 10"/></g>',
  };
  const iconDuo = (n, cls = '') =>
    `<svg class="ic ${cls}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${ICD[n] || ''}</svg>`;

  // Expose for inline HTML usage.
  window.__wpxIcon = icon;
  $$('[data-icon]').forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
  $$('[data-icon-duo]').forEach((el) => (el.innerHTML = iconDuo(el.dataset.iconDuo)));

  /* ---------- Client logos (colorful, even marquee) ---------- */
  const logos = [
    'PF-Logo_60-Anniv_WEB.webp',
    'SCLH_Logo_360x.webp',
    'sweven-coffee.jpg',
    'Tricon-Logo-2.png',
    'firstlight-flower-essences-logo.webp',
    'HempForHealth-byJC-Web-300x230.png',
    'peking-logo.png',
    'cropped-hsu_growing_supply_logo-170x69.avif',
    'OEM2023_logo.webp',
  ];
  (function renderBrands() {
    const rowA = $('#brandRowA');
    const rowB = $('#brandRowB');
    if (!rowA || !rowB) return;
    const logoCard = (f) =>
      `<span class="bcard"><img src="/images/logos/${f}" alt="Brand using WPExperts WooCommerce plugins" loading="lazy"></span>`;
    const quoteCard = (t) => `<span class="bcard bcard--quote"><span class="bcard__q">“${t}”</span></span>`;
    // Row A: logos + a testimonial snippet woven in (SparkLayer-style)
    const setA =
      logoCard(logos[0]) + logoCard(logos[1]) +
      quoteCard('Easy to use, looks beautiful, and it removed the room for error.') +
      logoCard(logos[2]) + logoCard(logos[3]) + logoCard(logos[4]);
    const setB =
      logoCard(logos[5]) +
      quoteCard('We thought we’d go live in a week, it was done in a day.') +
      logoCard(logos[6]) + logoCard(logos[7]) + logoCard(logos[8]) +
      quoteCard('10× B2B growth and a 400% AOV surge.');
    rowA.innerHTML = setA + setA;   // duplicate for seamless -50% loop
    rowB.innerHTML = setB + setB;
  })();

  /* ---------- Mega menu: top plugins ---------- */
  const megaPlugins = [
    ['b2b', 'B2B Wholesale (AI)', 'Wholesale pricing, roles & quotes', '/product/wholesale-for-woocommerce/'],
    ['heart', 'Donation', 'Charity & recurring fundraising', '/product/donation/'],
    ['globe', 'Currency Switcher', 'Multi-currency & higher AOV', '/product/currency-switcher/'],
    ['chart', 'Sales Agent', 'Agents & automated commissions', '/product/sales-agent/'],
    ['table', 'Bulk Order Product Table', 'Fast B2B ordering table', '/product/bulk-order-b2b-product-table/'],
    ['user', 'User Registration', 'Custom signup form builder', '/product/user-registration/'],
  ];
  (function renderMega() {
    const el = $('#megaGrid');
    if (!el) return;
    el.innerHTML = megaPlugins
      .map(
        ([ic, name, sub, href]) => `
      <a class="mega__item" href="${STORE}${href}" target="_blank" rel="noopener">
        <span class="mega__ic">${icon(ic)}</span>
        <span><b>${name}</b><small>${sub}</small></span>
      </a>`
      )
      .join('');
  })();

  /* ---------- Top-selling WooCommerce plugins (6) ---------- */
  const topPlugins = [
    { ic: 'b2b', badge: 'AI-Powered', name: 'B2B Wholesale For WooCommerce', rate: '4.4', reviews: '137', price: '129', href: '/product/wholesale-for-woocommerce/',
      desc: 'The complete AI-powered B2B WooCommerce plugin with wholesale pricing, buyer roles, quote requests, bulk ordering and a live analytics dashboard.' },
    { ic: 'heart', name: 'Donation For WooCommerce', rate: '4.1', reviews: '70', price: '99', href: '/product/donation/',
      desc: 'The best WooCommerce donation plugin to create, manage and monitor one-time and recurring charity campaigns right on your store.' },
    { ic: 'globe', name: 'Currency Switcher For WooCommerce', rate: '4.1', reviews: '44', price: '99', href: '/product/currency-switcher/',
      desc: 'Add multi-currency support and boost AOV. Auto-detect location, convert prices and update exchange rates, a top WooCommerce extension for global stores.' },
    { ic: 'chart', name: 'Sales Agent For WooCommerce', rate: '4.5', reviews: '51', price: '49', href: '/product/sales-agent/',
      desc: 'Manage sales agents, automate commission payouts and track B2B customer performance from one clean dashboard.' },
    { ic: 'table', name: 'Bulk Order Product Table For WooCommerce', rate: '4.8', reviews: '25', price: '79', href: '/product/bulk-order-b2b-product-table/',
      desc: 'The best WooCommerce bulk order form plugin with search, sort, filter and paginate a fast product table so buyers add many SKUs in seconds.' },
    { ic: 'user', name: 'User Registration For WooCommerce', rate: '4.8', reviews: '39', price: '49', href: '/product/user-registration/',
      desc: 'The #1 WooCommerce registration plugin. Build custom signup forms with 25+ fields and automate your store’s onboarding.' },
  ];
  const pcardTiles = [
    { bg: '#e7f3fd', fg: '#168ae2' },
    { bg: '#fdecec', fg: '#e0475c' },
    { bg: '#e7f8ee', fg: '#16a34a' },
    { bg: '#fef3d6', fg: '#d8a229' },
    { bg: '#f1ecfb', fg: '#7c5cfc' },
    { bg: '#e4f6f5', fg: '#0e9488' },
  ];
  (function renderTop() {
    const grid = $('#topPluginGrid');
    if (!grid) return;
    grid.innerHTML = topPlugins
      .map(
        (p, i) => `
      <article class="pcard">
        <div class="pcard__row">
          <span class="pcard__icon" style="background:${pcardTiles[i % pcardTiles.length].bg};color:${pcardTiles[i % pcardTiles.length].fg}">${icon(p.ic)}</span>
          <a class="pcard__arrow" href="${STORE}${p.href}" target="_blank" rel="noopener" aria-label="View ${p.name}">${icon('arrowupright')}</a>
        </div>
        <h3>${p.name}</h3>
        <div class="pcard__meta">
          <span class="pcard__rate">${icon('star', 'ic--sm')} ${p.rate} <span>(${p.reviews})</span></span>
          ${p.badge ? `<span class="pcard__badge">${p.badge}</span>` : ''}
        </div>
        <p>${p.desc}</p>
        <div class="pcard__foot">
          <div class="pcard__price"><b>$${p.price}</b><small>/year</small></div>
          <a class="pcard__cta" href="${STORE}${p.href}" target="_blank" rel="noopener"><span class="btn__roll"><span class="btn__roll-inner"><span>Buy Now</span><span aria-hidden="true">Buy Now</span></span></span></a>
        </div>
      </article>`
      )
      .join('');
  })();

  /* ---------- Full library by category ---------- */
  const categories = {
    'B2B & Wholesale': { ic: 'b2b', goal: 'Manage bulk orders, pricing and business customers', items: [
      ['b2b', 'B2B Wholesale (AI)', 'Let wholesale customers order faster with bulk pricing and AI assistance.', 'From $129', 'Popular'],
      ['invoice', 'B2B Request A Quote', 'Hide prices, collect quotes and close custom deals faster.', 'From $49'],
      ['table', 'Bulk Order Product Table', 'Help buyers add dozens of SKUs to cart in one fast, filterable table.', 'From $79'],
      ['chart', 'Sales Agent', 'Track your reps and pay commissions automatically.', 'From $49'],
      ['lock', 'B2B Payments & Invoicing', 'Get paid on invoice with company credits and permissions.', 'From $49'],
      ['tag', 'Tiered & Role-Based Pricing', 'Show every customer group the right wholesale price.', 'From $49'],
    ] },
    'Pricing & Discounts': { ic: 'discount', goal: 'Create smarter offers and increase conversions', items: [
      ['discount', 'Smart Discounts & Coupons', 'Run rule-based offers that lift sales without giving away margin.', 'From $49', 'Popular'],
      ['tag', 'Dynamic & Role-Based Pricing', 'Price by user role, quantity or product attribute.', 'From $49'],
      ['box', 'Smart Product Bundles', 'Raise order value with bundles, boxes and bulk deals.', 'From $49'],
      ['zap', 'Pay Your Price', 'Let customers choose what they pay, ideal for donations.', 'From $49'],
      ['invoice', 'Conditional Fees', 'Add fees by role, product or category automatically.', 'From $49'],
      ['refresh', 'Spin Wheel', 'Grow your email list with a gamified discount wheel.', 'From $49'],
    ] },
    'Checkout & Conversion': { ic: 'cart', goal: 'Remove friction and recover more sales', items: [
      ['zap', 'Instant Checkout', 'Cut abandonment with a fast one-page checkout.', 'From $49', 'Popular'],
      ['cart', 'Abandoned Cart Recovery', 'Win back lost sales with automatic follow-up emails.', 'From $49'],
      ['edit', 'Custom Checkout Fields Editor', 'Add and reorder checkout fields, no code needed.', 'From $49'],
      ['pin', 'Address Autocomplete', 'Speed up checkout with Google Maps address auto-fill.', 'From $49'],
      ['hash', 'Product Quantity', 'Set min, max and step quantity rules per product.', 'From $49'],
      ['bell', 'Notifications (FOMO)', 'Build trust with real-time social-proof sales alerts.', 'From $49'],
    ] },
    'Donations & Fundraising': { ic: 'heart', goal: 'Collect gifts and keep supporters coming back', items: [
      ['heart', 'Donation For WooCommerce', 'Accept one-time and recurring donations on your store.', 'From $99', 'Popular'],
      ['star', 'Fundraising', 'Run multiple campaigns with goals and donor tracking.', 'From $49'],
      ['zap', 'Pay Your Price', 'Let supporters give any amount they choose.', 'From $49'],
      ['gift', 'Store Credits & Gift Cards', 'Reward donors and repeat customers with credits.', 'From $49'],
      ['refresh', 'Loyalty: Points & Rewards', 'Drive repeat giving with points and rewards.', 'From $79'],
      ['shield', 'Gamification', 'Boost engagement with badges and ranks.', 'From $79'],
    ] },
    'Store Operations': { ic: 'inventory', goal: 'Automate daily WooCommerce tasks', items: [
      ['edit', 'Bulk Product Editor', 'Edit hundreds of products at once, spreadsheet-style.', 'From $49', 'Popular'],
      ['inventory', 'Smart Inventory Management', 'Stay in stock and coordinate suppliers in one place.', 'From $79'],
      ['invoice', 'PDF Packing Slips & Invoices', 'Send branded invoices, credit notes and packing slips.', 'From $49'],
      ['hash', 'Sequence Order Number', 'Keep order numbers clean and sequential.', 'From $49'],
      ['edit', 'Advanced Order Notes', 'Keep your team and customers aligned on every order.', 'From $29'],
      ['plug', 'NetSuite Connector', 'Sync WooCommerce with NetSuite in real time.', 'From $299'],
    ] },
    'Global & Niche': { ic: 'globe', goal: 'Sell worldwide and serve specialist markets', items: [
      ['globe', 'Currency Switcher', 'Show prices in your visitors\u2019 currency and grow international sales.', 'From $99', 'Popular'],
      ['food', 'Restaurant: Menu & Delivery', 'Take online food orders with a built-in menu builder.', 'From $149'],
      ['store', 'Store Finder', 'Help customers find you with a Google Maps locator.', 'From $49'],
      ['age', 'Age Verification & Disclaimer', 'Stay compliant with age gates and policy popups.', 'From $49'],
      ['swatch', 'Product Variations & Swatches', 'Turn simple products into rich, visual variations.', 'From $49'],
      ['key', 'License Manager', 'Sell and manage digital license keys.', 'From $129'],
    ] },
  };
  (function renderCats() {
    const tabsEl = $('#catTabs');
    const gridEl = $('#catGrid');
    if (!tabsEl || !gridEl) return;
    const names = Object.keys(categories);
    let current = names[0];
    tabsEl.innerHTML = names
      .map((n, i) => `<button class="ctab${i === 0 ? ' active' : ''}" role="tab" aria-selected="${i === 0}" data-cat="${n}"><span class="ctab__ic">${icon(categories[n].ic)}</span><span class="ctab__txt"><b>${n}</b></span></button>`)
      .join('');
    const paint = (name) => {
      const c = categories[name];
      $('#catTitle').textContent = name;
      $('#catGoal').textContent = c.goal;
      gridEl.innerHTML = c.items
        .map(
          ([ic, title, desc, price, badge]) => `
        <a class="ccard" href="${STORE}/" target="_blank" rel="noopener">
          <div class="ccard__top"><span class="ccard__ic">${icon(ic)}</span>${badge ? `<span class="ccard__badge">\u2605 ${badge}</span>` : ''}</div>
          <h3>${title}</h3>
          <p>${desc}</p>
          <div class="ccard__foot">
            <span class="ccard__price"><small>Starting at</small>${price.replace('From ', '')}</span>
            <span class="ccard__link">View details ${icon('arrow', 'ic--sm')}</span>
          </div>
        </a>`
        )
        .join('');
    };
    paint(current);
    tabsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.ctab');
      if (!btn || btn.dataset.cat === current) return;
      current = btn.dataset.cat;
      $$('.ctab', tabsEl).forEach((t) => { const on = t === btn; t.classList.toggle('active', on); t.setAttribute('aria-selected', on); });
      gridEl.classList.add('is-swap');
      setTimeout(() => { paint(current); gridEl.classList.remove('is-swap'); }, 140);
    });
  })();

  /* ---------- Customer success stories (image carousel) ---------- */
  const stories = [
    { img: 'retail', tag: 'B2B Wholesale', brand: 'HSU Growing Supply', head: 'Runs retail + wholesale from one WooCommerce store', slug: 'hsu-growing-supply-retail-and-wholesale' },
    { img: 'coffee', tag: 'Currency Switcher', brand: 'Sweven Coffee', head: 'Boosted international AOV with multi-currency', slug: 'sweven-coffee-multi-currency-aov' },
    { img: 'food', tag: 'Bulk Order Table', brand: 'Tricon Speciality Foods', head: '1,200-SKU wholesale ordering, simplified', slug: 'tricon-bulk-ordering-simplified' },
    { img: 'charity', tag: 'Donation', brand: 'ALDEA APS', head: 'Donations made simple for supporters', slug: 'aldea-aps-donations-made-simple' },
    { img: 'apparel', tag: 'Instant Checkout', brand: 'South Coast Linen', head: 'Faster B2B checkout, more repeat orders', slug: '' },
    { img: 'warehouse', tag: 'Sales Agent', brand: 'Print File Archival', head: 'Automated sales-agent commissions at scale', slug: '' },
  ];
  (function renderStories() {
    const el = $('#storyTrack');
    if (!el) return;
    el.innerHTML = stories
      .map(
        (s) => `
      <a class="story" href="${s.slug ? '/case-studies/' + s.slug : '/case-studies'}">
        <img src="/images/photos/${s.img}.jpg" alt="${s.brand} WooCommerce success story" loading="lazy">
        <div class="story__grad"></div>
        <div class="story__body">
          <span class="story__tag">${s.tag}</span>
          <span class="story__brand">${s.brand}</span>
          <p>${s.head}</p>
          <span class="story__link">Read story →</span>
        </div>
      </a>`
      )
      .join('');
  })();

  /* ---------- Reviews (rotating two-row marquee) ---------- */
  const reviews = [
    { t: 'The B2B Wholesale plugin replaced three tools for us. Wholesale pricing, quotes and analytics just work. Real WooCommerce experts.', n: 'Marcus Reed', r: 'Founder, Nova Retail', a: 'MR', c: '#2450e6' },
    { t: 'Best WooCommerce extensions we’ve bought. Support answered in hours and the currency switcher lifted our AOV noticeably.', n: 'Aisha Khan', r: 'Ops Lead, BluePeak', a: 'AK', c: '#7c3aed' },
    { t: 'The All Access bundle paid for itself in a month. A true WooCommerce plugin specialist team behind every extension.', n: 'David Nguyen', r: 'Agency Owner', a: 'DN', c: '#0ea5a4' },
    { t: 'Donation for WooCommerce made recurring campaigns effortless for our nonprofit. Clean, reliable woo plugins.', n: 'Elena Rossi', r: 'Community Nonprofit', a: 'ER', c: '#f59e0b' },
    { t: 'We switched from a generic woo marketplace plugin and never looked back. Faster checkout, fewer abandoned carts.', n: 'Tom Fisher', r: 'DTC Brand', a: 'TF', c: '#e11d48' },
    { t: 'As a WooCommerce pro partner, I recommend WPExperts to every client. Consistent quality across 40+ plugins.', n: 'Priya Sharma', r: 'WordPress Developer', a: 'PS', c: '#0284c7' },
    { t: 'The bulk order product table cut our wholesale checkout time by nearly half. Buyers love it.', n: 'Liam O’Brien', r: 'Distributor', a: 'LO', c: '#16a34a' },
    { t: 'Sales Agent automated commissions we used to track in spreadsheets. Huge time saver every month.', n: 'Sofia Marín', r: 'Sales Manager', a: 'SM', c: '#9333ea' },
  ];
  (function renderReviews() {
    const starFull = `<svg class="ic ic--sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${IC.star}</svg>`;
    const stars = starFull.repeat(5);
    const card = (r) => `
      <article class="review">
        <div class="review__stars">${stars}</div>
        <p>“${r.t}”</p>
        <div class="review__who">
          <span class="review__av">${r.a}</span>
          <div><b>${r.n}</b><span>${r.r}</span></div>
        </div>
      </article>`;
    const rowItems = (arr) => arr.map((r) => card(r)).join('');
    const rowA = rowItems(reviews.slice(0, 6));
    const rowB = rowItems(reviews.slice(2, 8));
    const a = $('#reviewRowA');
    const b = $('#reviewRowB');
    if (a) a.innerHTML = rowA + rowA;
    if (b) b.innerHTML = rowB + rowB;
  })();

  /* ---------- Blog / guides (real images) ---------- */
  const posts = [
    { slug: 'sales-agent-for-woocommerce-2-0', img: 'dashboard', cat: 'Release Notes', t: 'Sales Agent For WooCommerce 2.0: Smarter Roles, Smarter Payouts', d: 'Managing a growing B2B sales team shouldn’t mean spreadsheets and guesswork. Here’s what’s new.', by: 'Muhammad Jaffer', date: 'Jul 28, 2026' },
    { slug: 'ai-assistant-manage-woocommerce-b2b-store', img: 'ai', cat: 'Easy Guide', t: 'How To Use An AI Assistant To Manage Your WooCommerce B2B Store', d: 'AI is the #1 tech priority for B2B ecommerce in 2026. Here’s how to put it to work today.', by: 'Zafar Mushtaq', date: 'Jul 20, 2026' },
    { slug: 'ai-powered-b2b-wholesale-for-woocommerce', img: 'team', cat: 'Smarter & Better', t: 'Meet The Smarter, AI-Powered B2B Wholesale For WooCommerce', d: 'Running a WooCommerce B2B store shouldn’t feel like managing ten systems at once.', by: 'Muhammad Jaffer', date: 'Jul 13, 2026' },
  ];
  (function renderBlog() {
    const grid = $('#blogGrid');
    if (!grid) return;
    grid.innerHTML = posts
      .map(
        (p) => `
      <a class="post" href="/blog/${p.slug}">
        <div class="post__img"><img src="/images/photos/${p.img}.jpg" alt="${p.t}" loading="lazy"><span class="post__cat">${p.cat}</span></div>
        <div class="post__body">
          <h3>${p.t}</h3>
          <p>${p.d}</p>
          <div class="post__meta"><span>by <b>${p.by}</b></span><span>${p.date}</span></div>
        </div>
      </a>`
      )
      .join('');
  })();

  /* ---------- FAQ (AEO) ---------- */
  const faqs = [
    ['What Makes WPExperts The #1 WooCommerce Plugins Store?', 'With 14+ years as WooCommerce experts and 5,000+ projects delivered, WPExperts builds 40+ premium WooCommerce extensions backed by free updates, a 200+ member support team and a 14-day money-back guarantee. We’re a recognized WooCommerce pro partner, not a hobby project.'],
    ['Is B2B Wholesale For WooCommerce Really AI-Powered?', 'Yes. It’s a complete AI-powered B2B ecommerce plugin, automating wholesale pricing, buyer roles, quote requests and bulk ordering, plus a real-time B2B analytics dashboard, all inside one WooCommerce store.'],
    ['Can I Use One WooCommerce Plugin On Multiple Sites?', 'License tiers cover 1, 5 or 100 sites. The All Access bundle unlocks every current and future WooCommerce plugin under one membership, starting at $399.99/year, the best value in the woo marketplace.'],
    ['Do You Offer A Money-Back Guarantee?', 'Every WooCommerce extension and the All Access bundle include a 14-day money-back guarantee, so you can try our woo plugins completely risk-free.'],
    ['Do The Plugins Get Regular Updates And Support?', 'Always. All plugins receive free updates for the latest WooCommerce, PHP and WordPress versions, and every purchase includes premium support from our WooCommerce specialists (6-hour average response).'],
    ['Can I Customize The Plugins To Fit My Store?', 'Yes. Our extensions are feature-rich and highly customizable. Our team also offers custom WordPress products & services and bespoke WooCommerce development when you need something tailored.'],
  ];
  (function renderFaq() {
    const el = $('#faqList');
    if (!el) return;
    el.innerHTML = faqs
      .map(
        ([q, a], i) => `
      <div class="faq__item${i === 0 ? ' open' : ''}">
        <button class="faq__q" aria-expanded="${i === 0}">${q}<span class="faq__pm"></span></button>
        <div class="faq__a"><p>${a}</p></div>
      </div>`
      )
      .join('');
    el.addEventListener('click', (e) => {
      const q = e.target.closest('.faq__q');
      if (!q) return;
      const item = q.parentElement;
      const open = item.classList.contains('open');
      $$('.faq__item', el).forEach((i) => {
        i.classList.remove('open');
        $('.faq__q', i).setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('open');
        q.setAttribute('aria-expanded', 'true');
      }
    });
  })();

  /* ---------- Plugins mega menu open/close ---------- */
  const megaWrap = $('#pluginsMenu');
  if (megaWrap) {
    const btn = $('.nav-link', megaWrap);
    const close = () => { megaWrap.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const open = megaWrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => { if (!megaWrap.contains(e.target)) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Success-stories carousel arrows ---------- */
  const track = $('#storyTrack');
  if (track) {
    const scrollBy = (dir) => track.scrollBy({ left: dir * (track.clientWidth * 0.8), behavior: 'smooth' });
    $('#storyPrev') && $('#storyPrev').addEventListener('click', () => scrollBy(-1));
    $('#storyNext') && $('#storyNext').addEventListener('click', () => scrollBy(1));
  }

  /* ---------- Header shadow on scroll ---------- */
  const header = $('#siteHeader');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const toggle = $('#navToggle');
  const mnav = $('#mobileNav');
  if (toggle && mnav) {
    toggle.addEventListener('click', () => {
      const open = mnav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    mnav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') { mnav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---------- Copy promo code ---------- */
  const code = $('.announce__code');
  if (code) {
    code.addEventListener('click', () => {
      navigator.clipboard && navigator.clipboard.writeText(code.dataset.copy);
      const prev = code.textContent;
      code.textContent = 'Copied!';
      setTimeout(() => (code.textContent = prev), 1400);
    });
  }

  /* ---------- Promo countdown ---------- */
  (function timer() {
    const el = $('#promoTimer');
    if (!el) return;
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const tick = () => {
      const diff = end - new Date();
      if (diff <= 0) { el.textContent = ''; return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      el.textContent = `· ends in ${d}d ${h}h ${m}m`;
    };
    tick();
    setInterval(tick, 60000);
  })();

  /* ---------- Newsletter (front-end demo) ---------- */
  const nform = $('#newsletterForm');
  if (nform) {
    nform.addEventListener('submit', (e) => {
      e.preventDefault();
      $('#newsletterMsg').textContent = '✓ Thanks! Check your inbox to confirm your subscription.';
      nform.reset();
    });
  }

  /* ---------- Pause marquees while off-screen (scroll perf) ---------- */
  if ('IntersectionObserver' in window) {
    [['.brands__marquee', '.brands__row'], ['.reviews-marquee', '.reviews-row']].forEach(
      ([wrapSel, rowSel]) => {
        const wrap = $(wrapSel);
        if (!wrap) return;
        const rows = $$(rowSel, wrap);
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              // '' → let CSS drive it (so :hover pause still works when visible)
              rows.forEach((r) => (r.style.animationPlayState = e.isIntersecting ? '' : 'paused'));
            });
          },
          { rootMargin: '150px' }
        );
        io.observe(wrap);
      }
    );
  }

  /* ---------- Hero search (decorative, prevent reload) ---------- */
  const sform = $('.hero__search');
  if (sform) sform.addEventListener('submit', (e) => e.preventDefault());

  /* ---------- Year ---------- */
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
