import React from "react";

import "./index.css";

import Header from "../../components/Header";
import { Arrow, Clock } from "../../components/Icons";
import TableItem from "../../components/TableItem";
import Modal from "../../components/Modal";
import InputBlock from "../../components/InputBlock";

const Market = () => {
    const [bondModal, setBondModal] = React.useState(false);

    return (
        <>
            <Header title="Bonded" />

            <div className="bonded__content">
                <div className="bonded__total--inner">
                    <p className="bonded__total--title">
                        Total Liquidity Bonded
                    </p>

                    <div className="bonded__total--val--inner">
                        <p className="bonded__total--val">1,200.34</p>

                        <div className="eth__inner bonded__total--eth--inner">
                            <img
                                src="/assets/img/eth.svg"
                                alt="eth"
                                className="eth"
                            />
                        </div>
                    </div>
                </div>

                <div className="bonded__table">
                    <div className="bonded__table--item">
                        <p className="bonded__table--title">
                            Arbitrum One Bonds
                        </p>

                        <p className="bonded__table--title">Payout asset</p>

                        <p className="bonded__table--title">Discount</p>

                        <p className="bonded__table--title">Bond Price</p>

                        <p className="bonded__table--title">Purchased</p>
                    </div>

                    <TableItem
                        bond="ETH"
                        icon="/assets/img/eth.svg"
                        asset="$FRGE"
                        discount="-21.91%"
                        price="$856.93"
                        purchased="23.90"
                        buttonAction={() => setBondModal(true)}
                    />
                    <TableItem
                        bond="wsETH"
                        icon="/assets/img/cicle.svg"
                        asset="$FRGE"
                        discount="-27.61%"
                        price="$848.29"
                        purchased="15.15"
                    />
                    <TableItem
                        bond="ETH"
                        icon="/assets/img/eth.svg"
                        asset="$FRGE"
                        discount="-21.78%"
                        price="$856.48"
                        purchased="52.78"
                    />
                    <TableItem
                        bond="GMX"
                        icon="/assets/img/gmx.svg"
                        asset="$FRGE"
                        discount="-24.02"
                        price="$856.93"
                        purchased="23.90"
                    />
                </div>

                <div className="bonded__table">
                    <div className="bonded__table--item">
                        <p className="bonded__table--title">Ethereum Bonds</p>

                        <p className="bonded__table--title">Payout asset</p>

                        <p className="bonded__table--title">Discount</p>

                        <p className="bonded__table--title">Bond Price</p>

                        <p className="bonded__table--title">Purchased</p>
                    </div>

                    <TableItem
                        bond="ETH"
                        icon="/assets/img/eth.svg"
                        asset="$FRGE"
                        discount="-12.32%"
                        price="$863.44"
                        purchased="14.57"
                    />
                    <TableItem
                        bond="ankrETH"
                        icon="/assets/img/cicle.svg"
                        asset="$FRGE"
                        discount="-"
                        price="-"
                        purchased="15.15"
                    />
                </div>

                <div className="bonded__items--wrapper">
                    <div className="bonded__items">
                        <div className="bonded__item">
                            <p className="bonded__item--title">
                                Strengthen your holdings
                            </p>

                            <p className="bonded__item--text">
                                Enhance your holdings by exchanging available
                                tokens for governance tokens at a discounted
                                rate through bonds.
                            </p>

                            <div className="bonded__item--imgs">
                                <div className="bonded__item--imgs--content">
                                    <div className="eth__inner bonded__item--eth--inner">
                                        <img
                                            src="/assets/img/eth.svg"
                                            alt="eth"
                                            className="eth"
                                        />
                                    </div>

                                    <img
                                        src="/assets/img/logo-small.png"
                                        alt="logo"
                                        className="bonded__item--img"
                                    />
                                </div>

                                <p className="bonded__item--imgs--title">
                                    You Give
                                </p>
                            </div>
                        </div>

                        <div className="bonded__item">
                            <p className="bonded__item--title">
                                Vesting Period
                            </p>

                            <p className="bonded__item--text">
                                Once you have received a Bond, you must wait
                                until the designated vesting period is completed
                                before you can activate it.
                            </p>

                            <div className="bonded__item--imgs">
                                <div className="bonded__item--imgs--content">
                                    <Clock className="bonded__item--img" />
                                </div>

                                <p className="bonded__item--imgs--title">
                                    Vested over
                                </p>
                            </div>
                        </div>

                        <div className="bonded__item">
                            <p className="bonded__item--title">
                                Above-market-rate ROI
                            </p>

                            <p className="bonded__item--text">
                                To receive a above-market-rate return on
                                investment, locate the Bond of your choice that
                                has a favorable discount rate.
                            </p>

                            <div className="bonded__item--imgs">
                                <div className="bonded__item--imgs--content">
                                    <img
                                        src="/assets/img/logo-small.png"
                                        alt="logo"
                                        className="bonded__item--img"
                                    />
                                </div>

                                <p className="bonded__item--imgs--title">
                                    You Get
                                </p>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="bonded__docs">
                        Road the Docs
                        <span className="bonded__docs--arrow">
                            <Arrow />
                        </span>
                    </a>
                </div>
            </div>

            <Modal active={bondModal} setActive={setBondModal} big>
                <div className="modal__bond">
                    <p className="modal__bond--title">
                        ETH
                    </p>

                    <div className="modal__bond--content">
                        <div className="modal__bond--price--inner">
                            <div className="modal__bond--price--item">
                                <div className="modal__bond--price--block">
                                    <p className="modal__bond--price--title">
                                        Bond price
                                    </p>

                                    <p className="modal__bond--price--value">
                                        $511.621
                                    </p>
                                </div>

                                <div className="modal__bond--price--block">
                                    <p className="modal__bond--price--title">
                                        Market price
                                    </p>

                                    <p className="modal__bond--price--value">
                                        $795.621
                                    </p>
                                </div>
                            </div>

                            <div className="modal__bond--price--item">
                                <div className="modal__bond--step">
                                    <div className="eth__inner modal__bond--step--eth--inner">
                                        <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                                    </div>

                                    <p className="modal__bond--step--text">
                                        You Give
                                    </p>
                                </div>

                                <div className="modal__bond--step">
                                    <Clock className="modal__bond--step--icon" />

                                    <p className="modal__bond--step--text">
                                        Vested over
                                    </p>
                                </div>

                                <div className="modal__bond--step">
                                    <img src="/assets/img/logo-small.png" alt="icon" className="modal__bond--step--icon" />

                                    <p className="modal__bond--step--text">
                                        You Get
                                    </p>
                                </div>
                            </div>
                        </div>

                        <InputBlock />

                        <button className="button modal__bond--button">
                            Connect Wallet
                        </button>

                        <div className="modal__bond--total--content">
                            <div className="modal__bond--total--item">
                                <p className="modal__bond--total--value">
                                    Your Balance
                                </p>

                                <p className="modal__bond--total--value">
                                    1412
                                </p>
                            </div>

                            <div className="modal__bond--total--item">
                                <p className="modal__bond--total--value">
                                    You Will Get
                                </p>

                                <p className="modal__bond--total--value">
                                    0
                                </p>
                            </div>

                            <div className="modal__bond--total--item">
                                <p className="modal__bond--total--value">
                                    Max You Can Buy
                                </p>

                                <p className="modal__bond--total--value">
                                    30
                                </p>
                            </div>

                            <div className="modal__bond--total--item">
                                <p className="modal__bond--total--value">
                                    Discount
                                </p>

                                <p className="modal__bond--total--value">
                                    2.5%
                                </p>
                            </div>

                            <div className="modal__bond--total--item">
                                <p className="modal__bond--total--value">
                                    Vesting
                                </p>

                                <p className="modal__bond--total--value">
                                    2 days
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Market;
