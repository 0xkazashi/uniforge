import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import "./index.css";

const data = [
    {
        name: "DEC",
        "Market Cap": 4000,
        "Circulation Market Cap": 2400,
    },
    {
        name: "JAN",
        "Market Cap": 3000,
        "Circulation Market Cap": 1398,
    },
    {
        name: "FEB",
        "Market Cap": 2000,
        "Circulation Market Cap": 9800,
    },
    {
        name: "MAR",
        "Market Cap": 2780,
        "Circulation Market Cap": 3908,
    },
    {
        name: "APR",
        "Market Cap": 1890,
        "Circulation Market Cap": 4800,
    },
    {
        name: "MAY",
        "Market Cap": 2390,
        "Circulation Market Cap": 3800,
    },
];

const tickFormatter = (num) => {
    if (num < 1000) {
        return num.toString();
    } else if (num >= 1000 && num < 1000000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "KK";
    }
};

const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
        return (
            <div className="custom__tooltip">
                <p className="custom__tooltip--label">{`${label}`}</p>

                {payload.map((data, id) => (
                    <div className="custom__tooltip--wrap" key={id}>
                        <div
                            className="custom__tooltip--color"
                            style={{background: data.stroke}}
                        ></div>

                        <p className="custom__tooltip--name">{data.name}</p>

                        <p className="custom__tooltip--value">{data.value}</p>
                    </div>
                ))}
            </div>
        );
    }

    return null;
};

const MarketCup = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={data}>
                <XAxis
                    tick={{ fill: "var(--whiteTextC)", fontSize: 13 }}
                    axisLine={false}
                    dataKey="name"
                    tickLine={false}
                />

                <YAxis
                    tick={{ fill: "var(--whiteTextC)", fontSize: 13 }}
                    axisLine={false}
                    tickFormatter={tickFormatter}
                    tickLine={false}
                    padding={{bottom: 10}}
                />

                <Tooltip
                    wrapperStyle={{ outline: "none" }}
                    content={<CustomTooltip />}
                />

                <Area
                    type="monotone"
                    dataKey="Market Cap"
                    stackId="1"
                    stroke="#F9B26C"
                    fill="rgba(249, 178, 108, .5)"
                    strokeWidth="4"
                />

                <Area
                    type="monotone"
                    dataKey="Circulation Market Cap"
                    stackId="1"
                    stroke="#FFEBD7"
                    fill="rgba(255, 235, 215, .5)"
                    strokeWidth="4"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default MarketCup;
