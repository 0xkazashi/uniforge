import React from 'react';

import './index.css';

import Header from '../../components/Header';
import InputBlock from '../../components/InputBlock';
import Link from '../../components/Link';

const Launch = () => {
    return (
        <>
            <Header title="Launch" />

            <div className="launch__content">
                <div className="launch__connect">
                    <div className="launch__connect--content">
                        <div className="eth__inner launch__eth">
                            <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                        </div>

                        <p className="launch__title">
                            0 $vPAYFE
                        </p>

                        <p className="launch__text">
                            Sorry, You are not eligible for the airdrops.
                        </p>
                    </div>

                    <button className="button launch__connect--button">
                        Connect Wallet
                    </button>
                </div>

                <div className="launch__presale">
                    <p className="launch__presale--title">
                        The pool has ended.
                    </p>

                    <div className="launch__presale--progress">
                        <div className="launch__progress">
                            <div className="launch__progress--step">
                                <p>3 hours</p>
                            </div>

                            <div className="launch__progress--step">
                                <p>24 hours</p>
                            </div>
                        </div>

                        <div className="launch__progress--tags">
                            <div className="launch__progress--tag">
                                Whitelist Round
                            </div>

                            <div className="launch__progress--tag">
                                Public Round
                            </div>
                        </div>
                    </div>

                    <div className="progress__block">
                        <p className="progress__title">
                            Investment progress
                        </p>

                        <div className="progress__bar">
                            <p className="progress__bar--text">
                                Hard Cap
                            </p>

                            <div className="progress__bar--inner"></div>

                            <p className="progress__bar--text">
                                400 ETH
                            </p>

                            <div className="progress__abs--block">
                                <p className="progress__bar--text">
                                    Soft Cap
                                </p>

                                <div className="progress__bar--abs--item"></div>
                                
                                <p className="progress__bar--text">
                                    250 ETH
                                </p>
                            </div>
                        </div>

                        <div className="progress__block--points">
                            <div className="progress__block--point">
                                <p className="progress__block--title">
                                    Total Fund Raised
                                </p>

                                <div className="progress__block--value--inner">
                                    <p className="progress__block--value">
                                        400
                                    </p>

                                    <div className="eth__inner progress__block--eth--inner">
                                        <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                                    </div>
                                </div>
                            </div>

                            <div className="progress__block--point">
                                <p className="progress__block--title">
                                    Total $vPAYFE for sale
                                </p>

                                <div className="progress__block--value--inner">
                                    <p className="progress__block--value">
                                        500000
                                    </p>

                                    <div className="eth__inner progress__block--eth--inner">
                                        <img src="/assets/img/eth.svg" alt="eth" className="eth" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="launch__amount--inner">
                    <InputBlock tyche />

                    <button className="button modal__bond--button">
                        Connect Wallet
                    </button>
                </div>

                <div className="launch__text--inner">
                    <p className="text">
                    The Payfe protocol operates on a fair launch model, where 100% of the revenue generated is distributed to $PAYFE token holders with no involvement from VC. <span className="bold">The Payfe team will not retain any portion of the funds raised during the public sale. All funds will be allocated according to the project's established plan and goals.</span>
                    </p>

                    <p className="text">
                        As a token staker, you can expect to receive returns that are significantly higher than other LSD assets, such as ETH staking. By staking and locking up $PAYFE, you can earn a yearly return ranging from 10% to 30% in ETH, in addition to extra rewards in the form of $vPAYFE.
                    </p>

                    <p className="text">
                        For the latest updates and accurate information regarding the claiming of $PAYFE tokens, please follow the official announcements.
                    </p>

                    <div className="launch__link--inner">
                        <Link text="$PAYFE Contract" />
                        <Link text="$vPAYFE Contract" />
                        <Link text="Launch Contract" />
                        <Link text="Treasury Contract" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Launch;
