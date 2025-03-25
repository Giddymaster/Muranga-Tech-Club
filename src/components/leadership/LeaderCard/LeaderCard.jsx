import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./LeaderCard.css";

const LeaderCard = ({ leader, onLearnMore }) => {
  return (
    <div className="leader-card">
      <div className="leader-image-container">
        <img src={leader.image} alt={leader.name} className="leader-image" />
        <div className="social-links">
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${leader.name} LinkedIn`}
            >
              <FaLinkedin className="social-icon" />
            </a>
          )}
          {leader.twitter && (
            <a
              href={leader.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${leader.name} Twitter`}
            >
              <FaTwitter className="social-icon" />
            </a>
          )}
          {leader.facebook && (
            <a
              href={leader.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${leader.name} Facebook`}
            >
              <FaFacebook className="social-icon" />
            </a>
          )}
          {leader.instagram && (
            <a
              href={leader.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${leader.name} Instagram`}
            >
              <FaInstagram className="social-icon" />
            </a>
          )}
        </div>
      </div>
      <div className="leader-info">
        <h3 className="leader-name">{leader.name}</h3>
        <p className="leader-role">{leader.role}</p>
        <div className="leader-responsibilities">
          <h4>Key Responsibilities:</h4>
          <p>{leader.responsibilities}</p>
        </div>
        <p className="leader-bio">{leader.bio}</p>
        <button
          className="learn-more-button"
          onClick={() => onLearnMore(leader)}
        >
          View full Profile
        </button>
      </div>
    </div>
  );
};

export default LeaderCard;
