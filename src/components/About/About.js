import React from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faBook, faRoute } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

function About() {
    return (
        <>
            <Accordion defaultkey="0" className="about" id='about' flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="header-about text-center">About Me</Accordion.Header>
                    <Accordion.Body className="body-about">
                        <p>
                            Yia sas! I'm Emmanuel, a Full-Stack Web Developer with an entrepreneurial spirit honed through years of leading a thriving restaurant.
                            Hospitality taught me that every second counts, that proper strategies can make or break the night, and that adaptability is the secret ingredient to success.
                        </p>
                        <p>
                            Swapping the aroma of freshly baked pizza for the world of code, I immersed myself in a rigorous Full-Stack Coding Bootcamp at the University of North Carolina at Chapel Hill.
                            I now harness a range of modern technologies including HTML/CSS, JavaScript, Node.js, Express.js,MySQL, MongoDB, and React.
                            I see code as my new kitchen: a place to experiment, to create, and to grow.
                        </p>
                        <p>
                            My years in the restaurant business equipped me with problem-solving skills, an unwavering ability to lead, and the tenacity to thrive under pressure. 
                            I bring these strengths to my work in web development, alongside a strong technical skill set. During my bootcamp, I engineered several full-stack applications and collaborated on team projects using Agile methodologies.
                        </p>
                        <p>
                            Now, I'm on the lookout for my next adventure: a challenging full-stack developer role where I can mesh my rich past with my vibrant tech future. I aspire to keep coding, keep learning, and to design applications that are as delightful to users as a slice of the finest Margherita.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default About;