import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        title: '919.714.9693',
        link: 'tel:919.714.9693',
        icon: faPhone,
    },
    {
        title: 'manolilakis@gmail.com',
        link: 'mailto:manolilakis@gmail.com',
        icon: faPaperPlane,
    }
];

function Contact() {

    return (
        <div id='contact'>
            <div className="contact-container">
                <section className="body-contact" >
                    {contactLinks.map((link, index) => (
                        <div key={index}>
                            <a href={link.link} className="links">
                                <FontAwesomeIcon icon={link.icon} /> {link.title}
                            </a>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Contact;