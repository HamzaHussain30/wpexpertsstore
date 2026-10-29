'use client';
import { useState } from 'react';
import { Ic } from './Ic';

const SUPPORT = 'https://objectsws.atlassian.net/servicedesk/customer/portal/1/group/1/create/1';
const links = [
  ['Plugins', '/products'],
  ['Solutions', '/case-studies'],
  ['Resources', '/blog'],
  ['Pricing', 'https://store.wpexperts.io/'],
  ['Support', SUPPORT],
];
const ext = (href) => (href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {});

export default function V3Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="v3-header">
      <div className="container v3-header__inner">
        <a href="/" className="v3-logo" aria-label="WPExperts home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/photos/Logo.svg" alt="WPExperts" width="127" height="28" />
        </a>

        <nav className="v3-nav" aria-label="Primary">
          {links.map(([label, href]) => <a key={label} href={href} {...ext(href)}>{label}</a>)}
        </nav>

        <div className="v3-header__actions">
          <a href="/products" className="v3-icon-btn" aria-label="Search plugins"><Ic name="search" size={20} /></a>
          <a href="https://store.wpexperts.io/my-account/" target="_blank" rel="noopener" className="v3-login">Login</a>
          <a href="/products" className="v3-btn v3-btn--navy">Browse Plugins</a>
        </div>

        <button className="v3-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="v3Mobile" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      <nav id="v3Mobile" className={`v3-mobile${open ? ' is-open' : ''}`} aria-label="Mobile" hidden={!open}>
        {links.map(([label, href]) => <a key={label} href={href} {...ext(href)} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="https://store.wpexperts.io/my-account/" target="_blank" rel="noopener" onClick={() => setOpen(false)}>Login</a>
        <a href="/products" className="v3-btn v3-btn--navy v3-btn--block">Browse Plugins</a>
      </nav>
    </header>
  );
}
