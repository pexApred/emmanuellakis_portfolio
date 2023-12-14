import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPersonWalking, faFile, faTimeline, faIdCard, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
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
                            Who I Am
                        </a>
                    </li>
                    <li>
                        <a href='#projects'>
                            <FontAwesomeIcon className='icons' icon={faFolderOpen} />
                            My Projects
                        </a>
                    </li>
                    <li>
                        <a href='#timeline'>
                            <FontAwesomeIcon className='icons' icon={faTimeline} />
                            Professional Timeline
                        </a>
                    </li>
                    <li>
                        <a href='https://drive.google.com/file/d/1Ob6RjRp7h7PzW_fzHrjQiA-b6SmqJwll/view?usp=sharing'>
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
                        <a href='mailto:manolilakis@gmail.com?subject=&body=How can I help you?'><FontAwesomeIcon className='icons' icon={faPaperPlane} />manolilakis@gmail.com</a>
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