import React from "react";
import {
  FaShieldAlt,
  FaPalette,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import "./TrackCard.css";

const TrackCard = ({ track }) => {
  const getIcon = () => {
    switch (track.icon) {
      case "shield":
        return <FaShieldAlt className="track-icon" />;
      case "palette":
        return <FaPalette className="track-icon" />;
      case "code":
        return <FaCode className="track-icon" />;
      case "mobile":
        return <FaMobileAlt className="track-icon" />;
      case "cloud":
        return <FaCloud className="track-icon" />;
      case "robot":
        return <FaRobot className="track-icon" />;
      default:
        return <FaCode className="track-icon" />;
    }
  };

  return (
    <div className="track-card">
      <div className="track-header">
        {getIcon()}
        <h3 className="track-title">{track.name}</h3>
      </div>
      <div className="track-body">
        <p className="track-description">{track.description}</p>
        <div className="track-details">
          <div className="track-schedule">
            <strong>Schedule:</strong> {track.schedule}
          </div>
          <div className="track-location">
            <strong>Location:</strong> {track.location}
          </div>
        </div>
        <div className="track-skills">
          <h4>Skills You'll Learn:</h4>
          <ul className="skills-list">
            {track.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
