import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './FooterCTA.css';

export default function FooterCTA() {
  const linkRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="footer-cta" aria-label="Call to action">
      <div className="footer-cta-inner">
        <span className="cta-text">Looking for a creative partner?</span>
        <Link
          ref={linkRef}
          to="/contact"
          className={`cta-link${inView ? ' cta-zoom' : ''}`}
          aria-label="Let's talk — contact Medianet"
        >
          Let's talk
          <i className="fa fa-commenting-o cta-icon" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
