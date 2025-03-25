import React from "react";
import TrackCard from "../TrackCard/TrackCard";
import { tracks } from "../../../utils/data/tracksData";
import "./TracksList.css";

const TracksList = () => {
  return (
    <div className="tracks-list">
      <div className="tracks-header">
        <h2 className="section-title">Our Learning Tracks</h2>
        <p className="section-subtitle">
          Specialized programs to develop your technical skills
        </p>
      </div>

      <div className="tracks-container">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TracksList;
