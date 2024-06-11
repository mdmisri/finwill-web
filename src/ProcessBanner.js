// ProcessBanner.js
import React from 'react';
import './ProcessBanner.css'; // Importing the CSS file

const ProcessBanner = () => {
  return (
    <div className="process-banner-container">
      <div className="process-banner-content">
        <div className="process-text-container">
          <h1 className="process-main-text">
            It's a <span className="highlight-text">simple</span> process!
          </h1>
          <ol className="process-steps">
            <li><strong>Answer simple questions</strong></li>
            <li>Our expert lawyers draft your will</li>
            <li>Receive the final draft and suggest any changes</li>
            <li>We help you get it Notarised/Registered in your city</li>
          </ol>
          <button className="process-banner-button">Join the waitlist!</button>
        </div>
        {/* <img 
          src="path-to-your-image.png" 
          alt="Process illustration" 
          className="process-banner-image" 
        /> */}
      </div>
    </div>
  );
};

export default ProcessBanner;
