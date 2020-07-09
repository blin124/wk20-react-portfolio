import React, { Component } from 'react';

import phat from '../images/screenshots-of-html/phat.png';
import theFuture from '../images/screenshots-of-html/the-future.png';
import rfIndex from '../images/screenshots-of-html/index.png';
import rfContact from '../images/screenshots-of-html/contact.png';
import rfPortfolio from '../images/screenshots-of-html/portfolio.png';
import pwGen from '../images/screenshots-of-html/password-generator.png';


class Card extends Component {
    render() {
    return(
        <div className="card-div"> 
            <h3>Projects:</h3>
            {/* Password Generator */}
            <div className="card text-center"> 
                <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <img src={pwGen}/>
                    <p>
                        <a href="https://blin124.github.io/wk3-hw-password-generator/">Repository Link</a>
                    </p>
                    <p>
                        <a href="https://blin124.github.io/wk3-hw-password-generator/Develop/index.html">HTML Link</a>
                    </p>
                </div>
            </div>
            <div className="card text-center"> 
                <div className="card-body">
                    <h5 className="card-title">PHAT</h5>
                    <img src={phat}/>
                    <p>
                        <a href="https://github.com/Solmarnov/project-one">PHAT Repository</a>
                    </p>
                    <p>
                        <a href="https://nameless-peak-05510.herokuapp.com/">Physical Health Activity Tracker HTML</a>
                    </p>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">The Future</h5>
                    <img src={theFuture}/>
                    <p>
                        <a href="https://github.com/johnnyboysydney/The-Future">Repository</a>
                    </p>
                    <p>
                        <a href="https://johnnyboysydney.github.io/The-Future/">HTML</a>
                    </p>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Responsive Folio</h5>
                    <img src={rfIndex}/>
                    <img src={rfContact}/>
                    <img src={rfPortfolio}/>
                    <p>
                        <a href="https://github.com/blin124/wk2-hw-responsive-folio">Repository</a>
                    </p>
                    <p>
                        <a href="https://blin124.github.io/wk2-hw-responsive-folio/Assets/index.html#">HTML</a>
                    </p>
                </div>
            </div>
        </div>
    )
    }
}

export default Card;