import React from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

const BASE = '/assets/';

/* Two rows of logos — each array is duplicated in JSX for seamless infinite loop */
const ROW1 = [
  { name: 'Wonderla',      src: `${BASE}wonderla.svg` },
  { name: 'myG',           src: `${BASE}my-g.svg` },
  { name: 'Cosmos',        src: `${BASE}cosmos.svg` },
  { name: 'Beauty Mark',   src: `${BASE}beauty-mark.svg` },
  { name: 'Decathlon',     src: `${BASE}decathlon.svg` },
  { name: 'Kenza',         src: `${BASE}kenza.svg` },
  { name: 'Impex',         src: `${BASE}impex.svg` },
  { name: 'Landmark',      src: `${BASE}landmark.svg` },
  { name: 'Vstar',         src: `${BASE}vstar.svg` },
  { name: 'Salpido',       src: `${BASE}salpido.svg` },
  { name: 'Double Horse',  src: `${BASE}double-horse.svg` },
  { name: 'Galaxy',        src: `${BASE}galaxy.svg` },
  { name: 'Eham Digital',  src: `${BASE}eham-digital.svg` },
  { name: 'Hilite',        src: `${BASE}hilite.svg` },
  { name: 'Multi Wood',    src: `${BASE}multi-wood.svg` },
];

const ROW2 = [
  { name: 'myG',           src: `${BASE}francis-alukkas.svg` },
  { name: 'Cosmos',        src: `${BASE}myop.svg` },
  { name: 'Beauty Mark',   src: `${BASE}north-republic.svg` },
  { name: 'Beauty Mark',   src: `${BASE}elance.svg` },
  { name: 'Kenza',         src: `${BASE}meralda.svg` },
  { name: 'Impex',         src: `${BASE}shobhika.svg` },
  { name: 'Landmark',      src: `${BASE}hyba.svg` },
  { name: 'Vstar',         src: `${BASE}parisons.svg` },
  { name: 'Salpido',       src: `${BASE}memorice.svg` },
  { name: 'Double Horse',  src: `${BASE}palaxi.svg` },
  { name: 'Wonderla',      src: `${BASE}bestwood.svg` },
  { name: 'Galaxy',        src: `${BASE}harvest.svg` },
  { name: 'Eham Digital',  src: `${BASE}theshap.svg` },
  { name: 'Hilite',        src: `${BASE}kanamkandi.svg` },
  { name: 'Multi Wood',    src: `${BASE}kite.svg` },
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
