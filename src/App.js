import './App.css';
import Footer from './components/Footer/Footer.js';
import 'devicon'
import Header from './components/Header/Header.js';
import Navigation from './components/Navigation/Navigation';
import Project from './components/Project/Project.js';
import About from './components/About/About.js';
import Profile from './components/Profile/Profile.js';
import Resume from './components/Resume/Resume.js';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      {/* <Navigation/> */}
      <Profile/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      {/* <Footer/> */}      
      {/* <Header/> */}
    </div>
  );
}

export default App;
