import React, { useEffect } from "react";
import './About.css';
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faBook, faRoute } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

function About() {

    useEffect(() => {
        const titleOptions = {
            strings: [
                "Software Engineer",
                // "Data Engineer"
            ],
            typeSpeed: 50,
        };

        const typed = new Typed(".typed", titleOptions);

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const skills = {
            strings: [
                "",
                "",
                "JavaScript",
                "HTML5 and CSS3+",
                "React",
                "Node.js",
                "Express.js",
                "SQL",
                "MySQL",
                "MongoDB",
                "RESTful API Development",
                "JSON",
                "AJAX",
                "Git",
                "GitHub",
                "Agile",
                "Object-Oriented Programming"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        const typedSkills = new Typed(".typedSkills", skills);

        return () => {
            typedSkills.destroy();
        };
    }, []);

    return (
        <div id='about' className="hero-container">
            <div className="hero-section">
                <h1>Emmanuel Lakis</h1>
                <div className="typed-container">
                    <p>A <span className="typed"></span>{' '} </p>
                    <p>skilled in <span className="typedSkills"></span></p>
                </div>
            </div>
            <div className="bio">
                <div className="bio-item">
                    {/* <h2>About Me</h2>
                    <p>
                        Yia sas! I'm Emmanuel, a Full-Stack Web Developer with an entrepreneurial spirit honed through years of leading a thriving restaurant.
                        Hospitality taught me that every second counts, that proper strategies can make or break the night, and that adaptability is the secret ingredient to success.
                    </p> */}
                </div>
                {/* ... other bio items */}
            </div>
        </div>
    );
}

export default About;