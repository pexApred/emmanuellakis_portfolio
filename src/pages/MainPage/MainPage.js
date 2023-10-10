import React from 'react';
import 'devicon';
import About from '../../components/About/About.js';
import Project from '../../components/Project/Project.js';
import Resume from '../../components/Resume/Resume.js'
import './MainPage.css';

function MainPage() {

    return (
        <>
            {/* <About/> */}
            <About/>
            <Project/>
            <Resume/>
            {/* <Resume/> */}
        </>
    );
}

export default MainPage;