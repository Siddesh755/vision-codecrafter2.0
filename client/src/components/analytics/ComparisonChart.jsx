import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComparisonChart = ({ allStocks, stockData }) => {
  
  const [selectedStocks, setSelectedStocks] = useState([]);

  
  const getAllMonths = () => {
    const monthsSet = new Set();
    Object.values(stockData).forEach(stockMonths => {
      stockMonths.forEach(item => monthsSet.add(item.month));
    });
    return Array.from(monthsSet).sort();
  };

  
  const prepareChartData = () => {
    const months = getAllMonths();
    return months.map(month => {
      const dataPoint = { month };
      selectedStocks.forEach(stockId => {
        const monthData = stockData[stockId]?.find(item => item.month === month);
        if (monthData) {
          dataPoint[stockId] = monthData.price;
        }
      });
      return dataPoint;
    });
  };

  const chartData = prepareChartData();

  
  const barColors = ['#8884d8', '#82ca9d', '#ffc658'];

 
  const toggleStockSelection = (stockId) => {
    if (selectedStocks.includes(stockId)) {
      setSelectedStocks(selectedStocks.filter(id => id !== stockId));
    } else {
      if (selectedStocks.length < 3) {
        setSelectedStocks([...selectedStocks, stockId]);
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Stock Price Comparison</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select up to 3 stocks to compare:</h3>
        <div className="flex flex-wrap gap-2">
          {allStocks.map((stock) => (
            <button
              key={stock.id}
              onClick={() => toggleStockSelection(stock.id)}
              className={`px-3 py-1 rounded text-sm  font-medium ${
                selectedStocks.includes(stock.id)
                  ? 'bg-[#10002b] text-[#E2ADFF]'
                  : 'bg-[#E2ADFF] text-[#10002b]'
              }`}
              disabled={!selectedStocks.includes(stock.id) && selectedStocks.length >= 3}
            >
              {stock.name} ({stock.id})
            </button>
          ))}
        </div>
      </div>

      {selectedStocks.length > 0 ? (
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {selectedStocks.map((stockId, index) => (
                <Bar 
                  key={stockId} 
                  dataKey={stockId} 
                  name={allStocks.find(stock => stock.id === stockId)?.name || stockId}
                  fill={barColors[index % barColors.length]} 
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg bg-gray-50">
          <p className="text-gray-500 text-lg">Select stocks to view comparison chart</p>
        </div>
      )}
      
      <div className="mt-4 text-sm text-gray-600">
        {selectedStocks.length > 0 ? (
          <p>Comparing monthly stock prices for selected companies.</p>
        ) : (
          <p>Please select up to 3 stocks to compare their performance.</p>
        )}
      </div>
    </div>
  );
};

export default ComparisonChart;