import React from "react";
import "./HeroSection.css";
import HeroVid from "../../../assets/misc/hero-background.mp4";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Learn by Coding Real-Life Projects</h1>
        <p className="hero-subtitle">
          Join Murang'a University Tech Club and transform your ideas into
          reality
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Join Us</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>
      <div className="hero-overlay"></div>
      <video
        autoPlay
        loop
        muted
        className="hero-video"
        poster="/assets/images/heroes/hero-poster.jpg"
      >
        <source src={HeroVid} type="video/mp4" />
      </video>
    </section>
  );
};

export default HeroSection;
