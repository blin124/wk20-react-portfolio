import React from 'react';

import czhou1 from '../images/czhou.jpg';
import czhou2 from '../images/czhou2.jpg';

import '../App.css';

function Image() {
    return(
        <div className="jumbotron">
            <div
                id="carouselExampleIndicators"
                className="profile-image carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                    />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img
                        src={czhou1}
                        className="d-block fixed"
                        alt="portrait-one"
                    />
                    </div>
                    <div className="carousel-item">
                    <img
                        src={czhou2}
                        className="d-block fixed"
                        alt="portrait-two"
                    />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="lp-" />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>
    )
}

export default Image;