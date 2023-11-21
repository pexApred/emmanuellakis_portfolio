import React, { useState } from "react";
import { Card, Button, Collapse, Row, Col } from 'react-bootstrap';
import './Project.css';

const projects = [
    {
        title: 'The Wonderful World of dR. Slide: Riddle Book',
        description: `Welcome to The Wonderful World of Dr. Slide! 
        To get started, please create a username and password in order to access the site. 
        From there, you will be able to solve the riddles and see how well you can do overall. Need help? You can ask for a hint and then try again. 
        Alas, some are quite difficult so if the answer still evades you then click "I Give Up" to see the solution. 
        It is highly encouraged that you try for a while before giving up as some require quite a lot of thought before the answer may become clearer. On this site, you will be also able to see your own personal statistics with regards to your success rate on the riddles. 
        Are you amongst the best of the best? Your username will proudly be displayed on the Leader Board for all to see. 
        Regardless of your success, please enjoy the process and confort in knowing you are exercising your brain.`,
        image: '../wwofdrslide-screenshot.png',
        link: 'https://github.com/pexApred/WWofDrSlide.git'
    },
    {
        title: 'JourneyVerse: Interactive MERN Stack',
        description: `This project demonstrates my ability to design and implement a scalable,
            user-focused MERN stack single-page application. It features a MongoDB
            database with a GraphQL API and a React front-end. The application is
            deployed on Heroku, includes user authentication using JWT, and protects
            sensitive information on the server. The project emphasizes collaborative
            skills, problem-solving, and the ability to work with real-world data to
            solve user-focused problems.`,
        image: '../JourneyVerse-screenshot.png',
        link: 'https://journeyverse-2c53482d7e17.herokuapp.com/'
    },
    {
        title: 'codeThread: Interactive Full-Stack',
        description: `This platform allows users to purchase bespoke cohort t-shirts, 
        offering customization options like cohort selection, shirt size, and color, 
        thereby personalizing each garment. Key features of this project include a RESTful 
        API built with Node.js and Express.js, a user-friendly interface rendered via 
        Handlebars.js, and a robust MySQL database managed through Sequelize ORM. We 
        ensured responsive design for optimal user experience across devices, implemented 
        authentication for security, and utilized environment variables to protect 
        sensitive data. This project not only showcases technical prowess in creating 
        a full-stack application but also embodies our dedication to creating a product 
        that celebrates academic achievements and cohort solidarity.`,
        image: '../codeThread.png',
        link: 'https://pacific-inlet-31648.herokuapp.com/'
    },
    {
        title: 'Literacy Lane: Interactive Front-End',
        description: `This project underscores my proficiency in using CSS frameworks,
            integrating multiple server-side APIs, implementing client-side storage,
            and delivering an interactive and responsive UI. It exhibits my commitment
            to clean coding practices, clear documentation, and effective team
            collaboration, culminating in a successful deployment on GitHub Pages.`,
        image: '../Literacy-Lane-Update.png',
        link: 'https://pexapred.github.io/P1-G7-Literacy-Lane/index.html'
    },
    {
        title: 'Pizza Time Inc: Created with Wix UI',
        description: '',
        image: '../pizzaTime.png',
        link: 'https://www.pizzatimesc.com/'
    }
]

function ProjectCard({ project }) {
    const [open, setOpen] = useState(false);

    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100">
                <Card.Img variant="top" src={project.image} alt={`${project.title} screenshot`} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="outline-primary"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        alt='View Details Button'
                    >
                        View Details
                    </Button>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary"
                    >
                        Visit Project
                    </a>
                </Card.Footer>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        {project.description}
                    </div>
                </Collapse>
            </Card>
        </Col>
    );
}

function Project() {
    const [selectedProject, setSelectedProject] = useState({});

    function handleShow(project) {
        setSelectedProject(project)
        // setShowModal(true);
    }

    return (
        <div id='projects' className="projects-container">
            <React.Fragment>
                <h1 className="section-tab">My Projects</h1>
                <h1 className="connecting-line"></h1>
            </React.Fragment>
            <Row className="project-item">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} handleShow={handleShow} />
                ))}
            </Row>
        </div>
    );
}

export default Project;