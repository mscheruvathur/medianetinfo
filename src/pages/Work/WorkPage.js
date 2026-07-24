import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import Footer from '../../components/Footer/Footer';
import './WorkPage.css';

const IMG = '/images/projects/';

// Every work item below uses a distinct source file — no image is reused.
const works = [
  { name: 'JCB', img: IMG + 'Decathlon.jpg.jpeg', href: 'https://medianetinfo.com/work/jcb/' },
  { name: 'Francis Alukkas', img: IMG + 'kenza_.jpg.jpeg', href: 'https://medianetinfo.com/work/francis-alukkas/' },
  { name: 'M Lounge', img: IMG + 'Adani_.jpg.jpeg', href: 'https://medianetinfo.com/work/mlounge/' },
  { name: 'EVM Nissan', img: IMG + 'Honda.jpg.jpeg', href: 'https://medianetinfo.com/work/evm-nissan/' },
  { name: 'Landmark Maple', img: IMG + 'Elance.jpg.jpeg', href: 'https://medianetinfo.com/work/landmark-maple/' },
  { name: 'Yamaha', img: IMG + 'Impex.jpg.jpeg', href: 'https://medianetinfo.com/work/yamaha/' },
  { name: 'Natural', img: IMG + 'Salpido_.jpg.jpeg', href: 'https://medianetinfo.com/work/natural/' },
  { name: 'Lamit', img: IMG + 'Hilite_.jpg.jpeg', href: 'https://medianetinfo.com/work/lamit/' },
  { name: 'Mesmera', img: IMG + 'indel%20suzuki.jpg.jpeg', href: 'https://medianetinfo.com/work/mesmera/' },
  { name: 'Mend', img: IMG + 'Myg.jpg.jpeg', href: 'https://medianetinfo.com/work/mend/' },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="work-page">

        {/* ── Work Grid ── */}
        <section className="work-collage-section">
          <div className="work-page-container">
            <div className="work-collage">
              {works.map((w) => (
                <a
                  key={w.name}
                  href={w.href}
                  className="collage-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View project: ${w.name}`}
                >
                  <div className="collage-media">
                    <img src={w.img} alt={w.name} loading="lazy" />
                  </div>
                  <div className="collage-body">
                    <h3 className="collage-name">{w.name}</h3>
                    <span className="collage-view">
                      View Project
                      <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    </span>
                  </div>
                </a>
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
