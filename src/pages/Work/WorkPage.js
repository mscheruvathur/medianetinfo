import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import Footer from '../../components/Footer/Footer';
import './WorkPage.css';

const IMG = '/images/projects/';

// Every work item below uses a distinct source file — no image is reused.
const works = [
  {
    name: 'JCB',
    img: IMG + 'Decathlon.jpg.jpeg',
    href: 'https://medianetinfo.com/work/jcb/',
    shape: 'landscape',
  },
  {
    name: 'Francis Alukkas',
    img: IMG + 'kenza_.jpg.jpeg',
    href: 'https://medianetinfo.com/work/francis-alukkas/',
    shape: 'portrait',
  },
  {
    name: 'M Lounge',
    img: IMG + 'Adani_.jpg.jpeg',
    href: 'https://medianetinfo.com/work/mlounge/',
    shape: 'square',
  },
  {
    name: 'EVM Nissan',
    img: IMG + 'Honda.jpg.jpeg',
    href: 'https://medianetinfo.com/work/evm-nissan/',
    shape: 'landscape',
  },
  {
    name: 'Landmark Maple',
    img: IMG + 'Elance.jpg.jpeg',
    href: 'https://medianetinfo.com/work/landmark-maple/',
    shape: 'square',
  },
  {
    name: 'Yamaha',
    img: IMG + 'Impex.jpg.jpeg',
    href: 'https://medianetinfo.com/work/yamaha/',
    shape: 'landscape',
  },
  {
    name: 'Natural',
    img: IMG + 'Salpido_.jpg.jpeg',
    href: 'https://medianetinfo.com/work/natural/',
    shape: 'portrait',
  },
  {
    name: 'Lamit',
    img: IMG + 'Hilite_.jpg.jpeg',
    href: 'https://medianetinfo.com/work/lamit/',
    shape: 'landscape',
  },
  {
    name: 'Mesmera',
    img: IMG + 'indel%20suzuki.jpg.jpeg',
    href: 'https://medianetinfo.com/work/mesmera/',
    shape: 'square',
  },
  {
    name: 'Mend',
    img: IMG + 'Myg.jpg.jpeg',
    href: 'https://medianetinfo.com/work/mend/',
    shape: 'landscape',
  },
];

// Rows sized like a justified photo gallery — 4 / 3 / 3 across three rows.
const ROW_SIZES = [4, 3, 3];
const rows = ROW_SIZES.reduce((acc, size) => {
  acc.rows.push(works.slice(acc.cursor, acc.cursor + size));
  acc.cursor += size;
  return acc;
}, { rows: [], cursor: 0 }).rows;

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="work-page">

        {/* ── Work Collage ── */}
        <section className="work-collage-section">
          <div className="work-page-container">
            <div className="work-collage">
              {rows.map((row, i) => (
                <div className="work-collage-row" key={i}>
                  {row.map((w) => (
                    <a
                      key={w.name}
                      href={w.href}
                      className={`collage-item shape-${w.shape}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View project: ${w.name}`}
                    >
                      <img src={w.img} alt={w.name} loading="lazy" />
                      <div className="collage-overlay" aria-hidden="true">
                        <span className="collage-name">{w.name}</span>
                        <span className="collage-view">View Project</span>
                      </div>
                    </a>
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
