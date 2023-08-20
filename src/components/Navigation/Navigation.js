import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
    return (
        <>
            <nav className='nav'>
                <ul className="nav-group" role="navigation">
                    <li><a href="#page-top" className="nav-link">Home</a></li>
                    <li><a href="#life" className="nav-link">About</a></li>
                    <li><a href="#work" className="nav-link">Work</a></li>
                    <li><a href="#contact-me" className="nav-link">Contact</a></li>
                    <li><a href="#resume" className="nav-link">Resume</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;