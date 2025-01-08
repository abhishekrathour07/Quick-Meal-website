import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", Veg: 37500, NonVeg: 40000 },
    { month: "Feb", Veg: 19000, NonVeg: 38000 },
    { month: "Mar", Veg: 45000, NonVeg: 36000 },
    { month: "Apr", Veg: 47000, NonVeg: 70000 },
    { month: "May", Veg: 40000, NonVeg: 52000 },
    { month: "Jun", Veg: 53000, NonVeg: 47000 },
    { month: "Jul", Veg: 32000, NonVeg: 45000 },
];

const ReportsChart: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full h-auto">
            <div className="flex justify-between items-center mb-4 text-black">
                <h2 className="text-xl font-semibold">Monthly Sales of Food Products</h2>

            </div>
            <ResponsiveContainer height={350}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="5" stroke="orange" />
                    <XAxis
                        dataKey="month"
                        stroke="#ccc"
                        tick={{ fill: "black" }}
                        axisLine={{ stroke: "black" }}
                    />
                    <YAxis
                        stroke="#ccc"
                        tick={{ fill: "black" }}
                        tickFormatter={(value) => `${value / 1000}k`}
                        axisLine={{ stroke: "black" }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "white",
                            borderColor: "black",
                            color: "black",
                            borderRadius:"12px",
                        }}
                        labelStyle={{ color: "black" }}
                        formatter={(value: number) => `${value}`}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{ color: "green" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Veg"
                        stroke="green"
                        strokeWidth={3}
                        dot={{ stroke: "green", strokeWidth: 2 }}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="NonVeg"
                        stroke="red"
                        strokeWidth={3}
                        dot={{ stroke: "red", strokeWidth: 2 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReportsChart;
