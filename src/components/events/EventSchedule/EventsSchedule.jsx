import React from "react";
import EventCard from "../EventCard/EventCard";
import { events } from "../../../utils/data/eventsData";
import "./EventsSchedule.css";

const EventsSchedule = () => {
  return (
    <div className="events-schedule">
      <h2 className="section-title">Weekly Events Schedule</h2>
      <p className="section-subtitle">
        Join us for specialized sessions throughout the week
      </p>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsSchedule;
