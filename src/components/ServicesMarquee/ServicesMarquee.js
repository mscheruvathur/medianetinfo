import React from 'react';
import './ServicesMarquee.css';

const SERVICES = [
  'Brand Promotion',
  'Event Management',
  'Hoarding',
  'Vehicle Advertisement',
  'Vehicle Branding',
  'Shop Branding',
  'Canopy Campaigns',
  'Radio Advertisement',
  'Print Media' 
];

// Double the list so the marquee loops seamlessly
const DOUBLED = [...SERVICES, ...SERVICES];

export default function ServicesMarquee() {
  return (
    <section id="services" aria-label="Our services">
      <div className="service-marquee">
        <div className="services" aria-hidden="true">
          {DOUBLED.map((name, i) => (
            <h1 key={i}>{name}</h1>
          ))}
        </div>
      </div>
    </section>
  );
}
