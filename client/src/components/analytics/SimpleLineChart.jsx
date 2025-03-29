import React from 'react';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer 
} from 'recharts';

const SimpleLineChart = ({ data }) => {
    const chartData = data || [
      { name: 'Point 1', line1: 190, line2: 170, line3: 100 },
      { name: 'Point 2', line1: 180, line2: 190, line3: 80 },
      { name: 'Point 3', line1: 130, line2: 150, line3: 50 },
      { name: 'Point 4', line1: 170, line2: 130, line3: 120 },
      { name: 'Point 5', line1: 150, line2: 240, line3: 90 },
      { name: 'Point 6', line1: 300, line2: 280, line3: 200 },
      { name: 'Point 7', line1: 350, line2: 350, line3: 240 },
      { name: 'Point 8', line1: 370, line2: 370, line3: 280 },
      { name: 'Point 9', line1: 400, line2: 420, line3: 340 },
      { name: 'Point 10', line1: 450, line2: 570, line3: 470 },
    ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <Line 
          type="monotone" 
          dataKey="line1" 
          stroke="#5A189A" 
          strokeWidth={2} 
          animationDuration={2000} // Slow animation
        />
        <Line 
          type="monotone" 
          dataKey="line2" 
          stroke="#5A189A" 
          strokeWidth={2} 
          animationDuration={2000} // Slow animation
        />
        <Line 
          type="monotone" 
          dataKey="line3" 
          stroke="#5A189A" 
          strokeWidth={2} 
          animationDuration={2000} // Slow animation
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
