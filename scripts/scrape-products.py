"""Builds app/data/product-details.json from the live store product pages.

Usage:  python -I scripts/scrape-products.py <download_dir> app/data/product-details.json

Downloads each https://store.wpexperts.io/products/<slug>/ into <download_dir> (kept as untrusted data,
never executed), extracts the copy, and writes one JSON file keyed by our plugin name.
Re-run it whenever the store copy changes. Plugins with no store page are simply left out of the JSON
and render a lean page from app/data/plugins.js.
"""
import html, json, os, re, sys, time, urllib.request
from html.parser import HTMLParser

STORE = 'https://store.wpexperts.io/products/'
# our plugin name (app/data/plugins.js) -> store slug
SLUGS = {
    'B2B Wholesale for WooCommerce': 'wholesale-for-woocommerce-pro',
    'B2B Request a Quote': 'quote-for-woocommerce',
    'Bulk Order Product Table': 'bulk-order-form-for-woocommerce',
    'Sales Agent for WooCommerce': 'sales-agent-for-woocommerce',
    'B2B Payments & Invoicing': 'b2b-payments-for-woocommerce',
    'Tiered & Role-Based Pricing': 'tiered-pricing-for-woocommerce',
    'B2B Company Credits & Permissions': 'b2b-company-credits-permissions-for-woocommerce',
    'Smart Discounts & Coupons': 'smart-discounts-and-coupons-for-woocommerce',
    'Dynamic & Role-Based Pricing': 'dynamic-and-role-based-pricing-for-woocommerce',
    'Smart Product Bundles': 'smart-product-bundle-for-woocommerce',
    'Pay Your Price': 'pay-your-price',
    'Conditional Fees': 'conditional-fees-for-woocommerce',
    'Spin Wheel': 'spin-wheel-for-woocommerce',
    'Instant Checkout': 'instant-checkout-for-woocommerce',
    'Abandoned Cart Recovery': 'abandoned-cart-for-woocommerce',
    'Custom Checkout Fields Editor': 'custom-checkout-fields-editor-for-woocommerce',
    'Address Autocomplete': 'address-autocomplete-for-woocommerce',
    'Product Quantity': 'product-quantity-for-woocommerce',
    'Notifications (FOMO)': 'notifications-for-woocommerce',
    'User Registration': 'user-registration-for-woocommerce',
    'Delivery Options': 'delivery-slots-for-woocommerce',
    'Smart Wishlist': 'smart-wishlist-for-woocommerce',
    'Custom Product Add-ons & Fields': 'smart-custom-product-addons-and-fields-for-woocommerce',
    'Donation for WooCommerce': 'donation-for-woocommerce',
    'Fundraising': 'fundraising-for-woocommerce',
    'Store Credits & Gift Cards': 'store-credits-gift-cards-for-woocommerce',
    'Loyalty — Points & Rewards': 'loyalty-for-woocommerce',
    'Gamification': 'gamification-for-woocommerce',
    'Bulk Product Editor': 'bulk-product-editor-for-woocommerce',
    'Smart Inventory Management': 'inventory-management-for-woocommerce',
    'PDF Packing Slips & Invoices': 'pdf-packing-slips-and-invoice-builder-for-woocommerce',
    'Sequence Order Number': 'smart-sequence-order-number-for-woocommerce',
    'Advanced Order Notes': 'advanced-order-notes-for-woocommerce',
    'NetSuite Connector': 'netsuite-connector-for-woocommerce',
    'Currency Switcher': 'currency-switcher-for-woocommerce',
    'Restaurant — Menu & Delivery': 'restaurant-for-woocommerce',
    'Store Finder': 'store-finder-for-woocommerce',
    'Age Verification & Disclaimer': 'woocommerce-product-disclaimer',
    'Product Variations & Swatches': 'bulk-variation-and-swatches-for-woocommerce',
    'License Manager': 'license-manager-for-woocommerce',
    'Keap (Infusionsoft) Integration': 'infusion-soft-for-woocommerce',
}

SKIP_TAGS = {'script', 'style', 'noscript', 'svg', 'template', 'head'}
BLOCKS = {'h1', 'h2', 'h3', 'p', 'li'}
# headings that are page furniture, not product copy
IGNORE = re.compile(r'^pricing plan|trusted by|screenshot|second thoughts|money-back|^faq|changelog|loved by|still have|choose the plan|simple, transparent|compar|^reviews?$', re.I)


