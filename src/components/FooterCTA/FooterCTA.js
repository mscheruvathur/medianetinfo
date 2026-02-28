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
          <i className="fa fa-commenting-o cta-icon" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
