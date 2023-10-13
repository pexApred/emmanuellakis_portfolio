import React from 'react';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const professionalData = [
    {
        date: 'Jan 2023 - Jul 2023',
        title: 'Full-Stack Coding Bootcamp', 
        location: 'University of North Carolina at Chapel Hill',
        text: 'Description or additional information goes here...',
        icon: {faGraduationCap},
        category: { tag: 'Education' },
        link: { url: 'https://github.com/pexApred', text: 'See Projects' },
    },
    {
        date: 'Nov 2021 - Jul 2023',
        title: 'Business Owner/Operator', 
        location: 'Pizza Time Inc',
        text: 'Operational and managerial responsibilities...',
        icon: 'fas fa-briefcase',
        category: { tag: 'Professional Experience' },
        link: { url: 'https://pizzatimesc.com', text: 'Visit Website' },
    },
    {
        date: 'Jul 2015 - Jan 2021',
        title: 'Co-Owner/Operator',
        location: 'Pizza Time Inc',
        text: 'Shared operational and managerial responsibilities...',
        icon: 'fas fa-briefcase',
        category: { tag: 'Professional Experience' },
        link: { url: 'https://pizzatimesc.com', text: 'Visit Website' },
    },    
    {
        date: 'Jan 2017 - Jul 2019',
        title: "Associate's Degree in Culinary Arts", 
        location: 'Johnson & Wales University',
        text: 'Achieved excellence in culinary arts and gained practical experience...',
        icon: 'fas fa-graduation-cap',
        category: { tag: 'Education' },
        link: { url: 'https://github.com/pexApred', text: 'See Projects' },
    },
    {
        date: 'Jul 2013 - Jan 2015',
        title: 'General Manager & Chef', 
        location: 'Pizza Time Inc',
        text: 'Managed daily operations and led the kitchen team...',
        icon: 'fas fa-briefcase',
        category: { tag: 'Professional Experience'},
        link: { url: 'https://pizzatimesc.com', text: 'Visit Website' },
    },
    {
        date: 'Aug 2009 - Jun 2013',
        title: "Bachelor's Degree in Chemistry", 
        location: 'Wofford College',
        text: 'Acquired a solid foundation in Chemistry and related disciplines...',
        icon: 'fas fa-graduation-cap',
        category: { tag: 'Education' },
        link: { url: 'https://github.com/pexApred', text: 'See Projects' },
    }
];

const Timeline = ({ professionalData }) => (
    <section className="timeline py-5">
        {professionalData.map((data, idx) => (
            <div className='timeline-item' key={idx}>
                <div className="timeline-icon-container">
                    <FontAwesomeIcon icon={data.icon === 'fas fa-briefcase' ? faBriefcase : faGraduationCap} className="timeline-icon" />
                </div>
                <div className="timeline-content">
                    <h5 className="fw-bold">
                        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
                            {data.title}
                        </a>
                    </h5>
                    <p className="text-muted mb-2 fw-bold">{data.date}</p>
                    {/* <p className="text-muted">{data.text}</p> */}
                </div>
            </div>
        ))}
    </section>
);

function Resume() {
    return (
        <div id='resume' className="resume-container">
            <React.Fragment>
                <h1 className="section-tab">Experience & Education</h1>
                <h1 className="connecting-line"></h1>
            </React.Fragment>  
            <Timeline professionalData={professionalData} />
        </div>
    );
}

export default Resume;
