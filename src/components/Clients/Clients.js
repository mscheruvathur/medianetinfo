import React from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

const BASE = 'https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/clients/';

/* Two rows of logos — each array is duplicated in JSX for seamless infinite loop */
const ROW1 = [
  { name: 'JCB',                src: `${BASE}jcb.png` },
  { name: 'myG',                src: `${BASE}myg.png` },
  { name: 'Cosmos Sports',      src: `${BASE}cosmos-sports.png` },
  { name: 'BeautyMark',         src: `${BASE}beautymark.png` },
  { name: 'Decathlon',          src: `${BASE}decathlon.png` },
  { name: 'Wonderla',           src: `${BASE}wonderla.png` },
  { name: 'Kenza TMT',          src: `${BASE}kenza.png` },
  { name: 'Impex',              src: `${BASE}impex.png` },
  { name: 'Francis Alukkas',    src: `${BASE}francis-alukkas.png` },
  { name: 'EVM Nissan',         src: `${BASE}evm-nissan.png` },
];

const ROW2 = [
  { name: 'Shobhika Weddings',  src: `${BASE}shobhika.png` },
  { name: 'Hyba Developers',    src: `${BASE}hyba.png` },
  { name: 'Parisons',           src: `${BASE}parisons.png` },
  { name: 'Memorice',           src: `${BASE}memorice.png` },
  { name: 'Palaxi Cinemas',     src: `${BASE}palaxi.png` },
  { name: 'BestWood',           src: `${BASE}bestwood.png` },
  { name: 'Harvest',            src: `${BASE}harvest.png` },
  { name: 'Landmark Maple',     src: `${BASE}landmark-maple.png` },
  { name: 'Yamaha',             src: `${BASE}yamaha.png` },
  { name: 'Natural',            src: `${BASE}natural.png` },
];

function LogoItem({ client }) {
  return (
    <div className="logo-item" title={client.name}>
      <img
        src={client.src}
        alt={client.name}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.setAttribute('data-name', client.name);
          e.currentTarget.parentElement.classList.add('logo-text-fallback');
        }}
      />
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients">
      {/* Heading */}
      <div className="clients-heading-wrap">
        <h1 className="clients-heading">
          Our <span className="clients-blue">Clients</span> are reputed and<br />
          multi-branched corporates.
        </h1>
      </div>

      {/* Row 1 — scroll left */}
      <div className="logo-track-wrap">
        <div className="logo-track logo-track--left">
          {[...ROW1, ...ROW1].map((c, i) => <LogoItem key={i} client={c} />)}
        </div>
      </div>

      {/* Row 2 — scroll right (reverse) */}
      <div className="logo-track-wrap">
        <div className="logo-track logo-track--right">
          {[...ROW2, ...ROW2].map((c, i) => <LogoItem key={i} client={c} />)}
        </div>
      </div>

      {/* CTA */}
      <div className="clients-cta">
        <Link to="/clients" className="btn-clients btn-pulse btn-rounded">
          More Clients
        </Link>
      </div>
    </section>
  );
}
