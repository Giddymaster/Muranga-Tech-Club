import React from "react";
import LeadershipGrid from "../../components/leadership/LeadershipGrid/LeadershipGrid";
import "./LeadershipPage.css";

const LeadershipPage = () => {
  return (
    <div className="leadership-page">
      <div className="leadership-hero">
        <h1>Our Leadership Team</h1>
        <p>
          Meet the dedicated individuals who guide MUTC's vision and operations
        </p>
      </div>
      <LeadershipGrid />
    </div>
  );
};

export default LeadershipPage;
