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
        "$PAYFE Total Supply": 4000,
        "Locked $PAYFE": 2400,
        "Staked $PAYFE": 3350,
        "$FRGE Circulating Supply": 1400
    },
    {
        name: "JAN",
        "$PAYFE Total Supply": 3400,
        "Locked $PAYFE": 2200,
        "Staked $PAYFE": 2250,
        "$PAYFE Circulating Supply": 340
    },
    {
        name: "FEB",
        "$PAYFE Total Supply": 2000,
        "Locked $PAYFE": 400,
        "Staked $PAYFE": 1250,
        "$PAYFE Circulating Supply": 2940
    },
    {
        name: "MAR",
        "$PAYFE Total Supply": 2400,
        "Locked $PAYFE": 2900,
        "Staked $PAYFE": 1250,
        "$PAYFE Circulating Supply": 3940
    },
    {
        name: "APR",
        "$PAYFE Total Supply": 5000,
        "Locked $PAYFE": 2200,
        "Staked $PAYFE": 1250,
        "$PAYFE Circulating Supply": 4940
    },
    {
        name: "MAY",
        "$PAYFE Total Supply": 1400,
        "Locked $PAYFE": 1400,
        "Staked $PAYFE": 1250,
        "$PAYFE Circulating Supply": 40
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
                    dataKey="$PAYFE Total Supply"
                    stackId="1"
                    stroke="#F9B26C"
                    fill="rgba(249, 178, 108, .5)"
                    strokeWidth="4"
                />

                <Area
                    type="monotone"
                    dataKey="Locked $PAYFE"
                    stackId="1"
                    stroke="#FFEBD7"
                    fill="rgba(255, 235, 215, .5)"
                    strokeWidth="4"
                />

                <Area
                    type="monotone"
                    dataKey="Staked $PAYFE"
                    stackId="1"
                    stroke="#50D1DC"
                    fill="rgba(80, 209, 220, .5)"
                    strokeWidth="4"
                />

                <Area
                    type="monotone"
                    dataKey="$PAYFE Circulating Supply"
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
