import React, { Component } from 'react';
import Resume from '../routes/resume/Resume.pdf';

class Navbar extends Component {

    render() {
        return(
            <div>
                <nav 
                    className="navbar navbar-expand-lg navbar-light bg-light">
                <h2>
                    <i 
                        className="fas fa-id-card">
                    </i> Cynthia Zhou
                </h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span 
                        className="navbar-toggler-icon" 
                    />
                </button>
                    <div   
                        className="collapse navbar-collapse" 
                        id="navbarNavAltMarkup">
                        <div 
                            className="navbar-nav">
                            <a 
                                className="nav-item nav-link" 
                                href="/"
                            > Main
                            </a>
                            <a 
                                className="nav-item nav-link" 
                                href={Resume}
                            > Resume
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
    
        )
    }
}

export default Navbar;