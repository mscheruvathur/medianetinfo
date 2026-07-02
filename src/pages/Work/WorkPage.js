import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import Footer from '../../components/Footer/Footer';
import './WorkPage.css';

const CDN = 'https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/home/projects/';

const works = [
  {
    name: 'JCB',
    img: CDN + 'project-2.png',
    href: 'https://medianetinfo.com/work/jcb/',
    shape: 'landscape',
  },
  {
    name: 'Francis Alukkas',
    img: CDN + 'project-2.png',
    href: 'https://medianetinfo.com/work/francis-alukkas/',
    shape: 'portrait',
  },
  {
    name: 'M Lounge',
    img: CDN + 'project-1.png',
    href: 'https://medianetinfo.com/work/mlounge/',
    shape: 'square',
  },
  {
    name: 'EVM Nissan',
    img: CDN + 'project-4.png',
    href: 'https://medianetinfo.com/work/evm-nissan/',
    shape: 'landscape',
  },
  {
    name: 'Landmark Maple',
    img: CDN + 'project-3.png',
    href: 'https://medianetinfo.com/work/landmark-maple/',
    shape: 'square',
  },
  {
    name: 'Yamaha',
    img: CDN + 'project-3.png',
    href: 'https://medianetinfo.com/work/yamaha/',
    shape: 'landscape',
  },
  {
    name: 'Natural',
    img: CDN + 'project-4.png',
    href: 'https://medianetinfo.com/work/natural/',
    shape: 'portrait',
  },
  {
    name: 'Lamit',
    img: CDN + 'project-3.png',
    href: 'https://medianetinfo.com/work/lamit/',
    shape: 'landscape',
  },
  {
    name: 'Mesmera',
    img: CDN + 'project-4.png',
    href: 'https://medianetinfo.com/work/mesmera/',
    shape: 'square',
  },
  {
    name: 'Mend',
    img: CDN + 'project-2.png',
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
