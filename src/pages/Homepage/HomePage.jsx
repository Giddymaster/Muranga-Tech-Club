import React from "react";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import AboutSection from "../../components/home/AboutSection/AboutSection";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;
