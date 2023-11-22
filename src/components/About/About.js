import React from 'react';
import './About.css';
import { user } from '../Profile/Profile'

function About() {
    return (
        <div id="about" className="about-container">
            <React.Fragment>
                <h1 className="section-tab">Who I Am</h1>
                <h1 className="connecting-line"></h1>
            </React.Fragment>
            <React.Fragment>
                <div className='bio-container'>
                    <img
                        className='about-pic'
                        src={user.imageUrl}
                        alt='Photo of Emmanuel Lakis'
                        style={{
                            width: user.imageSize * 3.75,
                            height: user.imageSize * 3.75
                        }}
                    />
                    <div className='job-container'>
                        <div className="bio-item">
                            <h2>Full-Stack Developer</h2>
                            <p>
                                I am currently looking for roles in front-end, back-end, or full-stack development. My coding skills really took off after I finished a bootcamp at UNC Chapel Hill, where I got a solid grip on web development and coding basics. I know it is tough to break into tech without a lot of professional experience, so I am staying busy by working on my own projects, doing some freelance gigs, and pitching in on open-source projects. Through these experiences, I am building a strong portfolio and getting the practical coding experience I need.
                            </p>
                        </div>
                        <div className="bio-item">
                            <h2>Restaurateur & Chef</h2>
                            <p>
                                Growing up in the heart of a family-run restaurant, I developed a deep appreciation and respect for the culinary arts and the business of hospitality. Watching my parents build a thriving business from scratch, I learned the value of hard work, exceptional hospitality, and, of course, great food. Over my 10+ years in the industry, I've worn many hats — from managing kitchen operations to overseeing the entire restaurant. Taking over as Restaurateur, I've been at the helm of both the business and culinary aspects. My journey includes creatively integrating tech solutions into our operations, which notably boosted our revenue by 50%, and leading our team through challenging times, like pivoting during the COVID-19 pandemic. I'm proud to have maintained our tradition of quality while steering our business through growth and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

export default About;