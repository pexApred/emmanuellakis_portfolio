import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div id='resume' className="resume-container">
            <div className="header">
                <h1>Professional Resume</h1>
            </div>
            <div className="section">
                <h2>Professional Summary</h2>
                <p>
                    Full-stack developer with a strong background in both front-end and back-end technologies,
                    as well as a rich history of entrepreneurship in the restaurant industry. 
                    Adept at leveraging technical skills and entrepreneurial mindset to solve complex 
                    problems and drive business growth. Seeking a software or data engineering role 
                    that leverages both my full-stack development skills and business insights.
                </p>
            </div>
            <div className="section">
                <h2>Technical Skills</h2>
                <ul>
                    <li>Languages: JavaScript, HTML5, CSS3+</li>
                    <li>Frameworks: React, Node.js, Express.js</li>
                    <li>Databases: SQL, MySQL, MongoDB</li>
                    <li>API & Web Services: RESTful API Development, JSON, AJAX</li>
                    <li>Version Control: Git, GitHub & GitLab</li>
                    <li>Development Methodologies: Agile, OOP, MVC, MERN Stack</li>
                    <li>Tools & Environments: Webpack, NPM, Heroku, Jest, Visual Studio Code</li>
                </ul>
            </div>
            <div className="section">
                <h2>Soft Skills</h2>
                <ul>
                    <li>Interpersonal: Effective Communication, Team Collaboration, Leadership</li>
                    <li>Technical Proficiency: Problem-Solving, User-Centric Design, Continuous Learning</li>
                    <li>Efficiency: Time Management, Adaptability, Strategic Planning</li>
                </ul>
            </div>
            <div className="section">
                <h2>Professional Education</h2>
                <p>
                    Certificate from Full-Stack Coding Bootcamp, University of North Carolina at Chapel Hill,
                    Remote, Chapel Hill, NC (Jan. 2023 - Jul. 2023)
                </p>
                {/* ... other education details */}
            </div>
            <div className="section">
                <h2>Professional Experience</h2>
                <p>
                    Pizza Time Inc, Business Owner, Bennettsville, SC (Mar. 2022 - Jul. 2023)
                </p>
                {/* ... other experience details */}
            </div>
            <div className="section">
                <h2>Education</h2>
                <p>
                    Associate’s Degree in Culinary Arts/Chef Training, Johnson & Wales University, Charlotte, NC (Jan. 2017 - Jul. 2019)
                    Bachelor’s Degree in Chemistry, Wofford College, Spartanburg, SC (Aug. 2009 - Jun. 2013)
                </p>
            </div>
        </div>
    );
}

export default Resume;
