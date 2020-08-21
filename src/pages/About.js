import React from 'react'

import Icon from '@mdi/react';
import {mdiGithub} from '@mdi/js';

function About() {
    return (
        <div className="container"> 
            <div className="detail_part">
                <h2>About This App</h2>
                <p>Useful sites is a MERN Stack based application where people can share a common list of useful URLs.</p>
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
                    Frontend Source Code
                </a>

                <a href="https://github.com/AyushmanBilasThakur/useful_sites_backend" target="_blank" rel="noopener noreferrer" className="btn edit">
                    <Icon 
                        path={mdiGithub}
                        size={0.7}
                    />
                    &nbsp;
                    Backend Source Code
                </a>
            </div>
        </div>
    )
}

export default About
