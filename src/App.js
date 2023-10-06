import './App.css';
import Footer from './components/Footer/Footer.js';
import 'devicon'
import Header from './components/Header/Header.js';
import Navigation from './components/NavBar/NavBar';
import Project from './components/Project/Project.js';
import About from './components/About/About.js';
import Profile from './components/Profile/Profile.js';
import Resume from './components/Resume/Resume.js';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className="App-container">
        <div className="App">
          <Profile />          
          <Navigation/>
          {/* <About />
          <Project />
          <Resume />
          <Contact /> */}
          {/* <Footer/> */}
          {/* <Header/> */}
        </div>
        <div className="App1-container">
          <div className="App1">
            {/* <About />
            <Project />
            <Resume />
            <Contact /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
