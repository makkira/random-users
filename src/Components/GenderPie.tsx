import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import React from 'react';

type Props = {
    femalePct: number;
};

export default function GenderPie({ femalePct }: Props) {
    const data = [
        { name: 'Female', value: femalePct },
        { name: 'Male', value: 100 - femalePct },
    ];
    const COLORS = ['#8884d8', '#82ca9d'];

    return (
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
            >
                {data.map((_, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" />
        </PieChart>
    );
}
