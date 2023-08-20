import React from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faBook, faRoute } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

function About() {
    return (
        <>
            <Accordion defaultkey="0" className="about" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="header-about text-center">About Me</Accordion.Header>
                    <Accordion.Body className="body-about">
                        Dynamic Full-Stack Web Developer and experienced business owner
                        restaurant. Recently transitioned into tech, completing a
                        rigorous Full-Stack Coding Bootcamp from the University of
                        North Carolina at Chapel Hill. Proficient in a range of modern
                        technologies including HTML/CSS, JavaScript, Node.js, Express.js,
                        MySQL, MongoDB, and React.
                        My background in the fast-paced restaurant industry has honed my
                        problem-solving abilities, adaptability, and leadership skills.
                        I bring these strengths to my work in web development, alongside
                        a strong technical skill set. In my coding bootcamp, I successfully
                        completed several full-stack applications and collaborated on team
                        projects using Agile methodologies.
                        I'm now looking to leverage my unique blend of skills in a
                        challenging full-stack web developer role. I bring with me not just
                        coding skills, but also a track record of strategic thinking,
                        team management, and the ability to thrive under pressure. My goal
                        is to create efficient and user-friendly web applications that meet
                        the needs of users and exceed client expectations.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default About;