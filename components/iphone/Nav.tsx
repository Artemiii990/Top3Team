'use client';

import { useEffect, useState, useRef } from 'react';
import s from './Nav.module.css';
import MegaMenu from './MegaMenu';
import SearchPanel from './SearchPanel';
import Link from 'next/link';

const LINKS = [
  { label: 'Store', href: '/' },
  { label: 'Mac', href: '/mac' },
  { label: 'iPad', href: '/ipad' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Watch', href: '/watch' },
  { label: 'AirPods', href: '/airpods' },
  { label: 'TV', href: '/tv' },
  { label: 'Сервіси', href: '/services' },
  { label: 'Підтримка', href: '/support' },
  { label: 'Де купити', href: '/buy' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const searchCloseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Auto-close if the viewport grows back to desktop width.
  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 901px)').matches) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    // A product menu and the search panel are mutually exclusive —
    // hovering a nav link while search is open should swap straight over.
    setSearchOpen(false);
    setActiveMenu(label);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleSearch = () => {
    if (searchCloseTimeout.current) {
      clearTimeout(searchCloseTimeout.current);
    }
    setActiveMenu(null);
    setSearchOpen(o => !o);
  };

  const closeSearch = () => {
    searchCloseTimeout.current = setTimeout(() => {
      setSearchOpen(false);
    }, 200);
  };

  const keepSearchOpen = () => {
    if (searchCloseTimeout.current) {
      clearTimeout(searchCloseTimeout.current);
    }
  };

  return (
    <header className={s.headerContainer}>
      {/* TOP BANNER - світло-сірий напис над навігацією */}
      <div className={s.topBanner}>
        Продукти, послуги та функції операційних систем можуть бути недоступними в цій країні.
      </div>

    {/* NAV */}
    <nav className={s.nav} data-open={open} aria-label="Apple">
      {/* LOGO */}
      <Link href="/" className={s.logo} aria-label="Apple">
        <svg
          viewBox="0 0 14 44"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M13.0729 17.6825A3.61 3.61 0 0 0 11.3 20.7235c.0331 2.5022 2.2092 3.4338 2.2999 3.4641-.0376.107-.3641 1.1777-1.1656 2.2898-.7008.9683-1.4275 1.9376-2.5755 1.9579-1.1389.0224-1.5023-.6705-2.7935-.6705-1.2902 0-1.6868.6481-2.7644.6929-1.1117.0418-1.9477-1.0454-2.6557-2.0102C.5067 24.5096-.6045 20.8911.7986 18.4452c.7038-1.2231 1.9619-1.9954 3.3266-2.0177 1.0884-.0223 2.1209.7345 2.7905.7345.6695 0 1.9229-.9089 3.2418-.7763.5527.0227 2.1015.2237 3.0992 1.6856-.0816.0508-1.8531 1.0848-1.838 3.2113" />
          <path
            transform="translate(0 1.8)"
            d="M9.9301 13.4151c.5921-.7166 1.0014-1.7184.8856-2.7167-.8536.0359-1.9009.5703-2.5187 1.2814-.5491.6324-1.0455 1.6539-.9148 2.6308.9536.0703 1.9268-.4707 2.5479-1.1955"
          />
        </svg>
      </Link>

      {/* LINKS */}
      <div id="mobile-nav-links" className={s.links}>
        {LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onMouseEnter={() => {
              if (window.innerWidth > 900) {
                openMenu(label);
              }
            }}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* ICONS */}
      <a
        href="#"
        className={`${s.icon} ${s.search}`}
        aria-label="Search"
        aria-expanded={searchOpen}
        onClick={e => {
          e.preventDefault();
          toggleSearch();
        }}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" style={{ fill: 'none' }} />
          <line x1="15.5" y1="15.5" x2="20" y2="20" style={{ fill: 'none' }} />
        </svg>
      </a>
      <a href="#" className={s.icon} aria-label="Shopping Bag">
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M14.91 4.39H12.4A3.41 3.41 0 0 0 9 1a3.41 3.41 0 0 0-3.4 3.39H3.09a.5.5 0 0 0-.5.5v11.41a.7.7 0 0 0 .7.7h11.41a.7.7 0 0 0 .7-.7V4.89a.5.5 0 0 0-.49-.5zM9 2a2.41 2.41 0 0 1 2.4 2.39H6.6A2.41 2.41 0 0 1 9 2zm5.41 14H3.59V5.39H5.6v1.49a.5.5 0 0 0 1 0V5.39h4.8v1.49a.5.5 0 0 0 1 0V5.39h2.01z" />
        </svg>
      </a>

      {/* HAMBURGER */}
      <button
        className={s.hamburger}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-links"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>
    </nav>

    <MegaMenu
      activeMenu={activeMenu}
      onClose={closeMenu}
      onKeepOpen={() => {
        if (closeTimeout.current) {
          clearTimeout(closeTimeout.current);
        }
      }}
    />

    <SearchPanel
      open={searchOpen}
      onClose={closeSearch}
      onKeepOpen={keepSearchOpen}
    />
    </header>
  );
}