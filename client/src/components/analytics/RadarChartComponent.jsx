import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const RadarChartComponent = ({ data }) => {
  if (!data || !data.chartData || data.chartData.length === 0) {
    return <p className="text-center text-gray-500">No Data Available</p>;
  }

  // Preprocess data to add line breaks
  const processedData = data.chartData.map(item => ({
    ...item,
    name: item.name.replace(" ", "\n"),
  }));

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-medium text-[#10002B] self-start mb-4">{data.title}</h2>
      <ResponsiveContainer width={500} height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="85%" data={processedData}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="name"
            tick={(props) => {
              const { x, y, textAnchor, payload } = props;
              const value = payload?.value || "N/A";

              // Calculate the angle and offset the position by 10px
              const angle = Math.atan2(y - 175, x - 250); // Adjusted center point
              const offset = 10;
              const newX = x + offset * Math.cos(angle);
              const newY = y + offset * Math.sin(angle);

              return (
                <text
                  x={newX}
                  y={newY}
                  textAnchor={textAnchor}
                  style={{ fontSize: "14px", fill: "#10002B" }}
                >
                  {value.split("\n").map((line, i) => (
                    <tspan key={i} x={newX} dy={i * 12}>
                      {line}
                    </tspan>
                  ))}
                </text>
              );
            }}
          />
          <PolarRadiusAxis 
            domain={[0, 100]} // Set the scale from 0 to 100 since we're using percentages
          />
          <Tooltip 
            formatter={(value, name) => [`${value}%`, name]}
          />
          <Radar 
            name="Your Investment"
            dataKey="yourScore" 
            stroke="#3C096C" 
            fill="#C77DFF" 
            fillOpacity={0.6} 
          />
          <Radar 
            name="Maximum Allocation"
            dataKey="maxMarks" 
            stroke="#E0AAFF" 
            fill="#5A189A" 
            fillOpacity={0.3} 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;