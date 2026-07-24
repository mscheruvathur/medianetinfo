import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const offices = [
  {
    id: 'calicut',
    city: 'CALICUT',
    address: '1st Floor, Experience Center\nMavoor Road Signal Junction\nCalicut, 673004',
    phone: '+91 9745 222 256',
    tel: '+919745222256',
  },
  {
    id: 'malappuram',
    city: 'MALAPPURAM',
    address: 'X/317G, Near KINFRA Park\nKakkancheri, Malappuram Dt.,\nKerala, PIN:673634',
    phone: '+91 9745 222 253',
    tel: '+919745222253',
  },
  {
    id: 'cochin',
    city: 'COCHIN',
    address: 'Near High Court,\nKombara Junction\nEranakulam, 682018',
    phone: '+91 9745 222 257',
    tel: '+919745222257',
  },
];

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact' || location.pathname === '/contact/';

  return (
    <>
      <footer id="wrapper-footer" role="contentinfo">
        <div className="container">

          {/* Brand tagline — left, Logo — right */}
          <div className="footer-logo-row">
            <div className="footer-brand">
              <p className="footer-tagline">
                Promptness and accuracy in delivering quality service is our
                iconic history. Internationalism in the work culture and 16+
                years of trusted partnerships with esteemed clients.
              </p>
              <a href="mailto:mail@medianetinfo.com" className="footer-email">
                mail@medianetinfo.com
              </a>
            </div>
            <a href="/" className="footer-logo-link" aria-label="Medianet Info">
              <img
                src="https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/logo-footer.svg"
                alt="Medianet Info"
                className="footer-logo"
                width="260"
                height="auto"
              />
            </a>
          </div>

          {/* Office addresses */}
          {!isContactPage && (
            <div className="footer-addresses">
              {offices.map((office) => (
                <address key={office.id} className="address" id={office.id}>
                  <strong>{office.city}</strong>
                  <p>
                    {office.address.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <a href={`tel:${office.tel}`} className="phone-link">
                    {office.phone}
                  </a>
                </address>
              ))}
            </div>
          )}

          {/* Bottom bar */}
          <div className="footer-bottom">
            {/* Social icons — left */}
            <div className="footer-social" aria-label="Social media links">
              <a href="https://www.facebook.com/medianetadvertising/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="https://wa.me/919745222256?text=Hello+Medianet" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa fa-whatsapp" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/medianetadvertising/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://www.youtube.com/channel/UC1ByB7AVXg62gLrzhflsleA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fa fa-youtube-play" aria-hidden="true" />
              </a>
            </div>

            {/* Copyright — right */}
            <p className="copy-text">© 2026 MEDIANET | ALL RIGHTS RESERVED</p>
          </div>

        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919745222256?text=Hello+Medianet"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa fa-whatsapp" aria-hidden="true" />
      </a>

      {/* Email floating button */}
      <a
        href="mailto:mail@medianetinfo.com"
        className="email-float"
        aria-label="Send Email"
      >
        <i className="fa fa-envelope" aria-hidden="true" />
      </a>
    </>
  );
}
