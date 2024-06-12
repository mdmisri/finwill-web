import React from 'react';
import './ProcessBanner.css'; // Importing the CSS file
import processImage from './data process.jpg'; // Correct import path

const ProcessBanner = () => {
  return (
    <div className="process-banner-container">
      <div className="process-banner-content">
        <div className="process-text-container">
          <h1 className="process-main-text">
            It's a <span className="highlight-text">simple</span> process!
          </h1>
          <ol className="process-steps">
            <ul><strong>Answer simple questions</strong></ul>
            <ul>Our expert lawyers draft your will</ul>
            <ul>Receive the final draft and suggest any changes</ul>
            <ul>We help you get it Notarised/Registered in your city</ul>
          </ol>
          <button className="process-banner-button">Join the waitlist!</button>
        </div>
        <div className="process-banner-image-container">
          <img 
            src={processImage} 
            alt="Process illustration" 
            className="process-banner-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessBanner;
