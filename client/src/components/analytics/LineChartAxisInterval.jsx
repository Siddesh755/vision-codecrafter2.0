// LineChartAxisInterval.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
  Legend
} from 'recharts';

const LineChartAxisInterval = ({
  data,
  xKey = 'date',
  stock1Key = 'stock1',
  stock2Key = 'stock2',
  stock1Color = '#8884d8',
  stock2Color = '#82ca9d',
  xAxisInterval = 30,
  stock1Name = 'Stock 1',
  stock2Name = 'Stock 2',
  height = 500,
  showDots = false
}) => {
  return (
    <div style={{ width: '100%', height: `${height}px` }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={xKey}
            interval={xAxisInterval}
            tickFormatter={(date) => new Date(date).toLocaleDateString()}
            angle={-45}
            textAnchor="end"
            height={70}
          />
          <YAxis 
            domain={['auto', 'auto']}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip 
            formatter={(value) => `$${value.toFixed(2)}`}
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={stock1Key}
            stroke={stock1Color}
            name={stock1Name}
            dot={showDots}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey={stock2Key}
            stroke={stock2Color}
            name={stock2Name}
            dot={showDots}
            strokeWidth={2}
          />
          <Brush 
            dataKey={xKey}
            height={30}
            stroke="#8884d8"
            tickFormatter={(date) => new Date(date).toLocaleDateString()}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartAxisInterval;