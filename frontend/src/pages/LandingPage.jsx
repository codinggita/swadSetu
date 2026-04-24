import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturedKitchens from '../components/FeaturedKitchens';
import ZeroWaste from '../components/ZeroWaste';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedKitchens />
      <ZeroWaste />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
