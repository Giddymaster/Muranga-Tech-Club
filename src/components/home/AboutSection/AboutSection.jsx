import React from "react";
import "./AboutSection.css";
import aboutImage from "../../../../public/assets/images/misc/mutc-logo.jpeg";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={aboutImage}
            alt="MUTC Members collaborating"
            className="about-img"
          />
        </div>
        <div className="about-content">
          <h2 className="section-title">About MUTC</h2>
          <p className="about-text">
            The Murang'a University Tech Club (MUTC) is the premier technology
            organization at Murang'a University, dedicated to advancing members'
            knowledge in programming and technology through hands-on learning
            and innovation.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Technical Skills</h3>
              <p>
                Develop practical skills in various tech domains through
                workshops and projects
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>
                Join a vibrant community of tech enthusiasts and industry
                professionals
              </p>
            </div>
          </div>
          <button className="btn-primary">Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
