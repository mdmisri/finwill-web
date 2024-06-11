// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import ProcessBanner from './ProcessBanner';
import CardBanner from './CardBanner';
import FooterBanner from './FooterBanner';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProcessBanner />
      {/* <CardBanner /> */}
      <FooterBanner />
      <Footer />
      {/* Other components can go here */}
    </div>
  );
}

export default App;
