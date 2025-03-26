import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaGraduationCap,
  FaFileAlt,
} from "react-icons/fa";
import "./LeaderModal.css";

const LeaderModal = ({ leader, onClose }) => {
  if (!leader) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-content">
          <div className="modal-left">
            <img src={leader.image} alt={leader.name} className="modal-image" />
            <h2 className="modal-name">{leader.name}</h2>
            <p className="modal-role">{leader.role}</p>

            {leader.email && (
              <div className="contact-info">
                <strong>Email:</strong> {leader.email}
              </div>
            )}

            <div className="modal-social-links">
              {leader.links?.linkedin && (
                <a
                  href={leader.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="social-icon" />
                </a>
              )}
              {leader.links?.twitter && (
                <a
                  href={leader.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="social-icon" />
                </a>
              )}
              {leader.links?.facebook && (
                <a
                  href={leader.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="social-icon" />
                </a>
              )}
              {leader.links?.instagram && (
                <a
                  href={leader.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon" />
                </a>
              )}
              {leader.links?.googleScholar && (
                <a
                  href={leader.links.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileAlt className="social-icon" title="Google Scholar" />
                </a>
              )}
              {leader.links?.researchGate && (
                <a
                  href={leader.links.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGraduationCap
                    className="social-icon"
                    title="ResearchGate"
                  />
                </a>
              )}
            </div>
          </div>

          <div className="modal-right">
            <div className="modal-section">
              <h3>Biography</h3>
              <p className="modal-bio">{leader.extendedBio || leader.bio}</p>
            </div>

            {leader.education && leader.education.length > 0 && (
              <div className="modal-section">
                <h3>Education</h3>
                <ul className="info-list">
                  {leader.education.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {leader.responsibilities && (
              <div className="modal-section">
                <h3>Key Responsibilities</h3>
                <p>{leader.responsibilities}</p>
              </div>
            )}

            {leader.publications && leader.publications.length > 0 && (
              <div className="modal-section">
                <h3>Selected Publications</h3>
                <ul className="publications-list">
                  {leader.publications.map((pub, index) => (
                    <li key={index}>{pub}</li>
                  ))}
                </ul>
              </div>
            )}

            {leader.achievements && leader.achievements.length > 0 && (
              <div className="modal-section">
                <h3>Notable Achievements</h3>
                <ul className="achievements-list">
                  {leader.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderModal;
