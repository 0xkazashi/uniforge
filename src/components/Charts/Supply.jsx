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
        name: "FEB",
        "Kairos Total Supply": 4000,
        "Locked Kairos": 2400,
        "Staked Kairos": 3350,
        "Kairos Circulating Supply": 1400
    },
    {
        name: "MAR",
        "Kairos Total Supply": 3400,
        "Locked Kairos": 2200,
        "Staked Kairos": 2250,
        "Kairos Circulating Supply": 340
    },
    {
        name: "APR",
        "Kairos Total Supply": 2000,
        "Locked Kairos": 400,
        "Staked Kairos": 1250,
        "Kairos Circulating Supply": 2940
    },
    {
        name: "MAY",
        "Kairos Total Supply": 2400,
        "Locked Kairos": 2900,
        "Staked Kairos": 1250,
        "Kairos Circulating Supply": 3940
    },
    {
        name: "JUN",
        "Kairos Total Supply": 5000,
        "Locked Kairos": 2200,
        "Staked Kairos": 1250,
        "Kairos Circulating Supply": 4940
    },
    {
        name: "JUL",
        "Kairos Total Supply": 1400,
        "Locked Kairos": 1400,
        "Staked Kairos": 1250,
        "Kairos Circulating Supply": 40
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
                            style={{ background: data.stroke }}
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

const Supply = () => {
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
                    dataKey="Kairos Total Supply"
                    stackId="1"
                    stroke="#F9B26C"
                    fill="rgba(249, 178, 108, .5)"
                    strokeWidth="4"
                />

                <Area
                    type="monotone"
                    dataKey="Locked Kairos"
                    stackId="1"
                    stroke="#FFEBD7"
                    fill="rgba(255, 235, 215, .5)"
                    strokeWidth="4"
                />

                <Area
                    type="monotone"
                    dataKey="Staked Kairos"
                    stackId="1"
                    stroke="#50D1DC"
                    fill="rgba(80, 209, 220, .5)"
                    strokeWidth="4"
                />

                <Area
                    type="monotone"
                    dataKey="Kairos Circulating Supply"
                    stackId="1"
                    stroke="#FFF176"
                    fill="rgba(255, 241, 118, .5)"
                    strokeWidth="4"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Supply;
