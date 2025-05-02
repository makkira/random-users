import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

export interface PieDataItem {
    name: string;
    value: number;
}

export interface GenericPieProps {
    data: PieDataItem[];
    colors?: string[];
    innerRadius?: number;
    outerRadius?: number;
    width?: string | number;
    height?: string | number;
    legendLayout?: 'horizontal' | 'vertical';
    legendAlign?: 'left' | 'center' | 'right';
    legendVerticalAlign?: 'top' | 'middle' | 'bottom';
}

export default function GenericPie({
    data,
    colors,
    innerRadius = 40,
    outerRadius = 80,
    width = '100%',
    height = 200,
    legendLayout = 'horizontal',
    legendAlign = 'center',
    legendVerticalAlign = 'bottom',
}: GenericPieProps) {
    const defaultColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c'];
    const fillColors = colors ?? defaultColors;

    return (
        <ResponsiveContainer width={width} height={height}>
            <PieChart margin={{ top: 80 }} >
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    label={false}
                    labelLine={false}
                >
                    {data.map((_, idx) => (
                        <Cell key={idx} fill={fillColors[idx % fillColors.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(val: number) => `${val.toFixed(1)}%`} />
                <Legend
                    layout={legendLayout}
                    align={legendAlign}
                    verticalAlign={legendVerticalAlign}
                    wrapperStyle={{ position: 'relative' }}
                />
            </PieChart>
        </ResponsiveContainer >
    );
}
