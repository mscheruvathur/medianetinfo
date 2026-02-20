import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'Team', href: '/team' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

const branches = [
  { city: 'CALICUT', address: '1st Floor, Experience Center\nMavoor Road Signal Junction\nCalicut, 673004', phone: '+91 9745 222 256' },
  { city: 'MALAPPURAM', address: 'X/317G, Near KINFRA Park\nKakkancheri, Malappuram Dt.,\nKerala, PIN:673634', phone: '+91 9745 222 253' },
  { city: 'COCHIN', address: 'Near High Court,\nKombara Junction\nEranakulam, 682018', phone: '+91 9745 222 257' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Only enable scroll effect on home page
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Set initial state
      setScrolled(window.scrollY > 60);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true); // Always scrolled style on other pages
    }
  }, [location]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ──────── Top Bar ──────── */}
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="header-inner">
          <Link to="/" className="site-logo" aria-label="Medianet Info – Home">
            <img
              src="https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/logo.svg"
              alt="Medianet Info"
              className="logo-img"
            />
          </Link>
          <button
            id="navbar-toggle"
            className={`hamburger${open ? ' active' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="sidebar"
          >
            <div className="burger-bar-wrap">
              <div className="bar bar-1" />
              <div className="bar bar-2" />
              <div className="bar bar-3" />
            </div>
          </button>
        </div>
      </header>

      {/* ──────── Backdrop ──────── */}
      <div
        className={`sidebar-backdrop${open ? ' visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ──────── Sidebar ──────── */}
      <nav
        id="sidebar"
        className={`sidebar${open ? ' visible' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="main-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`nav-link${location.pathname === link.href || location.pathname === link.href + '/' ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar Footer */}
        <div className="menu-footer">

          {/* Social icons */}
          <div className="sm-icons">
            <a href="https://www.facebook.com/medianetadvertising/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://wa.me/919745222256?text=Hello+Medianet" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
            <a href="https://www.instagram.com/medianetadvertising/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UC1ByB7AVXg62gLrzhflsleA" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
            </a>
          </div>

          {/* Looking for a creative partner */}
          <div className="menu-footer-cta">
            <p>Looking for a creative partner?</p>
            <h5 className="pulse">
              <Link to="/contact" onClick={() => setOpen(false)}>Let's talk &rsaquo;</Link>
            </h5>
          </div>

          {/* Branch cities */}
          <div className="menu-footer-branches">
            {branches.map((b) => (
              <a key={b.city} href="#top" className="branch-city">{b.city}</a>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}
