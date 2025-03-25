import React, { useState } from "react";
import { tracks } from "../../../utils/data/tracksData";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    year: "",
    track: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      course: "",
      year: "",
      track: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="registration-form-container">
      <h3 className="form-title">Register for a Track</h3>
      {submitted && (
        <div className="success-message">
          Registration successful! We'll contact you soon.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Current Course of Study</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year of Study</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
            <option value="5+">Postgraduate</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="track">Preferred Track</label>
          <select
            id="track"
            name="track"
            value={formData.track}
            onChange={handleChange}
            required
          >
            <option value="">Select Track</option>
            {tracks.map((track) => (
              <option key={track.id} value={track.name}>
                {track.name} ({track.schedule})
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-button">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
