import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Yes from './Yes';

function Home() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [buttonFontSize, setButtonFontSize] = useState(16); 
  const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
  ];

  const handleNoClick = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setButtonFontSize((prevSize) => prevSize * 1.5); // Increase font size for the 'Yes' button
  };

  return (
    <div>
      <div className="container">
        <h1>Will you be my Valentine?</h1>
        <div className="buttons">
          <Link to="/yes">
            <button 
              className="yes-button" 
              style={{ fontSize: `${buttonFontSize}px` }}
            >
              Yes
            </button>
          </Link>
          <button className="no-button" onClick={handleNoClick}>
            {messages[messageIndex]}
          </button>
        </div>
        <div className="gif_container">
          <img 
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif" 
            alt="Cute GIF"
          />
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </Router>
  );
}

export default App;
