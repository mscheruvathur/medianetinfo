import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import Footer from '../../components/Footer/Footer';
import '../Work/WorkPage.css';

const IMG = '/images/projects/';

const photos = [
  { name: 'boAt', img: `${IMG}Boat.jpg.jpeg`, shape: 'landscape' },
  { name: 'Desai Homes', img: `${IMG}Desaai%20Home.jpg.jpeg`, shape: 'square' },
  { name: 'Amend Dental', img: `${IMG}Amend.jpg.jpeg`, shape: 'landscape' },
  { name: 'Go Kite', img: `${IMG}Go%20kite%20_.jpg.jpeg`, shape: 'landscape' },
  { name: 'Simple Energy', img: `${IMG}simple.jpg.jpeg`, shape: 'landscape' },
];

// Rows sized like a justified photo gallery, same technique as the Work page.
const ROW_SIZES = [2, 3];
const rows = ROW_SIZES.reduce((acc, size) => {
  acc.rows.push(photos.slice(acc.cursor, acc.cursor + size));
  acc.cursor += size;
  return acc;
}, { rows: [], cursor: 0 }).rows;

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="work-page">

        {/* ── Experience Centre Collage ── */}
        <section className="work-collage-section">
          <div className="work-page-container">
            <div className="work-collage">
              {rows.map((row, i) => (
                <div className="work-collage-row" key={i}>
                  {row.map((p) => (
                    <div key={p.name} className={`collage-item shape-${p.shape}`}>
                      <img src={p.img} alt={p.name} loading="lazy" />
                      <div className="collage-overlay" aria-hidden="true">
                        <span className="collage-name">{p.name}</span>
                      </div>
                    </div>
                  ))}
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
