import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Home;