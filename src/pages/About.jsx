import React from 'react'

import Icon from '@mdi/react';
import {mdiGithub} from '@mdi/js';

import "../styles/AboutPage.css";

function About() {
    return (
        <div className="container"> 
            <div className="detail_part">
                <h2>About This App</h2>
                <p>This is a MERN stack based application which demonstrates my skills with a popular frontend framework React, also a popular backend framework Express.js and a noSQL database MongoDB (although the DB is hosted private for security reasons!)</p>
            </div>

            <h2>Some Important Links</h2>
            <p>You are welcome to check out the source code of this application in these links:</p>
            <div className="cta_container">

                <a href="https://github.com/AyushmanBilasThakur/useful_sites_frontend" target="_blank" rel="noopener noreferrer" className="btn">
                    <Icon 
                        path={mdiGithub}
                        size={0.7}
                    />
                    &nbsp;
                    <span>Frontend Source Code</span>
                </a>

                <a href="https://github.com/AyushmanBilasThakur/useful_sites_backend" target="_blank" rel="noopener noreferrer" className="btn edit">
                    <Icon 
                        path={mdiGithub}
                        size={0.7}
                    />
                    &nbsp;
                    <span>Backend Source Code</span>
                </a>
            </div>
        </div>
    )
}

export default About
