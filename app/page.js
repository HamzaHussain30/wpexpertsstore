import BtnRoll from './components/BtnRoll';

export default function Home() {
  return (
    <>
      <main>
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <h1>WooCommerce Plugins That Turn <span className="grad">Browsers Into Buyers</span></h1>
              <p className="hero__sub">40+ premium WooCommerce extensions built by real experts — try any plugin risk-free.</p>
  
              <form className="hero__search" role="search">
                <input type="search" placeholder="Search plugins, e.g. wholesale, currency…" aria-label="Search plugins" />
                <button type="submit" aria-label="Search">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                </button>
              </form>
            </div>
            <div className="hero__stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero__visual" src="/images/photos/hero-foreground.png" alt="WooCommerce dashboard with sales, orders and top products" width="1031" height="571" loading="eager" fetchPriority="high" />
            </div>
          </div>
        </section>

        {/* ============ TOP PLUGINS (white framed, dark cards) ============ */}
        <section className="section section--framed" id="top-plugins">
          <div className="container">
            <div className="section__head">
              <span className="pill">Best Sellers</span>
              <h2>Top WooCommerce Plugins Loved By Store Owners</h2>
              <p>Hand-picked extensions that thousands of merchants rely <br/> on every day to sell more and work less.</p>
            </div>
            <div className="plugin-grid" id="topPluginGrid"></div>
            <div className="section__foot">
              <a href="/products" className="btn btn--dark btn--lg"><BtnRoll>Explore More Plugins</BtnRoll> <span data-icon="arrow"></span></a>
            </div>
          </div>
        </section>

        {/* ============ STATS BAND ============ */}
        <section className="statsband">
          <div className="container statsband__inner">
            <div><b>500k<i>+</i></b><span>Trusted By Customers</span></div>
            <div><b>40<i>+</i></b><span>Premium Plugins</span></div>
            <div><b>750k<i>+</i></b><span>Total Downloads</span></div>
            <div><b>14<i> Yrs</i></b><span>WooCommerce Expertise</span></div>
          </div>
        </section>

        {/* ============ B2B PIECE OF ART (product spotlight) ============ */}
        <section className="b2b b2b--light" id="b2b">
          <div className="container">
            <div className="section__head">
              <span className="pill pill--art"><i className="art__star">✦</i> WPExperts Piece Of Art</span>
              <h2>B2B Wholesale For WooCommerce: A Complete <span className="grad">AI-Powered</span> B2B Commerce Engine</h2>
              <p>Not just a plugin — a full B2B operating system for WooCommerce, driven by AI.</p>
            </div>

            <div className="b2b__showcase">
              <div className="b2b__visual">
                <div className="b2b__shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/photos/wpexperst-store-whole-image.png" alt="AI-powered B2B analytics dashboard with AI assistant for WooCommerce Wholesale" width="1254" height="1254" loading="lazy" />
                </div>
              </div>

              <div className="b2b__side">
                <div className="b2b__features">
                  <article className="b2b__feat"><span className="fic" data-icon-duo="ai"></span><div><h3>AI-Powered</h3><p>Smart pricing suggestions, auto-generated quotes and predictive B2B workflows.</p></div></article>
                  <article className="b2b__feat"><span className="fic" data-icon-duo="dashboard"></span><div><h3>B2B Analytics Dashboard</h3><p>Track wholesale revenue, buyers and orders in real time from one screen.</p></div></article>
                  <article className="b2b__feat"><span className="fic" data-icon-duo="tag"></span><div><h3>B2B Pricing</h3><p>Role-based, tiered and dynamic wholesale pricing for every customer group.</p></div></article>
                  <article className="b2b__feat"><span className="fic" data-icon-duo="table"></span><div><h3>Bulk Order Product Table</h3><p>Let buyers add dozens of SKUs to cart in seconds with a fast order table.</p></div></article>
                  <article className="b2b__feat"><span className="fic" data-icon-duo="shield"></span><div><h3>Company Accounts &amp; Credit</h3><p>Company credit lines, buyer permissions and invoice payments for every wholesale account.</p></div></article>
                </div>

                <div className="b2b__cta">
                  <a href="https://store.wpexperts.io/product/wholesale-for-woocommerce/" target="_blank" rel="noopener" className="btn btn--primary btn--lg"><BtnRoll>Explore B2B Wholesale</BtnRoll> <span data-icon="arrow"></span></a>
                  <a href="https://store.wpexperts.io/" target="_blank" rel="noopener" className="btn btn--plain btn--lg"><span data-icon="play"></span> <BtnRoll>Watch Demo</BtnRoll></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRUST / BRANDS ============ */}
        <section className="brands" aria-label="Customers">
          <div className="container">
            <p className="brands__label">Trusted By <strong>1.5&nbsp;Million+</strong> Brands, Distributors &amp; Stores Worldwide</p>
          </div>
          <div className="brands__marquee">
            <div className="brands__row" id="brandRowA"></div>
            <div className="brands__row brands__row--rev" id="brandRowB"></div>
          </div>
        </section>

        {/* ============ PLUGINS BY CATEGORY (white framed, dark cards) ============ */}
        <section className="section section--framed" id="categories">
          <div className="container">
            <div className="section__head">
              <span className="pill">Plugin Library</span>
              <h2>Solutions Built For Every WooCommerce Need</h2>
              <p>Explore extensions designed to help you sell more, manage customers, <br/> automate workflows, and scale your store.</p>
            </div>
            <div className="ctabs" id="catTabs" role="tablist"></div>
            <div className="cat-bar">
              <div>
                <h3 id="catTitle">B2B &amp; Wholesale</h3>
                <p id="catGoal"></p>
              </div>
              <span className="cat-count">40+ plugins available</span>
            </div>
            <div className="cat-grid" id="catGrid"></div>
          </div>
        </section>

        {/* ============ CUSTOMER SUCCESS STORIES ============ */}
        <section className="section section--alt" id="stories">
          <div className="container">
            <div className="section__head section__head--row">
              <div>
                <span className="pill">Real Results</span>
                <h2>Customer <span className="grad">Success Stories</span></h2>
                <p>See how fast-growing stores, wholesalers and nonprofits scale with WPExperts plugins.</p>
              </div>
              <div className="story__nav">
                <button id="storyPrev" aria-label="Previous">‹</button>
                <button id="storyNext" aria-label="Next">›</button>
              </div>
            </div>
          </div>
          <div className="story-rail">
            <div className="story-track" id="storyTrack"></div>
          </div>
        </section>

        {/* ============ WHY WPEXPERTS (Razor-style split card) ============ */}
        <section className="section" id="compare">
          <div className="container">
            <div className="whyus">
              <div className="whyus__intro">
                <span className="whyus__eyebrow">/ Why WPExperts</span>
                <h2>The WPExperts Difference</h2>
                <p>For 14 years, we&apos;ve built WooCommerce plugins trusted by store owners worldwide — from solo shops to 1.5M+ active installs.</p>
                <div className="whyus__links">
                  <a href="/products" className="whyus__link">Browse Plugins <span data-icon="arrow"></span></a>
                  <a href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener" className="whyus__link">Talk To Support <span data-icon="arrow"></span></a>
                </div>
              </div>

              <div className="whyus__feats">
                <div className="whyus__feat">
                  <span className="whyus__ic" data-icon="ai"></span>
                  <div>
                    <h3>AI-Powered</h3>
                    <p>Smart pricing suggestions, auto-generated quotes and predictive workflows built into every B2B sale.</p>
                  </div>
                </div>
                <div className="whyus__feat">
                  <span className="whyus__ic" data-icon="box"></span>
                  <div>
                    <h3>All-In-One Value <span className="whyus__badge">Most Loved</span></h3>
                    <p>One membership unlocks 40+ plugins, every future release, and savings of up to 80% vs. buying separately.</p>
                  </div>
                </div>
              </div>

              <div className="whyus__feats">
                <div className="whyus__feat">
                  <span className="whyus__ic" data-icon="headset"></span>
                  <div>
                    <h3>Expert Support</h3>
                    <p>200+ WooCommerce specialists on 24/7 global coverage, with a 6-hour average response time.</p>
                  </div>
                </div>
                <div className="whyus__feat">
                  <span className="whyus__ic" data-icon="shield"></span>
                  <div>
                    <h3>Battle-Tested</h3>
                    <p>1.5M+ active installs, tested against every WooCommerce release, with free lifetime updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ REVIEWS (rotating) ============ */}
        <section className="section" id="reviews">
          <div className="container">
            <div className="section__head">
              <span className="pill">★ 4.6 Average · 5,000+ Reviews</span>
              <h2>Loved By Merchants Everywhere</h2>
              <p>Trusted by store owners, wholesalers and agencies who ship faster with WPExperts.</p>
            </div>
          </div>
          <div className="reviews-marquee">
            <div className="reviews-row" id="reviewRowA"></div>
            <div className="reviews-row reviews-row--rev" id="reviewRowB"></div>
          </div>
        </section>

        {/* ============ BLOG ============ */}
        <section className="section section--alt" id="blog">
          <div className="container">
            <div className="section__head">
              <h2>Guides, Updates &amp; WooCommerce Know-How</h2>
              <p>Actionable tips and product news to help you sell more with WooCommerce.</p>
            </div>
            <div className="blog-grid" id="blogGrid"></div>
            <div className="section__foot">
              <a href="/blog" className="btn btn--dark"><BtnRoll>View All Articles</BtnRoll> <span data-icon="arrow"></span></a>
            </div>
          </div>
        </section>

        {/* ============ HELP ============ */}
        <section className="section" id="help">
          <div className="container">
            <div className="section__head">
              <span className="pill">We&apos;re Here To Help</span>
              <h2>Expert Support At Every Step</h2>
              <p>Detailed documentation and expert support to help you get <br/> the most from every plugin.</p>
            </div>
            <div className="help-grid">
              <div className="help">
                <span className="help__ic help__ic--a" data-icon="book"></span>
                <h3>Knowledge Base</h3>
                <p>700+ searchable articles with instant answers to almost every question.</p>
                <a href="https://store.wpexperts.io/docs/" target="_blank" rel="noopener" className="link">Browse Docs →</a>
              </div>
              <div className="help">
                <span className="help__ic help__ic--b" data-icon="play"></span>
                <h3>Video Tutorials</h3>
                <p>800+ step-by-step written and video tutorials for a wide range of use cases.</p>
                <a href="https://www.youtube.com/@WPExpertsio/videos" target="_blank" rel="noopener" className="link">Watch On YouTube →</a>
              </div>
              <div className="help">
                <span className="help__ic help__ic--c" data-icon="headset"></span>
                <h3>Plugin Support</h3>
                <p>All products include full support: expert, personalized advice when you need it.</p>
                <a href="https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1" target="_blank" rel="noopener" className="link">Open A Ticket →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section section--alt" id="faq">
          <div className="container container--narrow">
            <div className="section__head">
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our WooCommerce plugins<br/> and the All Access bundle.</p>
            </div>
            <div className="faq" id="faqList"></div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="finalcta">
          <div className="container">
            <div className="finalcta__block">
              <h2>Get 40+ Sales-Boosting Plugins From Just <span className="grad--light">$399</span></h2>
              <p>Join the All Access Club and unlock every WooCommerce plugin we build. Start free, upgrade only when it&apos;s making you money.</p>
              <div className="finalcta__actions">
                <a href="https://store.wpexperts.io/" target="_blank" rel="noopener" className="btn btn--primary btn--lg"><BtnRoll>Join The Club</BtnRoll></a>
                <a href="https://store.wpexperts.io/" target="_blank" rel="noopener" className="btn btn--outline btn--lg"><BtnRoll>Browse All Plugins</BtnRoll></a>
              </div>
              <ul className="finalcta__ticks">
                <li><span data-icon="check"></span>14-day money-back</li>
                <li><span data-icon="check"></span>Instant access</li>
                <li><span data-icon="check"></span>Cancel anytime</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
