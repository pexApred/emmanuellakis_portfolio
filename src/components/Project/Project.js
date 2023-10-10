import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faBook, faRoute } from '@fortawesome/free-solid-svg-icons';
import { Modal, Carousel } from 'react-bootstrap';
import './Project.css';

    const projects = [
        {
            title: 'Literacy Lane: Interactive Front-End',
            description: `This project underscores my proficiency in using CSS frameworks,
            integrating multiple server-side APIs, implementing client-side storage,
            and delivering an interactive and responsive UI. It exhibits my commitment
            to clean coding practices, clear documentation, and effective team
            collaboration, culminating in a successful deployment on GitHub Pages.`,
            image: '../Screenshot 2023-05-09 at 9.04.11 PM.png',
            link: 'https://pexapred.github.io/P1-G7-Literacy-Lane/index.html'
        },
        {
            title: 'codeThread: Interactive Full-Stack',
            description: `This project underscores my proficiency in using CSS frameworks,
            integrating multiple server-side APIs, implementing client-side storage,
            and delivering an interactive and responsive UI. It exhibits my commitment
            to clean coding practices, clear documentation, and effective team
            collaboration, culminating in a successful deployment on GitHub Pages.`,
            image: '../Screenshot 2023-05-09 at 8.44.44 PM.png',
            link: 'https://pacific-inlet-31648.herokuapp.com/'
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
            image: '../Screenshot 2023-07-15 at 1.59.46 PM.png',
            link: 'https://journeyverse-2c53482d7e17.herokuapp.com/'
        }
    ]

    function CarouselItem({ project, handleShow }) {
        return (
            <Carousel.Item>
                <div className="carousel-content">
                    <a href={project.link} aria-label="View project details">
                        <img src={project.image} className="card-Image-top" alt={`${project.title} Website link`} />
                    </a>
                    <Carousel.Caption>
                        <button onClick={() => handleShow(project)}>
                            View Details
                        </button>
                        <h3 className='title'>{project.title}</h3>
                        <p>{project.description}</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        );
    }

    function Project() {
        const [showModal, setShowModal] = useState(false);
        const [selectedProject, setSelectedProject] = useState({});
    
        function handleClose() {
            setShowModal(false);
        }
    
        function handleShow(project) {
            setSelectedProject(project)
            setShowModal(true);
        }
    
        return (
            <div className="carousel-container">
                <h1 className="section-tab">Projects</h1>
                <h1 className="connecting-line"></h1>
    
                <Carousel className="carousel">
                {projects.map((project, index) => (
                    <Carousel.Item key={index}>
                        <div className="carousel-content">
                            <a href={project.link} aria-label="View project details">
                                <img src={project.image} className="card-Image-top" alt={`${project.title} Website link`} />
                            </a>
                            <Carousel.Caption>
                                <button onClick={() => handleShow(project)}>
                                    View Details
                                </button>
                                {/* <h3 className='title'>{project.title}</h3>
                                <p>{project.description}</p> */}
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
    
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedProject.description}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }    

export default Project;