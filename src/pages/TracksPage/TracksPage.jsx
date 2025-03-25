import React from "react";
import TrackCard from "../../components/tracks/TrackCard/TrackCard";
import RegistrationForm from "../../components/tracks/RegistrationForm/RegistrationForm";
import { tracks } from "../../utils/data/tracksData";
import "./TracksPage.css";

const TracksPage = () => {
  return (
    <div className="tracks-page">
      <div className="tracks-hero">
        <h1>Our Learning Tracks</h1>
        <p>
          Specialized programs to develop your technical skills and prepare for
          industry demands
        </p>
      </div>

      <div className="tracks-container">
        <div className="tracks-grid">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>

      <div className="registration-section">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default TracksPage;
