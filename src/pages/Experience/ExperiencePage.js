import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import Footer from '../../components/Footer/Footer';
import '../Work/WorkPage.css';

const IMG = '/images/projects/';

const photos = [
  { name: 'boAt', img: `${IMG}Boat.jpg.jpeg` },
  { name: 'Desai Homes', img: `${IMG}Desaai%20Home.jpg.jpeg` },
  { name: 'Amend Dental', img: `${IMG}Amend.jpg.jpeg` },
  { name: 'Go Kite', img: `${IMG}Go%20kite%20_.jpg.jpeg` },
  { name: 'Simple Energy', img: `${IMG}simple.jpg.jpeg` },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="work-page">

        {/* ── Experience Centre Grid ── */}
        <section className="work-collage-section">
          <div className="work-page-container">
            <div className="work-collage">
              {photos.map((p) => (
                <div key={p.name} className="collage-item">
                  <div className="collage-media">
                    <img src={p.img} alt={p.name} loading="lazy" />
                  </div>
                  <div className="collage-body">
                    <h3 className="collage-name">{p.name}</h3>
                    <p className="collage-desc">Featured on display at the Medianet Experience Centre.</p>
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
