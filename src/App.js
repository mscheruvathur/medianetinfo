import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import HomeVideo from './components/HomeVideo/HomeVideo';
import FooterCTA from './components/FooterCTA/FooterCTA';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import ClientsPage from './pages/Clients/ClientsPage';
import WorkPage from './pages/Work/WorkPage';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeVideo />
        <Clients />
        <Projects />
        <Testimonials />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/" element={<ClientsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/" element={<WorkPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
