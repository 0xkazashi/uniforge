import React from 'react';

import './index.css';

const StatsItem = ({title, value, eth = false}) => {
    return (
        <div className="stats__item">
            <p className="stats__item--title">
                {title}
            </p>

            <div className="stats__item--wrap">
                <p className="stats__item--value">{value}</p>

                {eth
                ? <div className="eth__inner stats__item--eth">
                    <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                </div>
                : <img src="/assets/img/logo-small.png" alt="logo" className="stats__item--coin" />}
            </div>
        </div>
    )
}

export default StatsItem;