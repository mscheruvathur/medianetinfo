import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const IMG = '/images/projects/';

export default function Projects() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div className="projects-inner">

        {/* ── Left: text ── */}
        <div className="projects-text">
          <h2 className="projects-heading">
            <span className="projects-our">Our</span>
            <span className="projects-blue">Projects</span>
          </h2>
          <div className="projects-divider" />
          <p className="projects-body">
            Promptness and accuracy in delivering quality service is our iconic
            history. Internationalism in the work culture and many esteemed
            clients are our bookmarks.
          </p>
          <Link to="/work" className={`btn-discover${inView ? ' btn-cta-active' : ''}`}>
            Discover More
            <i className="fa fa-long-arrow-right btn-discover-arrow" aria-hidden="true" />
          </Link>
        </div>

        {/* ── Right: 3-card bento grid ── */}
        <div id="works" className="works-grid">

          {/* Card 1 – large portrait: photo + REAL ESTATE pill + bold title */}
          <Link to="/work" className="work work--portrait">
            <div className="work-img-wrap">
              <img
                src={`${IMG}Our%20Projects_-03.jpg.jpeg`}
                alt="HiLite Olympus 2"
                loading="lazy"
              />
            </div>
            <div className="work-overlay work-overlay--bottom">
              <span className="work-pill">REAL ESTATE</span>
              <h3 className="work-title work-title--photo">HILITE OLYMPUS 2</h3>
            </div>
          </Link>

          {/* Right column – offset downward */}
          <div className="works-right">

            {/* Card 2 – photo, centered italic title + client pill */}
            <Link to="/work" className="work work--landscape">
              <div className="work-img-wrap">
                <img
                  src={`${IMG}Our%20Projects_-04.jpg.jpeg`}
                  alt="Honda BigWing"
                  loading="lazy"
                />
              </div>
              <div className="work-overlay work-overlay--center">
                <h3 className="work-title work-title--italic">BIG WING</h3>
                <span className="work-client-pill">HONDA</span>
              </div>
            </Link>

            {/* Card 3 – solid coral, decorative text layout */}
            <Link to="/work" className="work work--landscape work--color">
              <span className="work-tag">The Real Quality</span>
              <div className="work-color-body">
                <p className="work-subtitle-italic">Experience</p>
                <h3 className="work-title work-title--color">THE REAL QUALITY</h3>
                <span className="work-divider-line" />
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
