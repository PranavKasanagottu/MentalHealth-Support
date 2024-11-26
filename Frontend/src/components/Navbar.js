import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Anonymous Mental Health Support</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/form">Submit Concern</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        </ul>
      </nav>
    );
  };

export default Navbar;
