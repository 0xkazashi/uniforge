import React from 'react';

import './index.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__img">
                <img src="/assets/img/logo-small.png" alt="logo" className="img" />
            </div>

            <div className="preloader__squares">
                <div className="preloader__square"></div>
                <div className="preloader__square"></div>
                <div className="preloader__square"></div>
                <div className="preloader__square"></div>
            </div>
        </div>
    )
}

export default Preloader;