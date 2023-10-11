import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile.js';
import MainPage from './pages/MainPage/MainPage.js';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <div className={`App-container ${darkMode ? 'dark-side' : ''} ${navOpen ? 'mobile-nav-active' : ''}`}>
        <div className="App" id="header">
          <Profile />
          <NavBar />
        </div>
        <div className={`App1-container ${darkMode ? 'dark' : ''}`}>
          <div className="App1">          
          <button className={`toggle-button ${navOpen ? 'toggled' : ''}`} onClick={toggleNav}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
            <MainPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
