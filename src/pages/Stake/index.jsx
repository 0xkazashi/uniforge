import React from 'react';

import './index.css';

import Header from '../../components/Header';
import InputBlock from '../../components/InputBlock';
import { Wallet } from '../../components/Icons';

const Stake = () => {
    const [tab, setTab] = React.useState("stake");
    const [formLocked, setFormLocked] = React.useState(true);

    return (
        <>
            <Header title="" />

            <div className="stake__content">
                <div className="stake__info">
                    <div className="stake__info--item">
                        <p className="stake__title">
                            Stake
                        </p>

                        <div className="stake__info--tags">
                            <div className="stake__info--tag">
                                wstETH: $81.54
                            </div>

                            <div className="stake__info--tag">
                                $vFRGE: 217% - 277.82%
                            </div>

                            <div className="stake__info--tag">
                                5% GMX + 3% wstETH
                            </div>
                        </div>
                    </div>

                    <div className="stake__info--points">
                        <div className="stake__info--point">
                            <p className="stake__info--point--title">
                                TVL
                            </p>

                            <div className="stake__info--point--wrap">
                                <p className="stake__info--point--value">
                                    4,964.37
                                </p>

                                <div className="eth__inner stake__info--point--eth">
                                    <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                                </div>
                            </div>
                        </div>

                        <div className="stake__info--point">
                            <p className="stake__info--point--title">
                                Staked $FRGE
                            </p>

                            <div className="stake__info--point--wrap">
                                <p className="stake__info--point--value">
                                    1,799.32
                                </p>

                                <img src="/assets/img/logo-small.png" alt="logo" className="stake__info--point--logo" />
                            </div>
                        </div>

                        <div className="stake__info--point">
                            <p className="stake__info--point--title">
                                Locked $FRGE
                            </p>

                            <div className="stake__info--point--wrap">
                                <p className="stake__info--point--value">
                                    1,799.32
                                </p>

                                <img src="/assets/img/logo-small.png" alt="logo" className="stake__info--point--logo" />
                            </div>
                        </div>

                        <div className="stake__info--point">
                            <p className="stake__info--point--title">
                                $FRGE Circulating Supply
                            </p>

                            <div className="stake__info--point--wrap">
                                <p className="stake__info--point--value">
                                    12,799.32
                                </p>

                                <img src="/assets/img/logo-small.png" alt="logo" className="stake__info--point--logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stake__stats">
                    <div className="stake__wrapper">
                        <p className="stake__stats--title">
                            Your Stats
                        </p>

                        <button className="button stake__stats--button">
                            Claim Rewards
                        </button>
                    </div>

                    <div className="stake__stats--content">
                        <div className="stake__stats--item">
                            <p className="stake__stats--item--title">
                                Staked
                            </p>

                            {/* <div className="stake__stats--skeleton"></div> */}
                            <div className="stake__stats--item--val--inner">
                                <p className="stake__stats--item--val">
                                    12
                                </p>

                                <img src="/assets/img/logo-small.png" alt="logo" className="stake__stats--item--val--icon" />
                            </div>
                        </div>

                        <div className="stake__stats--item">
                            <p className="stake__stats--item--title">
                                Locked
                            </p>

                            <div className="stake__stats--item--val--inner">
                                <p className="stake__stats--item--val">
                                    12341
                                </p>

                                <img src="/assets/img/logo-small.png" alt="logo" className="stake__stats--item--val--icon" />
                            </div>
                        </div>

                        <div className="stake__stats--item">
                            <p className="stake__stats--item--title">
                                $vFRGE Earned
                            </p>

                            <p className="stake__text">
                                Coming soon
                            </p>
                        </div>

                        <div className="stake__stats--item">
                            <p className="stake__stats--item--title">
                                $vFRGE Rewards
                            </p>

                            <p className="stake__text">
                                Coming soon
                            </p>
                        </div>

                        <div className="stake__stats--item">
                            <p className="stake__stats--item--title">
                                Staked wstETH APR
                            </p>

                            <div className="stake__stats--item--val--inner">
                                <p className="stake__stats--item--val">
                                    9%
                                </p>
                            </div>
                        </div>

                        <div className="stake__stats--item">
                            <p className="stake__stats--item--title">
                                Locked $vFRGE APR
                            </p>

                            <p className="stake__text">
                                Coming soon
                            </p>
                        </div>

                        <div className="stake__stats--item">
                            <p className="stake__stats--item--title">
                                wstETH Rewards
                            </p>

                            <div className="stake__stats--item--val--inner">
                                <p className="stake__stats--item--val">
                                    111
                                </p>

                                <img src="/assets/img/cicle.svg" alt="cicle" className="stake__stats--item--val--icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stake__tab--inner">
                    <div className="stake__tabs">
                        <div className={`stake__tab${tab === "stake" ? " active" : ""}`} onClick={() => setTab("stake")}>
                            Stake
                        </div>

                        <div className={`stake__tab${tab === "unstake" ? " active" : ""}`} onClick={() => setTab("unstake")}>
                            Unstake
                        </div>

                        <div className={`stake__tab${tab === "unlocked" ? " active" : ""}`} onClick={() => setTab("unlocked")}>
                            Unlocked
                        </div>
                    </div>

                    {tab === "stake" && <div className="stake__stake">
                        <div className="stake__stake--text--inner">
                            <p className="subtitle">
                                Stake
                            </p>

                            <p className="text">
                                By staking $vFRGE tokens, users have the opportunity to earn wstETH rewards.
                            </p>

                            <p className="text">
                                The staked $FRGE tokens are converted into $vFRGE tokens, which maintain a 1:1 ratio with $FRGE. Users can withdraw their $vFRGE tokens at any time and redeem them for $FRGE.
                            </p>

                            <div className="stake__stake--text--border">
                                <p className="text">
                                    In addition, the treasury-owned ETH assets (LSD) generate a substantial amount of ETH income for Staked $FRGE, with 100% of the treasury and protocol income as well as bond sales dividends being allocated to Staked $FRGE.
                                </p>
                            </div>
                        </div>

                        <div className="stake__stake--form">
                            <InputBlock />

                            <div className="stake__form--choose">
                                <div className="text">
                                    Lock Duration
                                </div>

                                <div className="stake__form--choose--content">
                                    <div className="stake__form--choose--item">
                                        <input type="radio" className="radio" id="duration1" name="duration" />

                                        <label htmlFor="duration1" className="stake__form--choose--label">
                                            1 months
                                        </label>
                                    </div>

                                    <div className="stake__form--choose--item">
                                        <input type="radio" className="radio" id="duration2" name="duration" />

                                        <label htmlFor="duration2" className="stake__form--choose--label">
                                            3 months
                                        </label>
                                    </div>

                                    <div className="stake__form--choose--item">
                                        <input type="radio" className="radio" id="duration3" name="duration" />

                                        <label htmlFor="duration3" className="stake__form--choose--label">
                                            6 months
                                        </label>
                                    </div>

                                    <div className="stake__form--choose--item">
                                        <input type="radio" className="radio" id="duration4" name="duration" />

                                        <label htmlFor="duration4" className="stake__form--choose--label">
                                            1 year
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="stake__form--percent">
                                <p className="stake__percent--text">
                                    wstETH APR
                                </p>

                                <p className="stake__percent--text">
                                    0.00%
                                </p>
                            </div>

                            <div className="input__block border dark">
                                <div className="input__block--item">
                                    <p className="input__block--placeholder">You will Receive</p>
                                </div>

                                <div className="input__block--item">
                                    <input type="text" className="input input__block--input" placeholder="0.0" value="0" readOnly />

                                    <div className="input__block--cur">
                                        <div className="eth__inner input__block--cur--inner">
                                            <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                                        </div>

                                        $vFRGE
                                    </div>
                                </div>
                            </div>

                            <div className="stake__form--percent">
                                <p className="stake__percent--text">
                                    1 $FRGE = 1 $vFRGE
                                </p>
                            </div>

                            <button className="button default__button w100">
                                Submit
                            </button>

                            {formLocked && <div className="form__lock">
                                <div className="form__lock--block">
                                    <Wallet />

                                    <p className="subtitle center">
                                        Connect your wallet to get started
                                    </p>
                                </div>

                                <button className="button default__button w100" onClick={() => setFormLocked(false)}>
                                    Connect Wallet
                                </button>
                            </div>}
                        </div>
                    </div>}

                    {tab === "unstake" && <div className="stake__stake">
                        <div className="stake__stake--text--inner">
                            <p className="subtitle">
                                Unstake
                            </p>

                            <p className="text">
                                The staked $FRGE becomes $vFRGE, which maintains a 1:1 ratio with $FRGE.
                            </p>

                            <p className="text">
                                The $vFRGE can be redeemed back to $FRGE at any time, but doing so will discontinue the receipt of wstETH rewards.
                            </p>

                            <div className="stake__stake--text--border">
                                <p className="text">
                                    Unstaking $vFRGE will automatically claim any accumulated rewards.
                                </p>
                            </div>
                        </div>

                        <div className="stake__stake--form">
                            <p className="subtitle center w100">
                                You can unstake in 10 days
                            </p>

                            <InputBlock placeholder="Redeem" />

                            <div className="stake__form--current">
                                <p className="stake__percent--text">
                                    Curent value: 0
                                </p>

                                <img src="/assets/img/logo-small.png" alt="logo" className="stake__form--coin" />
                            </div>

                            <div className="stake__form--percent">
                                <p className="stake__percent--text">
                                    1 $FRGE = 1 $vFRGE
                                </p>
                            </div>

                            <button className="button default__button w100 disabled">
                                Submit
                            </button>
                        </div>
                    </div>}

                    {tab === "unlocked" && <div className="ulocked__content">
                        <div className="ulocked__inner">
                            <p className="subtitle">
                                Locked Kairos
                            </p>

                            <div className="ulocked__table">
                                <div className="ulocked__table--item">
                                    <p className="ulocked__table--title">
                                        Amount
                                    </p>

                                    <p className="ulocked__table--title">
                                        Unlock
                                    </p>

                                    <p className="ulocked__table--title">
                                        Action
                                    </p>
                                </div>

                                <div className="ulocked__table--item">
                                    <div className="ulocked__table--wrap">
                                        <div className="stake__stats--item--val--inner">
                                            <p className="stake__stats--item--val">
                                                12
                                            </p>

                                            <img src="/assets/img/logo-small.png" alt="logo" className="stake__stats--item--val--icon" />
                                        </div>
                                    </div>

                                    <div className="ulocked__table--wrap">
                                        <div className="stake__stats--item--val--inner">
                                            <p className="stake__stats--item--val">
                                                1
                                            </p>

                                            <img src="/assets/img/logo-small.png" alt="logo" className="stake__stats--item--val--icon" />
                                        </div>
                                    </div>

                                    <div className="ulocked__table--wrap">
                                        <p className="ulocked__table--text">
                                            Extend  |  Claim
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Stake;
