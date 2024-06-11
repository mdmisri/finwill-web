import React from 'react';
import './CardBanner.css';

const CardBanner = () => {
  return (
    <div className="pricing-container">
      <h2>We keep our pricing simple, find the best plan that suits your needs or</h2>
      <a href="#">VIEW ALL PRICING PLANS</a>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <span className="price">&#8377;7,999</span>
            <h3 className="price-label">&#8377; 4,999</h3>
            <p className="card-title">One-time cost</p>
            <p className="card-subtitle">All-India</p>
          </div>
          <div className="card-body">
            <h4>Will with Notarisation</h4>
            <p>Basic layer of legal protection</p>
            <button className="offer-btn">Limited Time Offer</button>
            <ul>
              <li>Free Notarisation in your city</li>
              <li>Lifetime of Will updates for the first year</li>
              <li>Data is 100% secured & encrypted</li>
              <li>Notarisation ensures authenticity of the Will to avoid disputes</li>
            </ul>
            <button className="choose-btn">Choose Plan</button>
          </div>
        </div>
        <div className="card highlighted">
          <div className="card-header">
            <span className="price">&#8377;24,999</span>
            <h3 className="price-label">&#8377;19,999 *</h3>
            <p className="card-title">One-time cost</p>
            <p className="card-subtitle">Excluding Stamp Duties</p>
          </div>
          <div className="card-body">
            <h4>Will with Registration</h4>
            <p>Highest layer of legal protection</p>
            <button className="offer-btn">Limited Time Offer</button>
            <ul>
              <li>All features of Will with Notarisation</li>
              <li>Free Registration in your city</li>
              <li>On-demand support for a year</li>
              <li>Registration ensures the highest authenticity of the Will to avoid disputes</li>
            </ul>
            <button className="choose-btn">Choose Plan</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <span className="price">&#8377;39,999</span>
            <h3 className="price-label">&#8377;24,999 *</h3>
            <p className="card-title">One-time cost</p>
            <p className="card-subtitle">Excluding Stamp Duties</p>
          </div>
          <div className="card-body">
            <h4>Premium Will service</h4>
            <p>Most convenient layer of legal protection</p>
            <button className="offer-btn">Limited Time Offer</button>
            <ul>
              <li>All features of Will with Registration</li>
              <li>Dedicated Lawyer's visit for Will drafting</li>
              <li>Free door-step Notarisation</li>
              <li>Ideal for busy individuals and those with time or physical constraints</li>
            </ul>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;