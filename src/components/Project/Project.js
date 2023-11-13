import React, { useState } from "react";
import { Card, Button, Collapse, Row, Col } from 'react-bootstrap';
import './Project.css';

const projects = [
    {
        title: 'Wonderful World of dR. Slide: Riddle Book',
        description: '',
        image: '../wwofdrslide-screenshot.png',
        link: ''
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
        description: `This project underscores my proficiency in using CSS frameworks,
            integrating multiple server-side APIs, implementing client-side storage,
            and delivering an interactive and responsive UI. It exhibits my commitment
            to clean coding practices, clear documentation, and effective team
            collaboration, culminating in a successful deployment on GitHub Pages.`,
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
        image: '../LiteracyLane.png',
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