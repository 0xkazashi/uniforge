import React from 'react';

import './index.css';

import { Arrow } from '../Icons';

const ConnectItem = ({text, icon, lightIcon}) => {
    return (
        <div className="connect__item">
            <div className="connect__item--wrap">
                <div className="connect__item--wrap--icon--inner">
                    <img src={icon} alt="icon" className={`connect__item--wrap--icon${lightIcon ? " black" : ""}`} />
                    {lightIcon && <img src={lightIcon} alt="icon" className="connect__item--wrap--icon light" />}
                </div>

                <p className="connect__item--wrap--text">
                    {text}
                </p>
            </div>

            <button className="button connect__item--button">
                <Arrow />
            </button>
        </div>
    )
}

export default ConnectItem;