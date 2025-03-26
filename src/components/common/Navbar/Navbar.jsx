import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../assets/misc/mutc-logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={LogoImg} alt="MUTC Logo" className="logo-img" />
          <span className="logo-text">
            Murang'a University Tech Club (MUTC)
          </span>
        </Link>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/leadership"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Leadership
          </Link>
          <Link
            to="/tracks"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Tracks
          </Link>
          <Link
            to="/events"
            className="nav-item"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
