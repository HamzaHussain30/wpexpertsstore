import { Ic } from './Ic';

// Hero product scene, drawn in HTML/CSS (not a bitmap) so every label stays sharp.
// All sizes are in em; the stage font-size is 2.5cqw, so the whole scene scales with its column.
export default function HeroArt() {
  return (
    <div className="v3-art" aria-hidden="true">
      <div className="v3-art__stage">
        <span className="v3-art__grid" />
        <span className="v3-art__glow" />

        <svg className="v3-art__lines" viewBox="0 0 40 35" fill="none">
          <path d="M2.6 4.6 C2.6 12 6.2 14 6.4 20" />
          <path d="M32.5 17.6 C34 15 36 14.6 37.4 14.2" />
          <path d="M12.3 26 C16 31 22 30.5 25.3 23" />
          <circle cx="2.6" cy="4.6" r=".32" /><circle cx="6.4" cy="20" r=".32" /><circle cx="32.5" cy="17.6" r=".32" />
          <circle cx="37.4" cy="14.2" r=".32" /><circle cx="12.3" cy="26" r=".32" /><circle cx="25.3" cy="23" r=".32" />
        </svg>

        <div className="v3-float v3-float--a">
          <div className="v3-dash">
            <aside className="v3-dash__side">
              <span className="v3-dash__logo">W</span>
              <i className="is-on" /><i /><i /><i /><i />
            </aside>
            <div className="v3-dash__main">
              <div className="v3-dash__top"><b>WooCommerce Analytics</b><span>Last 30 days</span></div>
              <div className="v3-dash__stats">
                <div><small>Total Revenue</small><b>$24,620</b><em>+106%</em></div>
                <div><small>Orders</small><b>640</b><em>+98%</em></div>
                <div><small>Customers</small><b>186</b><em>+72%</em></div>
              </div>
              <div className="v3-dash__chart">
                <small>Revenue Overview</small>
                <svg viewBox="0 0 200 64" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="v3area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#168AE2" stopOpacity=".35" /><stop offset="1" stopColor="#168AE2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g stroke="#E6ECF5" strokeWidth=".6">
                    <path d="M0 8H200M0 24H200M0 40H200M0 56H200" />
                  </g>
                  <path d="M0 52 C18 48 28 40 46 42 S76 30 96 31 S128 18 148 20 S182 9 200 5 V64 H0Z" fill="url(#v3area)" />
                  <path d="M0 52 C18 48 28 40 46 42 S76 30 96 31 S128 18 148 20 S182 9 200 5" stroke="#168AE2" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  <circle cx="148" cy="20" r="2.4" fill="#fff" stroke="#168AE2" strokeWidth="1.4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="v3-float v3-float--b">
          <div className="v3-cur">
            <b><Ic name="globe" size={14} stroke={2} /> Currency</b>
            <ul>
              <li><span>USD</span>$</li>
              <li className="is-on"><span>EUR</span>€</li>
              <li><span>GBP</span>£</li>
              <li><span>AED</span>د.إ</li>
            </ul>
          </div>
        </div>

        <div className="v3-float v3-float--c">
          <div className="v3-don">
            <b><Ic name="heart" size={14} stroke={2} /> Support our cause</b>
            <div className="v3-don__amts"><span>$10</span><span className="is-on">$25</span><span>$50</span><span>Custom</span></div>
            <div className="v3-don__tog"><i /> Monthly donation</div>
            <div className="v3-don__btn">Donate $25</div>
          </div>
        </div>

        <span className="v3-chip v3-chip--1"><Ic name="cart" size={18} /></span>
        <span className="v3-chip v3-chip--2"><Ic name="tag" size={18} /></span>
        <span className="v3-chip v3-chip--3"><Ic name="box" size={18} /></span>
      </div>
    </div>
  );
}
