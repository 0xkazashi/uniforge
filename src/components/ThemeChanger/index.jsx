import React from 'react';

import './index.css';

const ThemeChanger = () => {
    const changeTheme = () => {
        const body = document.body.classList;

        if(body.contains("dark")){
            body.remove("dark");
            body.add("light");
        }
        else{
            body.remove("light");
            body.add("dark");
        }
    }

    return (
        <div className="changer__inner">
            <p className="changer__status">Light</p>

            <div className="changer__content" onClick={changeTheme}>
                <img src="/assets/img/sun.svg" alt="sun" className="changer__content--icon" />

                <img src="/assets/img/moon.svg" alt="moon" className="changer__content--icon" />
            </div>

            <p className="changer__status">Dark</p>
        </div>
    )
}

export default ThemeChanger;