import React from 'react';
import './FooterBanner.css'; // Import CSS for styling
import edventureParkLogo from './edventure park.jpg'; // Adjust the path as needed

const FooterBanner = () => {
  return (
    <div className="footer-banner">
      {/* Waitlist Form */}
      <div className="footer-newsletter">
        <h3>Join the waitlist!</h3>
        <form>
          <input type="email" placeholder="Email address" />
          <button type="submit">Sign up</button>
        </form>
      </div>
      {/* Finwill Info */}
      <div className="footer-finwill">
        <h1>Finwill</h1>
        <p>
          Our goal is to empower Indians with better succession planning through seamless support at an affordable cost.
        </p>
      </div>
      {/* Our Company */}
      <div className="footer-company">
        <h3>Our company</h3>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      {/* Image */}
      <div className="footer-incubation">
        <h3>Incubated at Edventure Park</h3>
        <img src={edventureParkLogo} alt="Edventure Park Logo" />
      </div>
      {/* Email Us */}
      <div className="footer-email">
        <h3>Email Us</h3>
        <p>support@finwill.com</p>
      </div>
    </div>
  );
};

export default FooterBanner;
