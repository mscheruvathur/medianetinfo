import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExperienceCentre.css';

const IMG = '/images/experience/';

const photos = [
  { name: 'Experience Centre — view 1', img: `${IMG}exp-cover-02.jpg.jpeg` },
  { name: 'Experience Centre — view 2', img: `${IMG}exp-cover-03.jpg.jpeg` },
  { name: 'Experience Centre — view 3', img: `${IMG}exp-cover-04.jpg.jpeg` },
];

const SLIDE_INTERVAL = 2200;

export default function ExperienceCentre() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

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

  // Auto-advance the carousel; pauses whenever `paused` is true (hover) or the section is off-screen
  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % photos.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, inView]);

  return (
    <section id="experience-centre-section" ref={sectionRef}>
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
          <Link to="/experience" className={`btn-experience${inView ? ' btn-cta-active' : ''}`}>
            Discover More
            <i className="fa fa-long-arrow-right btn-experience-arrow" aria-hidden="true" />
          </Link>
        </div>

        {/* ── Right: image carousel ── */}
        <div
          className="experience-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Experience Centre gallery"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="experience-carousel-viewport">
            <div
              className="experience-slides-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {photos.map((p, i) => (
                <div
                  className="experience-slide"
                  key={p.name}
                  aria-hidden={i !== activeSlide}
                >
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="experience-dots" role="tablist" aria-label="Slide navigation">
            {photos.map((p, i) => (
              <button
                key={p.name}
                type="button"
                role="tab"
                className={`experience-dot${i === activeSlide ? ' active' : ''}`}
                aria-selected={i === activeSlide}
                aria-label={`Show slide ${i + 1} of ${photos.length}`}
                onClick={() => setActiveSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
