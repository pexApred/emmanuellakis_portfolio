import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return (
        <>
            <nav className='nav'>
                <ul className="nav-group" role="navigation">
                    <li><a href="#about" className="nav-link">About Me</a></li>
                    <li><a href="#work" className="nav-link">My Work</a></li>                    
                    <li><a href="#resume" className="nav-link">Resume</a></li>
                    <li><a href="#contact-id" className="nav-link">Contact Me</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;