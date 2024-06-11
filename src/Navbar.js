// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-icon">☰</span>
        <span className="navbar-title">Finwill</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li className="dropdown">
          <a href="#services" className="dropbtn">Services</a>
          <div className="dropdown-content">
            <a href="#service1">Service 1</a>
            <a href="#service2">Service 2</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#media" className="dropbtn">Media</a>
          <div className="dropdown-content">
            <a href="#media1">Media 1</a>
            <a href="#media2">Media 2</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#learn" className="dropbtn">Learn</a>
          <div className="dropdown-content">
            <a href="#learn1">Learn 1</a>
            <a href="#learn2">Learn 2</a>
          </div>
        </li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
