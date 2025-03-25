import React from "react";
import {
  FaShieldAlt,
  FaPalette,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";
import "./EventCard.css";

const EventCard = ({ event }) => {
  const getIcon = () => {
    switch (event.icon) {
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
    <div className="event-card">
      <div className="event-day">{event.day}</div>
      <div className="event-header">
        {getIcon()}
        <h3 className="event-title">{event.track}</h3>
      </div>

      <div className="event-details">
        <div className="event-detail">
          <FaClock className="detail-icon" />
          <span>{event.time}</span>
        </div>

        <div className="event-detail">
          <FaMapMarkerAlt className="detail-icon" />
          <span>{event.location}</span>
        </div>

        <div className="event-detail">
          <FaUserTie className="detail-icon" />
          <span>Instructor: {event.instructor}</span>
        </div>
      </div>

      <p className="event-description">{event.description}</p>

      <div className="event-skills">
        <h4>Skills Covered:</h4>
        <ul className="skills-list">
          {event.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
