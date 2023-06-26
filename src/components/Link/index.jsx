import React from 'react';

import './index.css';

import { Arrow } from '../Icons';

const Link = ({text, href = "#"}) => {
    return (
        <a href={href} className="launch__link">
            {text}

            <span className="launch__link--arrow">
                <Arrow />
            </span>
        </a>
    )
}

export default Link;