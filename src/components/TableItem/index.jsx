import React from 'react';

import './index.css';

const TableItem = ({bond, icon, asset, discount, price, purchased, buttonAction = () => {}}) => {
    return (
        <div className="bonded__table--item">
            <div className="bonded__table--elements">
                <div className="eth__inner bonded__table--icons">
                    <img src={icon} alt="icon" className="eth" />
                </div>

                <p className="bonded__table--value">
                    {bond}
                </p>
            </div>

            <div className="bonded__table--elements">
                <div className="bonded__table--icons">
                    <img src="/assets/img/logo-small.png" alt="logo" className="img" />
                </div>

                <p className="bonded__table--value">
                    {asset}
                </p>
            </div>

            <p className="bonded__table--value">
                {discount}
            </p>

            <p className="bonded__table--value">
                {price}
            </p>

            <div className="bonded__table--eth--inner">
                <p className="bonded__table--value">
                    {purchased}
                </p>

                <div className="eth__inner bonded__table--icon--inner">
                    <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                </div>
            </div>

            <div className="bonded__table--button--inner">
                <button className="button bonded__table--button" onClick={buttonAction}>
                    Bond
                </button>
            </div>
        </div>
    )
}

export default TableItem;