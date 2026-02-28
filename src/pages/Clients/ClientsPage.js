import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './ClientsPage.css';

const BASE = '/assets/';

const ALL_CLIENTS = [
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

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main id="clients-page">

        {/* Video section */}
        <section id="videos" className="clients-page-videos">
          <div className="clients-page-videos-inner">
            <iframe
              className="clients-page-video"
              src="https://www.youtube.com/embed/bSXrPgP_ayk?autoplay=1&mute=1&loop=1&playlist=bSXrPgP_ayk"
              title="Client Video 1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <iframe
              className="clients-page-video"
              src="https://www.youtube.com/embed/yvtTbOu08ZU?autoplay=1&mute=1&loop=1&playlist=yvtTbOu08ZU"
              title="Client Video 2"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <iframe
              className="clients-page-video"
              src="https://www.youtube.com/embed/bSXrPgP_ayk?autoplay=1&mute=1&loop=1&playlist=bSXrPgP_ayk"
              title="Client Video 3"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </section>


        {/* Hero heading */}
        <section className="clients-page-hero container">
          <h1 className="clients-page-heading">
            Our esteemed <span className="clients-page-blue">clients</span>
          </h1>
        </section>

        {/* Logo grid */}
        <div className="clients-page-grid container">
      
          {ALL_CLIENTS.map((client, i) => (
            <div key={`${client.name}-${i}`} className="clients-page-logo-card">
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.classList.add('logo-name-fallback');
                  e.currentTarget.parentElement.setAttribute('data-name', client.name);
                }}
              />
            </div>
          ))}
        </div>

        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
