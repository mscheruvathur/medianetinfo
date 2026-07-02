import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'SHUHAIB',
    title: 'Managing Director',
    company: 'M Lounge',
    companyUrl: 'https://www.mlounge.com/',
    quote:
      'Timeliness in completion of tasks is the key element of business Medianet is intime. Trustworthiness reduces lot many headaches Medianet is an ad partner that we can rely on',
  },
  {
    name: 'SHARAFUDHEEN',
    title: 'Managing Director',
    company: 'Theyyampattil Group',
    companyUrl: 'http://www.theyyampattil.com/',
    quote:
      'We trust Medianet on our ads for a decade ,becauze they differs in responsibility, dealing and reliability.',
  },
  {
    name: 'ABDUL RASHEED',
    title: 'Managing Director',
    company: 'Mubarack Jewellery',
    companyUrl: 'http://www.mubarackjewellery.com/',
    quote:
      'Kenza TMT is gratefull to Medianet as they sincierely rendering their prompt service to find us our position in the industry. Matter is of responsibility,dealing and reliability all about.',
  },
  {
    name: 'SHAHAD MOIDEEN',
    title: 'Managing Director',
    company: 'Kenza Group',
    companyUrl: 'https://www.kenzatmt.com/',
    quote:
      'An advertiser should be a megafone of a business.Medianet is very punctual and reliable in this arena.',
  },
  {
    name: 'ASWIN',
    title: 'Managing Director',
    company: 'North Republic',
    companyUrl: 'https://www.northrepublic.com/',
    quote:
      'Advertisement is really bridging between the prospects and the enterpreneur.Medianet is very loyal in this regard.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonials-inner">

          {/* Left: heading */}
          <div className="testimonials-left">
            <h2 className="testimonials-heading">
              Our clients<br />
              <span className="testi-blue">are saying</span>
            </h2>
          </div>

          {/* Right: carousel */}
          <div className="testimonials-right">
            <div className="testi-carousel">
              <div className="testi-carousel-stack">
                {testimonials.map((t, i) => (
                  <div
                    className={`testi-slide${i === current ? ' active' : ''}`}
                    key={i}
                    aria-hidden={i !== current}
                  >
                    <p className="testi-quote">"{t.quote}"</p>
                    <div className="customer-info">
                      <h5 className="customer-name">{t.name}</h5>
                      <p className="customer-role">
                        {t.title} |{' '}
                        <a href={t.companyUrl} target="_blank" rel="noopener noreferrer">
                          {t.company}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="testi-dots" role="tablist" aria-label="Choose testimonial">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    className={`testi-dot${i === current ? ' active' : ''}`}
                    onClick={() => setCurrent(i)}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Testimonial from ${t.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
