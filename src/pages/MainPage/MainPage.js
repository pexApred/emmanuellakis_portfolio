import React from 'react';
import Intro from '../../components/Intro/Intro.js';
import About from '../../components/About/About.js';
import Project from '../../components/Project/Project.js';
import Resume from '../../components/Resume/Resume.js';
import Contact from '../../components/Contact/Contact.js';
import './MainPage.css';

function MainPage() {

    return (
        <>
            <Intro/>
            <About/>
            <Project/>
            <Resume/>
            <Contact/>
        </>
    );
}

export default MainPage;