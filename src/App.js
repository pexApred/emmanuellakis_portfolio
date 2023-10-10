import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile.js';
import MainPage from './pages/MainPage/MainPage.js';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`App-container ${darkMode ? 'dark-side' : ' '}`}>
        <div className="App">
          <Profile />
          <NavBar />
        </div>
        <div className={`App1-container ${darkMode ? 'dark' : ''}`}>
          <div className="App1">
          {/* <button onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button> */}
            <MainPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
