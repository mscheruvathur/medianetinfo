import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects-section">
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
          <Link to="/work" className="btn-discover">Discover More</Link>
        </div>

        {/* ── Right: 3-card bento grid ── */}
        <div id="works" className="works-grid">

          {/* Card 1 – large portrait: photo + WEDDING pill + bold title */}
          <a
            href="https://medianetinfo.com/work/mesmera/"
            className="work work--portrait"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="work-img-wrap">
              <img
                src="https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/home/projects/project-2.png"
                alt="Mesmera"
                loading="lazy"
              />
            </div>
            <div className="work-overlay work-overlay--bottom">
              <span className="work-pill">WEDDING</span>
              <h3 className="work-title work-title--photo">DESIGN YOUR DREAMS</h3>
            </div>
          </a>

          {/* Right column – offset downward */}
          <div className="works-right">

            {/* Card 2 – dark blue photo, centered italic title + client pill */}
            <a
              href="https://medianetinfo.com/work/mlounge/"
              className="work work--landscape"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="work-img-wrap">
                <img
                  src="https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/home/projects/project-1.png"
                  alt="M Lounge"
                  loading="lazy"
                />
              </div>
              <div className="work-overlay work-overlay--center">
                <h3 className="work-title work-title--italic">EVOLVE</h3>
                <span className="work-client-pill">M LOUNGE</span>
              </div>
            </a>

            {/* Card 3 – solid coral, decorative text layout */}
            <a
              href="https://medianetinfo.com/work/"
              className="work work--landscape work--color"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="work-tag">The Real Quality</span>
              <div className="work-color-body">
                <p className="work-subtitle-italic">Experience</p>
                <h3 className="work-title work-title--color">THE REAL QUALITY</h3>
                <span className="work-divider-line" />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
