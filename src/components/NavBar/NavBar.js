import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPersonWalking, faFile, faIdCard, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';


function NavBar() {
    return (
        <>
            <nav className='nav-container'>
                <ul className='section-links'>
                    <li>
                        <a href='#'>
                            <FontAwesomeIcon className='icons' icon={faHouse} />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#about'>
                            <FontAwesomeIcon className='icons' icon={faPersonWalking} />
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href='#projects'>
                            <FontAwesomeIcon className='icons' icon={faFolderOpen} />
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#resume'>
                            <FontAwesomeIcon className='icons' icon={faFile} />
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            <FontAwesomeIcon className='icons' icon={faIdCard} />
                            Contact
                        </a>
                    </li>
                    <br />
                    <li>
                        <a href='mailto:manolilakis@gmail.com?subject=&body=How can I help you?'><FontAwesomeIcon className='icons' icon={faAt} />manolilakis@gmail.com</a>
                    </li>
                    <li>
                        <a href='tel:+9197149693'><FontAwesomeIcon className='icons' icon={faPhone} />919.714.9693</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;