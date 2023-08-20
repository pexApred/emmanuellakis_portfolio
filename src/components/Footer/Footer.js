import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

const footerLinks = [
    {
        title: 'GitHub',
        link: 'https://github.com/pexApred',
        icon: faGithub,
    },
    {
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/emmanuellakis',
        icon: faLinkedin,
    },
    {
        title: 'Phone',
        link: 'tel:843.439.0946',
        icon: faPhone,
    },
    {
        title: 'Email',
        link: 'mailto:manolilakis@gmail.com',
        icon: faPaperPlane,
    }
];

function Footer() {
    return (
        <>
            <Container className="footer-container">
                <footer className="footer">
                    <h1>Contact Me</h1>
                    <div> | </div>
                    <ul className="ftul">
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.link}>
                                    <FontAwesomeIcon icon={link.icon} /> {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </footer>
            </Container>
        </>
    );
}

export default Footer;