import React from 'react';
import Navbar from '../../Components/Navbar';
import Testimonials from './testimonials/Testimonials';
import Footer from '../../Components/Footer';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import OurNews from './ourNews/OurNews';

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials />
      <OurNews />
      <Footer />
    </div>
  );
};

export default Home;
