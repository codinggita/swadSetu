import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturedKitchens from '../components/FeaturedKitchens';
import ZeroWaste from '../components/ZeroWaste';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedKitchens />
      <ZeroWaste />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Landing;
