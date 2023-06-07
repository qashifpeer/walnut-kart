import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection';
import Footer from '../../components/footer/Footer';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
    
    </div>
  );
  
}

export default Home