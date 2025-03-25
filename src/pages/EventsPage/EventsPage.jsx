import React from "react";
import EventCard from "../../components/events/EventCard/EventCard";
import { events } from "../../utils/data/eventsData";
import "./EventsPage.css";

const EventsPage = () => {
  // Group events by day for better organization
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="events-page">
      <div className="events-hero">
        <h1>Weekly Events Schedule</h1>
        <p>Join us for specialized learning sessions throughout the week</p>
      </div>

      <div className="events-container">
        {daysOfWeek.map((day) => {
          const dayEvents = events.filter((event) => event.day === day);
          return (
            <div key={day} className="day-section">
              <h2 className="day-title">{day}</h2>
              <div className="events-grid">
                {dayEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPage;
