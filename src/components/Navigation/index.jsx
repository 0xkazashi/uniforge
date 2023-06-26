import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import {Dashboard, Market, Stake, Launch} from '../Icons';

const Navigation = () => {
    return (
        <div className="navigation">
            <Link to="/" className="navigation__link">
                <Dashboard />

                Dashboard
            </Link>

            <Link to="/market" className="navigation__link">
                <Market />

                Market
            </Link>

            <Link to="/stake" className="navigation__link">
                <Stake />

                Stake
            </Link>

            <Link to="/launch" className="navigation__link">
                <Launch />

                Launch
            </Link>
        </div>
    )
}

export default Navigation;