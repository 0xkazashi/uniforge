import React from 'react';

import './index.css';

import Header from '../../components/Header';
import StatsItem from '../../components/StatsItem';
import MarketCup from '../../components/Charts/MarketCup';
import Supply from '../../components/Charts/Supply';
import Tyche from '../../components/Charts/Tyche';

const Dashboard = () => {
    return (
        <>
            <Header title="Statistics" />

            <div className="dashboard__content">
                <div className="dashboard__item stats__wrap">
                    <StatsItem title="Market Cap" value="6,061.66" eth />
                    <StatsItem title="Circulating Market Cap" value="124.66" eth />
                    <StatsItem title="Staked $PAYFE" value="1,061.56" />
                    <StatsItem title="Locked $PAYFE" value="1,061.56" />
                    <StatsItem title="$PAYFE Price" value="0.0145" eth />
                    <StatsItem title="Treasure ETH" value="5,181.66" eth />
                    <StatsItem title="$PAYFE Total Supply" value="19,061.66" />
                    <StatsItem title="Total Payout" value="599.66" eth />
                </div>

                <div className="dashboard__item chart__wrap">
                    <p className="chart__title">
                        Market Cap
                    </p>

                    <div className="chart__inner">
                        <MarketCup />
                    </div>
                </div>

                <div className="dashboard__item chart__wrap">
                    <p className="chart__title">
                        $PAYFE Supply
                    </p>

                    <div className="chart__inner">
                        <Supply />
                    </div>
                </div>

                <div className="dashboard__item chart__wrap">
                    <p className="chart__title">
                        $vPAYFE Supply
                    </p>

                    <div className="chart__inner">
                        <Tyche />
                    </div>
                </div>
            </div>

            <div className="content__copy">
                <p className="content__copy--text">
                    &copy; 2024 Payfe
                </p>
            </div>
        </>
    )
}

export default Dashboard;
