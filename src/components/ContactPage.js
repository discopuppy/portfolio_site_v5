import React from 'react';

const ContactPage = () => (
    <div className="contactPage__container">
        <h1>Contact Page</h1>
        <div style={{ marginTop: '3rem' }}>
            <a href="mailto:zachary.moss@ymail.com" className="chill"><p style={{ fontSize: '20px' }}>zachary.moss@ymail.com</p></a>
            <p>
                <span>
                    <a href="https://github.com/zacmoss" className="chill" style={{ marginRight: '1rem', fontSize: '18px' }}>
                    Github
                    </a>
                </span>
                 | 
                <span>
                    <a href="https://www.linkedin.com/in/zac-moss-40330351" className="chill" style={{ marginLeft: '1rem', fontSize: '18px' }}>
                    LinkedIn
                    </a>
                </span>
            </p>
            <p style={{ fontSize: '20px' }}>337.326.8545</p>
            <a href="/images/resume2018.pdf" download>Download Resume</a>
        </div>
    </div>
);

export default ContactPage;