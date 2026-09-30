const cols = [
  ['Products', [
    ['Donation for woo', 'https://store.wpexperts.io/product/donation/'],
    ['Restaurant for Woo', 'https://store.wpexperts.io/'],
    ['Wholesale for Woo', 'https://store.wpexperts.io/product/wholesale-for-woocommerce/'],
    ['Sales Agent for Woo', 'https://store.wpexperts.io/product/sales-agent/'],
    ['Other Products', '/products'],
  ]],
  ['Services', [
    ['E-learning (LMS)', 'https://wpexperts.io/'],
    ['WordPress B2B Development', 'https://wpexperts.io/'],
    ['WordPress VIP Services', 'https://wpexperts.io/'],
    ['WPExperts White Label Services', 'https://wpexperts.io/'],
    ['WooCommerce Development', 'https://wpexperts.io/'],
  ]],
  ['Company', [
    ['Portfolio', '/case-studies'],
    ['About us', 'https://wpexperts.io/'],
    ['Services', 'https://wpexperts.io/'],
    ['Privacy Policy', 'https://store.wpexperts.io/'],
    ['Refund Policy', 'https://store.wpexperts.io/'],
  ]],
];

// viewBox x-offsets match the 34px-spaced icon strip exported from Figma
const socials = [
  ['Facebook', 'https://www.facebook.com/wpexpertsio', 0, <path key="p" d="M13 13.9H14.4286L15 11.5H13V10.3C13 9.682 13 9.1 14.1429 9.1H15V7.084C14.8137 7.0582 14.1103 7 13.3674 7C11.816 7 10.7143 7.9942 10.7143 9.82V11.5H9V13.9H10.7143V19H13V13.9Z" />],
  ['X', 'https://x.com/wpexpertsio', 34, <path key="p" d="M50.1567 7.22266H52.0392L47.9057 11.8198L52.735 18.056H48.9452L45.9781 14.2663L42.5813 18.056H40.6987L45.0777 13.139L40.4531 7.22266H44.337L47.0176 10.6846L50.1567 7.22266ZM49.4977 16.9766H50.5413L43.7886 8.26201H42.6672L49.4977 16.9766Z" />],
  ['LinkedIn', 'https://www.linkedin.com/company/wpexpertsio', 68, <path key="p" fillRule="evenodd" d="M75.582 6.50113C75.582 5.90322 76.0658 5.41797 76.6659 5.41797C77.2634 5.41797 77.7487 5.90322 77.7487 6.50113C77.7487 7.09937 77.2634 7.58464 76.6659 7.58464C76.0658 7.58464 75.582 7.09937 75.582 6.50113ZM87.4987 18.418H85.332V14.0846C85.332 13.0013 85.332 11.3763 83.707 11.3763C82.082 11.3763 82.082 12.9157 82.082 14.0846V18.418H79.9154V9.75131H82.082V10.8346C82.082 10.8346 83.1654 9.75131 84.7904 9.75131C86.4154 9.75131 87.4987 10.8577 87.4987 13.543V18.418ZM77.7487 18.418H75.582V9.75131H77.7487V18.418Z" />],
  ['Instagram', 'https://www.instagram.com/wpexpertsio', 102, <path key="p" fillRule="evenodd" d="M113.103 12.9991C113.103 14.046 113.952 14.8952 114.998 14.8952C116.044 14.8952 116.893 14.046 116.893 12.9991C116.893 11.9515 116.044 11.1029 114.998 11.1029C113.952 11.1029 113.103 11.9515 113.103 12.9991ZM117.164 10.1547C117.164 9.78098 117.467 9.47757 117.841 9.47757C118.215 9.47757 118.518 9.78098 118.518 10.1547C118.518 10.5286 118.215 10.832 117.841 10.832C117.467 10.832 117.164 10.5286 117.164 10.1547ZM112.291 12.9991C112.291 11.503 113.503 10.2902 114.998 10.2902C116.493 10.2902 117.705 11.503 117.705 12.9991C117.705 14.495 116.493 15.7079 114.998 15.7079C113.503 15.7079 112.291 14.495 112.291 12.9991ZM112.614 7.58203C110.939 7.58203 109.582 8.93916 109.582 10.6132V15.3842C109.582 17.0583 110.939 18.4154 112.614 18.4154H117.384C119.058 18.4154 120.415 17.0583 120.415 15.3842V10.6132C120.415 8.93916 119.058 7.58203 117.384 7.58203H112.614Z" />],
  ['YouTube', 'https://www.youtube.com/@WPExpertsio/videos', 136, <path key="p" fillRule="evenodd" d="M154.643 8.24735C155.265 8.41382 155.753 8.90247 155.92 9.52438C156.221 10.6504 156.222 13.0011 156.222 13.0011C156.222 13.0011 156.222 15.3518 155.92 16.4779C155.753 17.0997 155.265 17.5884 154.643 17.7549C153.517 18.0569 149 18.0569 149 18.0569C149 18.0569 144.482 18.0569 143.356 17.7549C142.735 17.5884 142.246 17.0997 142.079 16.4779C141.777 15.3518 141.777 13.0011 141.777 13.0011C141.777 13.0011 141.777 10.6504 142.079 9.52438C142.246 8.90247 142.735 8.41382 143.356 8.24735C144.482 7.94531 149 7.94531 149 7.94531C149 7.94531 153.517 7.94531 154.643 8.24735ZM151.306 13.0013L147.554 15.1677V10.8349L151.306 13.0013Z" />],
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="WPExperts">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/footer/logo-white.svg" alt="WPExperts" width="200" height="44" />
          </a>
          <p>WPExperts (formerly WooExperts) is a top WordPress enterprise level development agency offering top-notch WordPress services and business solutions from expert WordPress theme and plugin developers.</p>
          <div className="footer__soc">
            {socials.map(([name, href, x, path]) => (
              <a key={name} href={href} target="_blank" rel="noopener" aria-label={name}>
                <svg viewBox={`${x} 0 26 26`} width="26" height="26" fill="currentColor" aria-hidden="true">{path}</svg>
              </a>
            ))}
          </div>
        </div>
        <div className="footer__cols">
          {cols.map(([title, links]) => (
            <div className="footer__col" key={title}>
              <h4>{title}</h4>
              {links.map(([label, href]) => (
                <a key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__line">
        <div className="container footer__bottom">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer__clutch" src="/images/footer/clutch.png" alt="5.0 rating, based on 72 Clutch reviews" width="212" height="50" />
          <p>Copyright © <span id="year"></span> WPExperts</p>
          <div className="footer__certs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/footer/woo.png" alt="Woo Pro Partner" width="46" height="46" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/footer/iso27001.png" alt="ISO 27001 certified" width="50" height="50" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/footer/iso9001.png" alt="ISO 9001 certified" width="50" height="50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
