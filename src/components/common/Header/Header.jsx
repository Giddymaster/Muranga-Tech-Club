import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img
            src="../../../../public/assets/images/misc/mutc-logo.jpeg"
            alt="MUTC Logo"
            className="logo-image"
          />
          <div className="logo-text">
            <span className="logo-main">MUTC</span>
            <span className="logo-sub">Tech Club</span>
          </div>
        </Link>
        <div className="header-actions">
          <button className="header-button">
            <i className="fas fa-user-plus"></i> Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
