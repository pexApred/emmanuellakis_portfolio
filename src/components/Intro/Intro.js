import React, { useEffect } from "react";
import './Intro.css';
import Typed from "typed.js";

function Intro() {

    useEffect(() => {
        const titleOptions = {
            strings: [
                "Full-Stack Software Engineer",
            ],
            typeSpeed: 50,
        };

        const typed = new Typed(".typed", titleOptions);

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const skills = {
            strings: [
                "",
                "",
                "",
                "JavaScript",
                "HTML5 and CSS3+",
                "React",
                "Node.js",
                "Express.js",
                "SQL",
                "MySQL",
                "MongoDB",
                "RESTful API Development",
                "JSON",
                "AJAX",
                "Git and CI/CD",
                "GitHub",
                "Agile Methodology",
                "Object-Oriented Programming"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        const typedSkills = new Typed(".typedSkills", skills);

        return () => {
            typedSkills.destroy();
        };
    }, []);

    return (
        <div className="hero-container">
            <div className="hero-section">
                <h1>Emmanuel Lakis</h1>
                <div className="typed-container">
                    <p><span className="typed"></span>{' '} </p>
                    <p>skilled in <span className="typedSkills"></span></p>
                </div>
            </div>
        </div>
    );
}

export default Intro;