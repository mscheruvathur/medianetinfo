import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCTA.css';

export default function FooterCTA() {
  return (
    <section id="footer-cta" aria-label="Call to action">
      <div className="footer-cta-inner">
        <span className="cta-text">Looking for a creative partner?</span>
        <Link
          to="/contact"
          className="cta-link"
          aria-label="Let's talk — contact Medianet"
        >
          Let's talk
          {/* Chat bubble icon */}
          <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <circle cx="9" cy="10" r="0.5" fill="currentColor"/>
            <circle cx="12" cy="10" r="0.5" fill="currentColor"/>
            <circle cx="15" cy="10" r="0.5" fill="currentColor"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
