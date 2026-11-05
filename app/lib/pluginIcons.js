// Icons for the product pages: the site's line icons + a few more, and a keyword matcher that picks one
// from a feature's title, so every feature gets a sensible icon without hand-tagging 400+ of them.
import { IC } from './icons';

const EXTRA = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  sliders: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.6a6.5 6.5 0 0 1 3.5 5.4"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m21 16-5-5-8 8"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  checkcircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5-6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  repeat: '<path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  trophy: '<path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4v1a3 3 0 0 0 3 3M16 6h4v1a3 3 0 0 1-3 3M12 14v4M8 21h8M10 18h4"/>',
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5zM4 21.5A2.5 2.5 0 0 0 6.5 19H20"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 6 3.5-6 3.5z"/>',
  dollar: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5C14 8.5 13 8 12 8c-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5V8M12 16v1.5"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.8 0-1.2-1-1.6-1-2.7 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.2 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
  headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="4" height="6" rx="1.6"/><rect x="17.5" y="13" width="4" height="6" rx="1.6"/><path d="M20 19a4 4 0 0 1-4 3h-3"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  sparkles: '<path d="M12 3l1.8 4.4L18 9l-4.2 1.6L12 15l-1.8-4.4L6 9l4.2-1.6z"/>',
};
export const ICONS = { ...IC, ...EXTRA };

// first match wins, so the specific rules come first
const RULES = [
  [/e-?mail|newsletter|e-?card|thank-you|receipt/i, 'mail'],
  [/pdf|invoice|packing|credit note|\bexport|\bimport|csv/i, 'invoice'],
  [/\bapi\b|developer|hook|webhook|shortcode|gutenberg|block|code/i, 'code'],
  [/dashboard|analytic|insight|report|graph|statistic|log\b|logs|history|track(?!ing number)/i, 'chart'],
  [/ai\b|ai-|smart|suggest|assistant/i, 'ai'],
  [/role|permission|group|buyer|agent|member|customer|user|account|registration|profile|approval|company|wholesaler/i, 'users'],
  [/credit|payment|gateway|pay\b|pay-|paypal|stripe|bank|refund|cash|wallet|bnpl|checkout/i, 'card'],
  [/commission|payout|donation|donor|fee|price|pricing|amount|cost|\bcurrency|exchange|rate/i, 'dollar'],
  [/discount|coupon|promo|offer|deal|tax|vat|sale/i, 'discount'],
  [/ship|deliver|slot|pickup|route|logistic/i, 'truck'],
  [/schedul|timer|time|date|calendar|expir|duration|recurr|subscription|period/i, 'calendar'],
  [/search|autocomplete|find|lookup/i, 'search'],
  [/filter|sort|categor|taxonom/i, 'filter'],
  [/mobile|responsive|device|tablet|app\b/i, 'phone'],
  [/design|style|custom|templat|label|color|colour|theme|layout|widget|display|preview|appearance|badge|banner|icon|font/i, 'palette'],
  [/cart|quantity|basket|add-to-cart|add to cart|bundle|variation|swatch|product|catalog|inventory|stock/i, 'box'],
  [/notif|alert|remind|popup|pop-up|message|announce|chat|fomo/i, 'bell'],
  [/gift|reward|point|loyal|rank|gamif|spin|wheel|game|referr|trophy|win/i, 'trophy'],
  [/map|location|address|geo|store finder|region|country|zone|distance/i, 'pin'],
  [/translat|language|multi-?currenc|global|worldwide|localiz|wpml/i, 'globe'],
  [/secur|restrict|visib|hide|hidden|private|captcha|verif|age\b|protect|login|lock|password|gdpr|privacy|permission/i, 'shield'],
  [/sync|connector|integrat|netsuite|keap|crm|zapier|compatib|import from/i, 'refresh'],
  [/bulk|table|spreadsheet|list|grid|column|row/i, 'table'],
  [/goal|campaign|cause|fund|target|progress/i, 'target'],
  [/edit|field|form|builder|note|comment/i, 'edit'],
  [/image|photo|gallery|media|picture/i, 'image'],
  [/link|share|social|redirect|url/i, 'link'],
  [/store|shop|restaurant|menu|food/i, 'store'],
  [/key|license|licence|activation/i, 'key'],
  [/layer|multi|multiple|unlimited|many/i, 'layers'],
  [/auto|instant|quick|fast|one-click|one click|speed/i, 'zap'],
];

export function iconFor(text, fallback = 'checkcircle') {
  const hit = RULES.find(([re]) => re.test(text));
  return hit ? hit[1] : fallback;
}
