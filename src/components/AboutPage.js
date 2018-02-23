import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
    <div className="container">
        <div className="aboutPage__container">
                
                {/*<div>
                    <img className="profilePic" src="/images/me2.jpg" alt={"image"} width="130" height="130"/>
                </div>*/}
                <h1 className="about__title">Zac Moss</h1>
                <p className="about__subtitle">Web Development</p>
                
                <div>
                    <p>Hi, my name is Zac. I am a web developer living in Lafayette, LA. A few of 
                    my projects can be viewed by clicking the Portfolio link above. If you are 
                    a business looking for a web presence or an employer looking to hire, you 
                    can reach me <Link to="/contact">here</Link>.</p>

                    <p>Skills include: HTML, CSS, Javascript, 
                        PHP, MySQL, JQuery, React, and Sass.
                    </p>

                    <h2 className="education__subtitle">Education</h2>
                    <p className="school">University of Louisiana at Lafayette</p>
                    <p className="major">Mass Communications</p>
                    <p className="bachelor">Bachelor of Arts</p>

                    <a href="/images/resume2018.pdf" download>Download Resume</a>
                    
                </div>
        </div>
    </div>
);

export default AboutPage;