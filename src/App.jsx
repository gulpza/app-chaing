import React from 'react';
import header from '../src/assets/Images/header.png';
import footer from '../src/assets/Images/footer.png';
import './App.css';
import Random from './Pages/Random';

function App() {
  return (
    <>
      <img src={header} className="header-image" alt="Header" />
      <div className="content">
        <Random />
      </div>
      <img src={footer} className="footer-image" alt="Footer" />
    </>
  );
}

export default App;
