import React from 'react';
import './Banner.css'; // Importing the CSS file
import bannerpic from './Bannerpic.png'; // Adjust the path if needed

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="content-wrapper">
        <div className="text-container">
          <h1 className="main-text">
            Will writing has <br /> never been so <span className="highlight-text">easy!</span>
          </h1>
          <p className="sub-text">
            Ensure your life's work is cherished and protected, with a secure, affordable will, saving up to 90% in cost and time.
          </p>
          <button className="banner-button">Join the waitlist!</button>
        </div>
        <img 
          src={bannerpic} 
          alt="Banner illustration" 
          className="banner-image" 
        />
      </div>
    </div>
  );
};

export default Banner;
