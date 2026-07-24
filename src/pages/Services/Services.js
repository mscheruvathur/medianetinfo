import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './Services.css';
import '../Work/WorkPage.css';

const IMG = 'https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/services/';

const services = [
  {
    id: 1,
    heading: ['Brand', 'Promotion'],
    body: 'Simplifying the herculean task of brand building up a post modern and cost effective way.',
  },
  {
    id: 2,
    heading: ['Event', 'Management'],
    body: 'Photo finish to the lovely events to make them ever memorable bookmarks with a professional perfection.',
  },
  {
    id: 3,
    heading: ['Hoarding'],
    body: 'Hoarding and sign boards at anywhere at customer preferences, that provides a different attire for the establishments.',
  },
  {
    id: 4,
    heading: ['Vehicle', 'Advertisement'],
    body: 'Simplifying the herculean task of brand building up a post modern and cost effective way.',
  },
  {
    id: 5,
    heading: ['Vehicle', 'Branding'],
    body: 'Modern way of taking the prototype of the brand to the public on moving vehicles.',
  },
  {
    id: 6,
    heading: ['Shop', 'Branding'],
    body: 'Branding in a shop area with advertisements in a professional way of eye catch.',
  },
  {
    id: 7,
    heading: ['Canopy', 'Campaigns'],
    body: 'Simplifying the herculean task of brand building up a post modern and cost effective way.',
  },
  {
    id: 8,
    heading: ['Radio', 'Advertisement'],
    body: 'The most effective media that carry the information to the common folk with mass reach.',
  },
  {
    id: 9,
    heading: ['Print', 'Media'],
    body: 'Simplifying the herculean task of brand building up a post modern and cost effective way.',
  }
];

const marqueeNames = [
  // 'Brand Promotion',
  'Digital screen',
  'Experience centre',
  'Pole kiosk',
  'Event Management',
  'Hoarding',
  // 'Vehicle Advertisement',
  'Vehicle Branding',
  'Shop Branding',
  // 'Canopy Campaigns',
  'Radio Advertisements',
  'Print Media',
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main id="services-page">

        {/* HEADER */}
        <section className="srv-header">
          <div className="srv-container">
            <h1 className="srv-main-title">
              Areas of <span className="srv-blue">expertise</span>
            </h1>
            <p className="srv-main-subtitle">
              Any advertising is essentially the communication that aesthetically puts forth
              clear-cut messages that the people should definitely come across And Medianet is
              versatile in performing it across different platforms we correctly doing the
              various types of modern advertisements.
            </p>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="srv-marquee-wrap" aria-hidden="true">
          <div className="srv-marquee-track">
            {[...marqueeNames, ...marqueeNames].map((name, i) => (
              <span key={i} className="srv-marquee-item">
                {name} <span className="srv-marquee-dot"></span>
              </span>
            ))}
          </div>
        </div>

        {/* SERVICES GRID — same card design/layout as the Experience & Work pages */}
        <section className="work-collage-section">
          <div className="work-page-container">
            <div className="work-collage">
              {services.map((s) => (
                <div className="collage-item" key={s.id}>
                  <div className="collage-media">
                    <img
                      src={`${IMG}${s.id}.png`}
                      alt={s.heading.join(' ')}
                      loading="lazy"
                    />
                  </div>
                  <div className="collage-body">
                    <h3 className="collage-name">{s.heading.join(' ')}</h3>
                    <p className="collage-desc">{s.body}</p>
                    <Link to="/contact" className="collage-view">
                      Get Quote
                      <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
