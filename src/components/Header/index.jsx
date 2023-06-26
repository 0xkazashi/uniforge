import React from 'react';

import './index.css';

import { Arrow, ArrowBottom, Copy, Leave, Menu, Wallet } from '../Icons';
import Modal from '../Modal';
import ConnectItem from '../ConnectItem';

const Header = ({title}) => {
    const [moreMenu, setMoreMenu] = React.useState(false);
    const [balanceMenu, setBalanceMenu] = React.useState(false);

    const [connectWallet, setConnectWallet] = React.useState(false);
    const [checkModal, setCheckModal] = React.useState(false);
    const [profileModal, setProfileModal] = React.useState(false);

    React.useEffect(() => {
        const checkSidebar = () => {
            if(window.innerWidth > 850 && sidebar.classList.contains("active")){
                sidebar.classList.remove("active");
            }
        }

        const sidebar = document.querySelector(".sidebar");
        
        document.addEventListener("click", function(e){
            const target = e.target;

            if(!target.closest(".dropdown__menu") && !target.closest(".button__more")){
                setMoreMenu(false);
            }

            if(!target.closest(".dropdown__menu") && !target.closest(".button__balance")){
                setBalanceMenu(false);
            }

            if(target.closest(".menu__button")){
                sidebar.classList.add("active");
            }

            if(!target.closest(".sidebar") && !target.closest(".menu__button") && sidebar.classList.contains("active")){
                sidebar.classList.remove("active");
            }

            if(target.closest(".navigation__link") && window.innerWidth <= 850 && sidebar.classList.contains("active")){
                sidebar.classList.remove("active");
            }
        });

        window.addEventListener("resize", function(){
            checkSidebar();
        });

        checkSidebar();
    }, []);

    const moreHandler = () => {
        setMoreMenu(prev => !prev);
        setProfileModal(true);
    }

    return (
        <>
            <header className="header">
                <h1 className="header__title" onClick={() => setCheckModal(true)}>
                    {title}
                </h1>

                <div className="header__content">
                    <button className="button menu__button">
                        <Menu />
                    </button>

                    <div className="header__button--wrapper">
                        <button className={`button header__button button__more${moreMenu ? " " : ""}`} onClick={moreHandler}>
                            More

                            <ArrowBottom />
                        </button>

                        {moreMenu && <div className="dropdown__menu">
                            <a href="#" className="dropdown__menu--link">
                                Docs

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Discord

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Twitter

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Github

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Dune

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Governance

                                <Arrow />
                            </a>
                        </div>}
                    </div>

                    <div className="header__button--wrapper">
                        <button className="button header__button button__balance" onClick={() => setBalanceMenu(prev => !prev)}>
                            <img src="/assets/img/logo-small.png" alt="logo" className="button__balance--logo" />

                            $0.045

                            <ArrowBottom />
                        </button>

                        {balanceMenu && <div className="dropdown__menu">
                            <a href="#" className="dropdown__menu--link">
                                Swap on Defilama

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Swap on Paraswap

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Add $FRGE to Wallet

                                <Arrow />
                            </a>

                            <a href="#" className="dropdown__menu--link">
                                Chart

                                <Arrow />
                            </a>
                        </div>}
                    </div>

                    <button className="button header__button button__connect" onClick={() => setConnectWallet(true)}>
                        Connect

                        <Wallet />
                    </button>
                </div>
            </header>

            <Modal active={connectWallet} setActive={setConnectWallet}>
                <p className="modal__title">
                    Connect Wallet
                </p>

                <p className="modal__subtitle">
                    To start using $FRGE
                </p>

                <div className="connect__content">
                    <ConnectItem text="Metamask" icon="/assets/img/metamask.svg" />
                    <ConnectItem text="Wallet Connect" icon="/assets/img/connect-wallet.svg" />
                    <ConnectItem text="Ledger" icon="/assets/img/ledger.svg" lightIcon="/assets/img/ledger-black.svg" />
                    <ConnectItem text="Coinbase Wallet" icon="/assets/img/coinbase.svg" />
                    <ConnectItem text="Tally" icon="/assets/img/tally.svg" />
                </div>

                <p className="modal__terms">
                    By connecting, I accept Compound's <span>Terms of Service</span>
                </p>
            </Modal>

            <Modal active={checkModal} setActive={setCheckModal}>
                <div className="check__wrapper">
                    <img src="/assets/img/check.svg" alt="check" className="check__icon" />

                    <p className="check__title">
                        The transaction was successful
                    </p>
                </div>
            </Modal>

            <Modal active={profileModal} setActive={setProfileModal}>
                <div className="profile__inner">
                    <img src="/assets/img/logo-small.png" alt="profile" className="profile__img" />

                    <p className="profile__title">
                        0x000000...00000
                    </p>

                    <p className="profile__text">
                        0.008 ETH
                    </p>

                    <div className="profile__buttons">
                        <button className="button profile__button">
                            <Copy />

                            Copy Address
                        </button>

                        <button className="button profile__button">
                            <Leave />

                            Disconnect
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Header;