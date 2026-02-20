import React, { useState, useEffect } from 'react';
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
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (index) => {
    if (index === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 300);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setFading(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[active];

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

          {/* Right: quote card */}
          <div className="testimonials-right">
            <div className={`testimonial-card${fading ? ' fading' : ''}`}>
              <span className="quote-open">&#x201C;</span>
              <p className="quote-text">{current.quote}</p>
              <span className="quote-close">&#x201D;</span>
              <div className="customer-info">
                <h5 className="customer-name">{current.name}</h5>
                <p className="customer-role">
                  {current.title} |{' '}
                  <a href={current.companyUrl} target="_blank" rel="noopener noreferrer">
                    {current.company}
                  </a>
                </p>
              </div>
              <div className="testi-dots" role="tablist" aria-label="Choose testimonial">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    className={`testi-dot${i === active ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                    role="tab"
                    aria-selected={i === active}
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
