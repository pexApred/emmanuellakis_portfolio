import React from "react";
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Container, Col, Accordion } from 'react-bootstrap';

function About() {
    return (
        <>
            <Accordion defaultkey="0" className="resume" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="header-resume text-center">Resume</Accordion.Header>
                    <Accordion.Body className="body-resume">Click to view:{' '}
                        <a className="view" href="https://drive.google.com/file/d/1GeWC4Iuci2hD2w3w-BTioPpq_i12fMa_/view?usp=drive_link" target="_blank" rel="noreferrer">
                            
                            <FontAwesomeIcon className='faFile' icon={faFile} />
                        </a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default About;