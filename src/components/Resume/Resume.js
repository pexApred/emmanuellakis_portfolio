import React from 'react';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const professionalData = [
    {
        date: 'Jan 2023 - Jul 2023',
        title: 'Full-Stack Coding Bootcamp',
        location: 'University of North Carolina at Chapel Hill',
        text: 'Practiced Agile methodology while developing several full-stack applications using JavaScript, React, Node.js, Express.js, SQL, MySQL and MongoDB.',
        icon: { faGraduationCap },
        category: { tag: 'Education' },
        link: { url: 'https://github.com/pexApred', text: 'See Projects' },
    },
    {
        date: 'Nov 2021 - Jul 2023',
        title: 'Business Owner/Operator',
        location: 'Pizza Time Inc',
        text: 'By integrating software development into restaurant operations, I significantly increased revenue by 50% and enhanced customer satisfaction and sales through a streamlined operational approach.',
        icon: 'fas fa-briefcase',
        category: { tag: 'Professional Experience' },
        link: { url: 'https://pizzatimesc.com', text: 'Visit Website' },
    },
    {
        date: 'Jul 2015 - Jan 2021',
        title: 'Co-Owner/Operator',
        location: 'Pizza Time Inc',
        text: 'I effectively managed the Toast, Inc POS system to enhance efficiency and customer engagement, increasing sales by 25% through strategic initiatives and steering the business through the COVID-19 pandemic by transitioning to a takeout-only model that prioritized staff safety and ensured continuous operations.',
        icon: 'fas fa-briefcase',
        category: { tag: 'Professional Experience' },
        link: { url: 'https://pizzatimesc.com', text: 'Visit Website' },
    },
    {
        date: 'Jan 2017 - Jul 2019',
        title: "Associate's Degree in Culinary Arts",
        location: 'Johnson & Wales University',
        text: 'Achieved excellence in culinary arts and gained practical experience to enhance procedures and operations of Pizza Time, Inc.',
        icon: 'fas fa-graduation-cap',
        category: { tag: 'Education' },
        link: { url: 'https://github.com/pexApred', text: 'See Projects' },
    },
    {
        date: 'Jul 2013 - Jan 2015',
        title: 'General Manager & Chef',
        location: 'Pizza Time Inc',
        text: 'I excelled in leading and training teams in a high-pressure kitchen environment, demonstrating robust management and problem-solving skills to meet tight deadlines and maintain customer satisfaction.',
        icon: 'fas fa-briefcase',
        category: { tag: 'Professional Experience' },
        link: { url: 'https://pizzatimesc.com', text: 'Visit Website' },
    },
    {
        date: 'Aug 2009 - Jun 2013',
        title: "Bachelor's Degree in Chemistry",
        location: 'Wofford College',
        text: 'Acquired a solid foundation in Chemistry and related disciplines. Acquired and built independent learning skills and practices that have propelled my continuous learning journey.',
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
                    <h5>
                        <a href={data.link.url} target="_blank" rel="noopener noreferrer" className='resume-location'>
                            {data.location}
                        </a>
                    </h5>
                    <p className="text-muted mb-2 fw-bold"><span>{data.date}</span></p>
                    {/* <p className="text-muted">{data.text}</p> */}
                    <p className='resume-title'>
                            {data.title}
                    </p>
                    <p className='resume-text'>
                            {data.text}
                    </p>
                </div>
            </div>
        ))}
    </section>
);

function Resume() {
    return (
        <div id='timeline' className="resume-container">
            <React.Fragment>
                <h1 className="section-tab">Professional Timeline</h1>
                <h1 className="connecting-line"></h1>
            </React.Fragment>
            <Timeline professionalData={professionalData} />
        </div>
    );
}

export default Resume;
