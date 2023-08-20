import React from "react";
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faBook, faRoute } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

function Project() {
    return (
        <Accordion defaultkey="0" className="work" id="work" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header className="work-header text-center">My Work</Accordion.Header>
                <Accordion.Body className="work-body">
                    <Container className='container'>
                        <Row className="row">
                            <Col className="col" xs={12} sm={6} md={4}>
                                <Card className="card" >
                                    <a href="https://pexapred.github.io/P1-G7-Literacy-Lane/index.html" aria-label="View project details">
                                        <Card.Img
                                            src="../Screenshot 2023-05-09 at 9.04.11 PM.png"
                                            className="card-Image-top"
                                            alt="Literacy Lane Website link"
                                         />
                                    </a>
                                    <Card.Body className="card-body">
                                        <Card.Title className='title'>Literacy Lane: Interactive Front-End</Card.Title>
                                        <Card.Text>
                                            This project underscores my proficiency in using CSS frameworks,
                                            integrating multiple server-side APIs, implementing client-side storage,
                                            and delivering an interactive and responsive UI. It exhibits my commitment
                                            to clean coding practices, clear documentation, and effective team
                                            collaboration, culminating in a successful deployment on GitHub Pages.
                                        </Card.Text>
                                        {/* <Button href="https://pexapred.github.io/P1-G7-Literacy-Lane/index.html"
                                        className="btn btn-warning card-text" type="submit" id="book">
                                        <FontAwesomeIcon className='faIcon' icon={faBook} />
                                    </Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col" xs={12} sm={6} md={4}>
                                <Card className="card">
                                    <a href="https://pacific-inlet-31648.herokuapp.com/" aria-label="View project details">
                                        <Card.Img src="../Screenshot 2023-05-09 at 8.44.44 PM.png"
                                            className="card-Image-top"
                                            alt="codeThread Website Link" />
                                    </a>
                                    <Card.Body className="card-body">
                                        <Card.Title className='title'>codeThread: Interactive Full-Stack</Card.Title>
                                        <Card.Text>
                                            This project demonstrates my ability to build a full-stack application using Node.js,
                                            Express.js, Handlebars.js, and MySQL with Sequelize ORM. It includes user authentication,
                                            responsive and polished UI, and adherence to MVC paradigm. The application, deployed on
                                            Heroku, showcases my skills in creating RESTful APIs, managing databases, and protecting
                                            sensitive information with environment variables.
                                        </Card.Text>
                                        {/* <Button href="https://pacific-inlet-31648.herokuapp.com/" className="btn btn-warning card-text"
                                        type="submit" id="shirt">
                                        <FontAwesomeIcon className='faIcon' icon={faShirt} />
                                    </Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col" xs={12} sm={6} md={4}>
                                <Card className="card">
                                    <a href="https://journeyverse-2c53482d7e17.herokuapp.com/" aria-label="View project details">
                                        <Card.Img src="../Screenshot 2023-07-15 at 1.59.46 PM.png"
                                            className="card-Image-top"
                                            alt="JourneyVerse Website Link" />
                                    </a>
                                    <Card.Body className="card-body">
                                        <Card.Title className='title'>JourneyVerse: Interactive MERN Stack</Card.Title>
                                        <Card.Text>
                                            This project demonstrates my ability to design and implement a scalable,
                                            user-focused MERN stack single-page application. It features a MongoDB
                                            database with a GraphQL API and a React front-end. The application is
                                            deployed on Heroku, includes user authentication using JWT, and protects
                                            sensitive information on the server. The project emphasizes collaborative
                                            skills, problem-solving, and the ability to work with real-world data to
                                            solve user-focused problems.
                                        </Card.Text>
                                        {/* <Button href="https://journeyverse-2c53482d7e17.herokuapp.com/" className="btn btn-warning card-text"
                                        type="submit" id="route">
                                        <FontAwesomeIcon className='faIcon' icon={faRoute} />
                                    </Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Project;