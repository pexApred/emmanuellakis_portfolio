import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

const contactLinks = [
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
        link: 'tel:919.714.9693',
        icon: faPhone,
    },
    {
        title: 'Email',
        link: 'mailto:manolilakis@gmail.com',
        icon: faPaperPlane,
    }
];

function Contact() {
    return (
        <>
            <Accordion defaultkey="0" className="contact-container" flush>
                <Accordion.Item eventKey="0" className="">
                    <Accordion.Header className="header-contact text-center">Contact Me</Accordion.Header>
                    <Accordion.Body className="body-contact">
                        {contactLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.link} className="links">
                                    <FontAwesomeIcon icon={link.icon} /> {link.title}
                                </a>
                            </li>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Contact;