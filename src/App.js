import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile.js';
import MainPage from './pages/MainPage/MainPage.js';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    function checkScrollPosition() {
      if (document.documentElement.scrollTop > 0) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    }

    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      <div className={`App-container ${darkMode ? 'dark-side' : ''} ${navOpen ? 'mobile-nav-active' : ''}`}>
        <div className="App" id="header">
          <Profile />
          <NavBar />
        </div>
        <div className={`App1-container ${darkMode ? 'dark' : ''}`}>
          <div className="App1">
            <button className={`toggle-button ${navOpen ? 'toggled' : ''}`} alt='mobile-toggle' onClick={toggleNav}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </button>
            <MainPage />
          </div>
          {showScrollBtn && (
            <button className='scrollToTop' alt='scroll-toggle' onClick={scrollToTop}>
              <FontAwesomeIcon icon={faArrowUp}/>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
