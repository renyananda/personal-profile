import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import PortfolioSection from '../components/PortofolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Navbar className="font-poppins min-h-screen w-full overflow-hidden"/>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
