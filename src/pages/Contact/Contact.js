import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

const offices = [
  {
    id: 'calicut',
    city: 'CALICUT',
    address: '1st Floor, Experience Center\nMavoor Road Signal Junction\nCalicut, 673004',
    phone: '+91 9745 222 256',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4706826835686!2d75.97678!3d11.26447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65983b5e78289%3A0x6b1e2e95dd1a78b9!2sMedianet%20Advertising!5e0!3m2!1sen!2sin!4v1700000000000',
  },
  {
    id: 'malappuram',
    city: 'MALAPPURAM',
    address: 'X/317G, Near KINFRA Park\nKakkancheri, Malappuram Dt.,\nKerala, PIN:673634',
    phone: '+91 9745 222 253',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.193865!2d76.08792!3d11.11042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba649b0d24d6c1f%3A0x4c9d0e2b0c10c527!2sMedianet%20Advertising!5e0!3m2!1sen!2sin!4v1700000000001',
  },
  {
    id: 'cochin',
    city: 'COCHIN',
    address: 'Near High Court,\nKombara Junction\nEranakulam, 682018',
    phone: '+91 9745 222 257',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0123456!2d76.29123!3d9.96354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5f6a5d2!2sMedianet%20Advertising!5e0!3m2!1sen!2sin!4v1700000000002',
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main id="contact-page">
        <div className="contact-hero">
          <h1 className="contact-heading">
            Ready to start a <span className="contact-blue">project</span>
          </h1>
          <p className="contact-sub">
            We'd love to hear more. Tell us a about yourself and<br />
            we'll be in touch with you shortly.
          </p>
        </div>

        <div className="contact-maps container">
          {offices.map((o) => (
            <div key={o.id} className="contact-card">
              <div className="map-wrap">
                <iframe
                  title={`Map for ${o.city}`}
                  src={o.mapSrc}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="contact-card-info">
                <strong>{o.city}</strong>
                <p>
                  {o.address.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <p className="contact-phone">{o.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
