import React from 'react';

import './index.css';

const InputBlock = ({value, setValue, placeholder = "Amount", tyche = false}) => {
    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="input__block">
            <div className="input__block--item">
                <p className="input__block--placeholder">{placeholder}</p>

                <button className="button input__block--button">
                    Max
                </button>
            </div>

            <div className="input__block--item">
                <input type="text" className="input input__block--input" placeholder="0.0" value={value} />

                <div className="input__block--cur">
                    {tyche
                    ? <div className="eth__inner input__block--eth--inner">
                        <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                    </div>
                    : <img src="/assets/img/logo-small.png" alt="logo" className="input__block--cur--icon" />}

                    {tyche ? "$vPAYFE" : "$PAYFE"}
                </div>
            </div>
        </div>
    )
}

export default InputBlock;
