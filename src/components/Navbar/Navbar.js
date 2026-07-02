import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'Team', href: '/team' },
  { label: 'Work', href: '/work' },
  { label: 'Experience', href: '/experience' },
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
  const [hideOnFooter, setHideOnFooter] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location]);

  // Only enable scroll effect on home page
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const heroSection = document.getElementById('home-banner2');
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        setScrolled(window.scrollY >= heroHeight);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
      // Set initial state
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    } else {
      setScrolled(true); // Always scrolled style on other pages
    }
  }, [location]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Hide top navbar when footer is in view
  useEffect(() => {
    const footer = document.getElementById('wrapper-footer');
    if (!footer) {
      setHideOnFooter(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideOnFooter(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      {/* ──────── Top Bar ──────── */}
      <header className={`site-header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}${hideOnFooter ? ' footer-hidden' : ''}`} role="banner">
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
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="https://wa.me/919745222256?text=Hello+Medianet" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fa fa-whatsapp" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/medianetadvertising/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/channel/UC1ByB7AVXg62gLrzhflsleA" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fa fa-youtube-play" aria-hidden="true" />
            </a>
          </div>

          {/* Looking for a creative partner */}
          <div className="menu-footer-cta">
            <p>Looking for a creative partner?</p>
            <h5 className="pulse">
              <Link to="/contact" onClick={() => setOpen(false)}>Let's talk <i className="fa fa-commenting-o" aria-hidden="true" /></Link>
            </h5>
          </div>

          {/* Branch cities */}
          <div className="menu-footer-branches">
            {branches.map((b) => (
              <a key={b.city} href="contact" className="branch-city">{b.city}</a>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}
