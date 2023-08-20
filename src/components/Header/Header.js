import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Sine } from 'gsap/gsap-core';
import './Header.css';

function Header() {
    const iconsRef = useRef(null);

    useEffect(() => {
        const icons = iconsRef.current.childNodes;
        const duration = 2; // duration of the animation in seconds

        icons.forEach((icon, index) => {
            gsap.to(icon, {
                duration: duration,
                x: "100px",
                y: "100px",
                repeat: -1, // repeat indefinitely
                yoyo: true, // go back and forth
                ease: Sine.easeInOut, // use a sine wave for the easing function
                delay: index * 0.1 // delay each icon by 100ms more than the previous
            });
        });
    }, []);

    return (
        <>
            <header className="header">
                <div className="icons" ref={iconsRef}>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-nodejs-plain"></i>
                    <i className="devicon-react-original-wordmark"></i>
                    <i className="devicon-mysql-plain-wordmark"></i>
                    <i className="devicon-mongodb-plain"></i>      
                    <i className="devicon-express-original"></i>
                    <i className="devicon-git-plain"></i>
                    <i className="devicon-jest-plain"></i>
                    <i className="devicon-npm-original-wordmark"></i>
                    <i className="devicon-sequelize-plain"></i>
                    <i className="devicon-vscode-plain"></i>
                </div>
            </header>
        </>
    );
}

export default Header;