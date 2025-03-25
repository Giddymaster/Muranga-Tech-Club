import React, { useState } from "react";
import LeaderCard from "../LeaderCard/LeaderCard";
import LeaderModal from "../LeaderModal/LeaderModal";
import { leaders } from "../../../utils/data/leadersData";
import "./LeadershipGrid.css";

const LeadershipGrid = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const patrons = leaders.filter((leader) => leader.role === "Patron");
  const executives = leaders.filter((leader) =>
    ["Chairperson", "Vice Chairperson", "Secretary", "Treasurer"].includes(
      leader.role,
    ),
  );
  const leads = leaders.filter(
    (leader) => leader.role.includes("Lead") && !executives.includes(leader),
  );

  return (
    <div className="leadership-grid">
      <div className="leadership-header">
        <h2 className="section-title">Meet Our Leadership</h2>
        <p className="section-subtitle">
          The dedicated team driving MUTC's vision forward
        </p>
      </div>

      <div className="leadership-section">
        <h3 className="leadership-category">Patron</h3>
        <div className="leaders-container">
          {patrons.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              onLearnMore={setSelectedLeader}
            />
          ))}
        </div>
      </div>

      <div className="leadership-section">
        <h3 className="leadership-category">Executive Committee</h3>
        <div className="leaders-container executives">
          {executives.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              onLearnMore={setSelectedLeader}
            />
          ))}
        </div>
      </div>

      <div className="leadership-section">
        <h3 className="leadership-category">Technical Leads</h3>
        <div className="leaders-container leads">
          {leads.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              onLearnMore={setSelectedLeader}
            />
          ))}
        </div>
      </div>

      {selectedLeader && (
        <LeaderModal
          leader={selectedLeader}
          onClose={() => setSelectedLeader(null)}
        />
      )}
    </div>
  );
};

export default LeadershipGrid;
