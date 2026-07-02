import React from 'react';
import { Link } from 'react-router-dom';
import './ExperienceCentre.css';

const IMG = '/images/projects/';

const photos = [
  { name: 'Desai Homes', img: `${IMG}Desaai%20Home.jpg.jpeg`, shape: 'square' },
  { name: 'boAt', img: `${IMG}Boat.jpg.jpeg`, shape: 'wide' },
  { name: 'Amend Dental', img: `${IMG}Amend.jpg.jpeg`, shape: 'small' },
  { name: 'Go Kite', img: `${IMG}Go%20kite%20_.jpg.jpeg`, shape: 'small' },
  { name: 'Simple Energy', img: `${IMG}simple.jpg.jpeg`, shape: 'small' },
];

export default function ExperienceCentre() {
  return (
    <section id="experience-centre-section">
      <div className="experience-inner">

        {/* ── Left: text ── */}
        <div className="experience-text">
          <h2 className="experience-heading">
            <span className="experience-blue">Experience</span>
            <span className="experience-dark">Centre</span>
          </h2>
          <div className="experience-divider" />
          <p className="experience-body">
            This novel concept, strategically placed in Calicut&apos;s highest-traffic
            zone, delivers an immersive experiential space for consumers to
            connect with the brand.
          </p>
          <Link to="/experience" className="btn-experience">Discover More</Link>
        </div>

        {/* ── Right: photo collage ── */}
        <div className="experience-collage">
          {photos.map((p) => (
            <div key={p.name} className={`experience-photo experience-photo--${p.shape}`}>
              <img src={p.img} alt={p.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