class Blocks(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.skip, self.cur, self.depth = [], 0, None, 0

    def handle_starttag(self, tag, attrs):
        if tag in SKIP_TAGS:
            self.skip += 1
        if tag in BLOCKS and not self.skip:
            if self.cur is None:
                self.cur = [tag, dict(attrs).get('class', ''), '']
            self.depth += 1

    def handle_endtag(self, tag):
        if tag in SKIP_TAGS:
            self.skip = max(0, self.skip - 1)
        if tag in BLOCKS and self.cur is not None:
            self.depth -= 1
            if self.depth <= 0:
                txt = re.sub(r'\s+', ' ', self.cur[2]).strip()
                if txt:
                    self.out.append((self.cur[0], self.cur[1], txt))
                self.cur, self.depth = None, 0

    def handle_data(self, data):
        if self.cur is not None and not self.skip:
            self.cur[2] += data


def fetch(slug, folder):
    path = os.path.join(folder, slug + '.html')
    if not os.path.exists(path):
        req = urllib.request.Request(STORE + slug + '/', headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36'})
        with urllib.request.urlopen(req, timeout=40) as r:
            open(path, 'wb').write(r.read())
        time.sleep(0.4)
    return open(path, encoding='utf-8', errors='ignore').read()


def _mojibake(m):
    try:
        return m.group().encode('latin-1').decode('utf-8')
    except (UnicodeEncodeError, UnicodeDecodeError):
        return m.group()


def clean(s, n=None):
    s = re.sub(r'\s+', ' ', html.unescape(s).replace('\u00a0', ' '))
    # a few store pages contain double-encoded text (a-circumflex + C1 bytes for an apostrophe): repair it
    s = re.sub(r'[\u00c2-\u00f4][\u0080-\u00bf]{1,3}', _mojibake, s)
    s = re.sub(r'[\u0080-\u009f\u200b-\u200f\ufeff]', '', s).replace('\ufffd', '\u2013').strip()
    if n and len(s) > n:
        cut = s[:n]
        end = max(cut.rfind('. '), cut.rfind('! '), cut.rfind('? '))
        s = cut[:end + 1] if end > n * 0.5 else cut.rsplit(' ', 1)[0].rstrip(',;:') + '\u2026'
    return s


def parse(raw):
    # FAQ accordion first, then drop it so its h3s are not mistaken for highlights
    faqs = []
    for q, a in re.findall(r'<div class="faq_header">\s*<h3>(.*?)</h3>.*?<div class="faq_txt">(.*?)</div>\s*</div>', raw, flags=re.S):
        q = clean(re.sub(r'<[^>]+>', '', q)); a = clean(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', a)))
        if q and a:
            faqs.append({'q': q, 'a': a})
    raw_nofaq = re.sub(r'<div class="faqs_box">.*?</section>', '', raw, flags=re.S)
    start = raw_nofaq.find('<h1')
    end = raw_nofaq.find('id="post-footer-sect"')
    body = raw_nofaq[start: end if end > start else len(raw_nofaq)]
    # some pages (wholesale) render bullets as icon-list labels instead of <li>
    body = re.sub(r'<span class="uagb-icon-list__label">(.*?)</span>', r'<li>\1</li>', body, flags=re.S)

    hero_points = [clean(re.sub(r'<[^>]+>', ' ', t)) for t in re.findall(r'<p[^>]*hero-woo__feature-text[^>]*>(.*?)</p>', raw_nofaq, flags=re.S)]
    p = Blocks(); p.feed(body)
    title, lead, items, cur = '', '', [], None
    for kind, cls, txt in p.out:
        if kind == 'h1':
            title, cur = clean(txt), None
        elif kind in ('h2', 'h3'):
            cur = {'level': kind, 'h': clean(txt), 'p': [], 'li': []}; items.append(cur)
        elif cur is None:
            if 'hero-woo__description' in cls: lead = clean(txt)
        else:
            cur['p' if kind == 'p' else 'li'].append(clean(txt))

    highlights, features, in_features, after_pricing = [], [], False, False
    for it in items:
        if it['level'] == 'h2':
            in_features = 'feature' in it['h'].lower()
            if in_features:
                continue
        if re.match(r'pricing plan', it['h'], re.I):
            after_pricing = True  # cards after the pricing block are the feature grid, even without a "Features" heading
        if IGNORE.search(it['h']):
            continue
        if (in_features or after_pricing) and it['level'] == 'h3' and it['p'] and not it['li']:
            features.append({'t': it['h'], 'd': clean(' '.join(it['p']), 190)})
        elif not in_features and not after_pricing and not features and it['p'] and (it['level'] == 'h3' or it['li']):
            highlights.append({'t': it['h'], 'd': clean(' '.join(it['p']), 330), 'b': [clean(x, 150) for x in it['li'][:4]]})

    seen = {h['t'].lower() for h in highlights}
    features = [f for f in features if f['t'].lower() not in seen]

    meta = re.search(r'<meta name="description" content="([^"]*)"', raw)
    page_title = re.search(r'<title>(.*?)</title>', raw, flags=re.S)
    demo = re.search(r'href="(https://wpedemo\.com/[^"]+)"', raw)
    docs = re.search(r'href="(https://store\.wpexperts\.io/docs/[^"]+)"', raw) or re.search(r'href="(https://wpexperts\.io/docs/[^"]+)"', raw)
    return {
        'title': clean(page_title.group(1)) if page_title else title,
        'h1': title,
        'lead': lead or (clean(meta.group(1)) if meta else ''),
        'meta': clean(meta.group(1)) if meta else '',
        'heroPoints': hero_points[:6],
        'highlights': highlights[:8],
        'features': features,
        'faqs': faqs,
        'demo': demo.group(1) if demo else '',
        'docs': docs.group(1) if docs else '',
    }


def main(folder, out_path):
    os.makedirs(folder, exist_ok=True)
    data = {}
    for name, slug in SLUGS.items():
        try:
            d = parse(fetch(slug, folder))
        except Exception as e:  # a missing page just means a lean template for that plugin
            print('SKIP', name, slug, e); continue
        d['slug'] = slug
        data[name] = d
        print(f"{name[:38]:38} h={len(d['highlights'])} f={len(d['features'])} faq={len(d['faqs'])} demo={'y' if d['demo'] else '-'} docs={'y' if d['docs'] else '-'}")
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    print('wrote', out_path, len(data), 'plugins')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
