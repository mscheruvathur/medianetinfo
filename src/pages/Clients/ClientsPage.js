import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './ClientsPage.css';

const BASE = 'https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/clients/';

const ALL_CLIENTS = [
  { name: 'JCB',               src: `${BASE}jcb.png` },
  { name: 'myG',               src: `${BASE}myg.png` },
  { name: 'Cosmos Sports',     src: `${BASE}cosmos-sports.png` },
  { name: 'BeautyMark',        src: `${BASE}beautymark.png` },
  { name: 'Decathlon',         src: `${BASE}decathlon.png` },
  { name: 'Wonderla',          src: `${BASE}wonderla.png` },
  { name: 'Kenza TMT',         src: `${BASE}kenza.png` },
  { name: 'Impex',             src: `${BASE}impex.png` },
  { name: 'Francis Alukkas',   src: `${BASE}francis-alukkas.png` },
  { name: 'EVM Nissan',        src: `${BASE}evm-nissan.png` },
  { name: 'Shobhika Weddings', src: `${BASE}shobhika.png` },
  { name: 'Hyba Developers',   src: `${BASE}hyba.png` },
  { name: 'Parisons',          src: `${BASE}parisons.png` },
  { name: 'Memorice',          src: `${BASE}memorice.png` },
  { name: 'Palaxi Cinemas',    src: `${BASE}palaxi.png` },
  { name: 'BestWood',          src: `${BASE}bestwood.png` },
  { name: 'Harvest',           src: `${BASE}harvest.png` },
  { name: 'Landmark Maple',    src: `${BASE}landmark-maple.png` },
  { name: 'Yamaha',            src: `${BASE}yamaha.png` },
  { name: 'Natural',           src: `${BASE}natural.png` },
];

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main id="clients-page">

        {/* Video section */}
        <section className="clients-page-videos">
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
              src="https://www.youtube.com/embed/bSXrPgP_ayk?autoplay=1&mute=1&loop=1&playlist=bSXrPgP_ayk"
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


        {/* Hero heading with subtitle */}
        <div className="clients-page-hero">
          <h1 className="clients-page-heading">
            Our esteemed <span className="clients-page-blue">clients</span>
          </h1>
          <p className="clients-page-subtitle">
            We are proud to have worked with these amazing brands and organizations.
          </p>
        </div>

        {/* Animated Logo grid */}
        <div className="clients-page-grid container">
          {ALL_CLIENTS.map((client, i) => (
            <div key={client.name} className="clients-page-logo-card" style={{ animationDelay: `${0.05 * i + 0.1}s` }}>
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
