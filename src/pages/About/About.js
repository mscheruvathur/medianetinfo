import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './About.css';

// const CDN = 'https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/about/';
const CDN = '/images/about/';

const testimonials = [
  {
    quote:
      'An advertiser should be a megafone of a business. Medianet is very punctual and reliable in this arena.',
    name: 'Shahad Moideen',
    role: 'Managing Director',
    company: 'Kenza Group',
    companyUrl: 'https://www.kenzatmt.com',
  },
  {
    quote:
      'Advertisement is really bridging between the prospects and the enterpreneur. Medianet is very loyal in this regard.',
    name: 'Aswin',
    role: 'Managing Director',
    company: 'North Republic',
    companyUrl: 'https://www.northrepublic.com/',
  },
  {
    quote:
      'Timeliness in completion of tasks is the key element of business. Medianet is intime. Trustworthiness reduces lot many headaches. Medianet is an ad partner that we can rely on.',
    name: 'Shuhaib',
    role: 'Managing Director',
    company: 'M Lounge',
    companyUrl: 'https://www.mlounge.com/',
  },
  {
    quote:
      'We trust Medianet on our ads for a decade, because they differ in responsibility, dealing and reliability.',
    name: 'Sharafudheen',
    role: 'Managing Director',
    company: 'Theyyampattil Group',
    companyUrl: 'http://www.theyyampattil.com/',
  },
  {
    quote:
      'Kenza TMT is grateful to Medianet as they sincerely render their prompt service to find us our position in the industry. It is all about responsibility, dealing and reliability.',
    name: 'Abdul Rasheed',
    role: 'Managing Director',
    company: 'Mubarack Jewellery',
    companyUrl: 'http://www.mubarackjewellery.com/',
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="about-carousel">
      <div className="about-carousel-stack">
        {testimonials.map((t, i) => (
          <div
            className={`about-carousel-slide${i === current ? ' active' : ''}`}
            key={i}
            aria-hidden={i !== current}
          >
            <p className="about-testimonial-quote">"{t.quote}"</p>
            <div className="about-testimonial-info">
              <h5 className="about-testimonial-name">{t.name}</h5>
              <p className="about-testimonial-role">
                {t.role} |{' '}
                <a href={t.companyUrl} target="_blank" rel="noreferrer" className="about-testimonial-link">
                  {t.company}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="about-carousel-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`about-carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <main id="about-page">

        {/* ── WE ARE ── */}
        <section className="about-we-are">
          <div className="about-container">
            <div className="about-we-are-grid">
              {/* Left: text */}
              <div className="about-we-are-text">
                <h1 className="about-we-are-heading">
                  We are <span className="about-blue">Medianet</span>
                </h1>
                <p className="about-para">
                  Medianet advertising and managing is a registered organisation situated at
                  Kerala. We are dealing with business of advertising, promotion and related
                  events management.
                </p>
                <p className="about-para">
                  We did well masted the flag of our humble beginnings in this industry in the
                  year 2010 imprinting our foot prints in this arena. All the past years were
                  the stepping stones to success with the ardent support from our esteemed
                  clients.
                </p>
                <p className="about-para">
                  We are extending our whole hearted gratitude to all our beloved customers,
                  who offered their helping hands to assist us, turn the stepping stones to
                  milestones within this short span of time. Advertisement and promotion has a
                  great significance in the modern day business of cut-throat competition as
                  advertisement is the key element in the business mix, as a famous saying
                  advertisement is the secret of the business success.
                </p>
                <p className="about-para">
                  The personality of a business is most often what others saying about, rather
                  than what we built up. Doing the correct advertisements in correct time we
                  make others say what our clients intended to. We are doing various types of
                  Modern advertisements like Hoardings, Brochures and Pamphlets, Graphic
                  works, Road shows, Events like Inaugurations, Canopy campaigns, Branding,
                  exhibitions…etc.
                </p>
              </div>

              {/* Right: 15-years badge */}
              <div className="about-we-are-visual">
                <img
                  src={`${CDN}16-yrs-of-delight.png`}
                  alt="15 years of delight"
                  className="about-badge-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE + TWO GUYS ── */}
        <section className="about-quote-section">
          <div className="about-container">
            <div className="about-quote-row">
              <p className="about-big-quote">
                "Our dedicated team with an inner fire will make wonders happen in business.
                Past 15 years were of such a miraculous track record that we turned many
                worries to smiles."
              </p>
              <div className="about-two-guys-wrap">
                <img
                  src={`${CDN}two-guys.png`}
                  alt="Medianet team"
                  className="about-two-guys-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── TWO VIDEOS ── */}
        <section className="about-videos">
          <div className="about-container">
            <div className="about-videos-grid">
              <div className="about-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/tRibZ7bk5Qc?autoplay=1&mute=1&loop=1&playlist=tRibZ7bk5Qc"
                  title="Medianet video 1"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="about-video-iframe"
                />
              </div>
              <div className="about-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/qQW2gIYavBo?autoplay=1&mute=1&loop=1&playlist=qQW2gIYavBo"
                  title="Medianet video 2"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="about-video-iframe"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="about-testimonials">
          <div className="about-container">
            <div className="about-testimonials-grid">
              {/* Left: heading */}
              <div className="about-testimonials-header">
                <h2 className="about-testimonials-heading">
                  Our clients <br />
                  <span className="about-blue">are saying</span>
                </h2>
              </div>
              {/* Right: carousel */}
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
