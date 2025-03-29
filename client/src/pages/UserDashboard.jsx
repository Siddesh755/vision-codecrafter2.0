import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BrushBarChart from "../components/analytics/BrushBarChart";
import ComparisonChart from "../components/analytics/ComparisonChart";
import RadarChartComponent from "../components/analytics/RadarChartComponent";

const UserDashBoard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample Data for holdings and mutual funds

  const chartData = [
    // 2023
    { name: "Jan 23", value: 290 },
    { name: "Feb 23", value: 305 },
    { name: "Mar 23", value: 295 }, // slight dip
    { name: "Apr 23", value: 315 },
    { name: "May 23", value: 330 },
    { name: "Jun 23", value: 345 },
    { name: "Jul 23", value: 335 }, // small drop
    { name: "Aug 23", value: 360 },
    { name: "Sep 23", value: 350 }, // fluctuation down
    { name: "Oct 23", value: 385 },
    { name: "Nov 23", value: 370 }, // dip before year-end rise
    { name: "Dec 23", value: 410 },
    // 2024
    { name: "Jan 24", value: 425 },
    { name: "Feb 24", value: 415 }, // dip after year start
    { name: "Mar 24", value: 440 },
    { name: "Apr 24", value: 460 },
    { name: "May 24", value: 445 }, // fluctuation down
    { name: "Jun 24", value: 470 },
    { name: "Jul 24", value: 485 },
    { name: "Aug 24", value: 475 }, // slight drop
    { name: "Sep 24", value: 495 },
    { name: "Oct 24", value: 510 },
    { name: "Nov 24", value: 500 }, // dip before final rise
    { name: "Dec 24", value: 530 },
  ];
  const allStocks = [
    { id: "AAPL", name: "Apple Inc." },
    { id: "MSFT", name: "Microsoft Corp." },
    { id: "AMZN", name: "Amazon.com Inc." },
    { id: "GOOGL", name: "Alphabet Inc." },
    { id: "META", name: "Meta Platforms Inc." },
    { id: "TSLA", name: "Tesla Inc." },
    { id: "NVDA", name: "NVIDIA Corp." },
    { id: "NFLX", name: "Netflix Inc." },
    { id: "DIS", name: "Walt Disney Co." },
    { id: "PYPL", name: "PayPal Holdings Inc." },
  ];

  // Stock performance data
  const stockData = {
    AAPL: [
      { month: "Jan", price: 172.35 },
      { month: "Feb", price: 165.12 },
      { month: "Mar", price: 169.85 },
      { month: "Apr", price: 174.63 },
      { month: "May", price: 180.95 },
    ],
    MSFT: [
      { month: "Jan", price: 342.45 },
      { month: "Feb", price: 350.19 },
      { month: "Mar", price: 357.36 },
      { month: "Apr", price: 365.93 },
      { month: "May", price: 371.88 },
    ],
    AMZN: [
      { month: "Jan", price: 144.58 },
      { month: "Feb", price: 149.36 },
      { month: "Mar", price: 154.8 },
      { month: "Apr", price: 151.55 },
      { month: "May", price: 157.2 },
    ],
    GOOGL: [
      { month: "Jan", price: 142.98 },
      { month: "Feb", price: 147.7 },
      { month: "Mar", price: 152.48 },
      { month: "Apr", price: 158.14 },
      { month: "May", price: 162.3 },
    ],
    META: [
      { month: "Jan", price: 329.75 },
      { month: "Feb", price: 342.65 },
      { month: "Mar", price: 356.82 },
      { month: "Apr", price: 368.35 },
      { month: "May", price: 375.48 },
    ],
    TSLA: [
      { month: "Jan", price: 219.58 },
      { month: "Feb", price: 208.73 },
      { month: "Mar", price: 214.95 },
      { month: "Apr", price: 221.65 },
      { month: "May", price: 226.8 },
    ],
    NVDA: [
      { month: "Jan", price: 548.22 },
      { month: "Feb", price: 570.88 },
      { month: "Mar", price: 586.32 },
      { month: "Apr", price: 612.45 },
      { month: "May", price: 625.7 },
    ],
    NFLX: [
      { month: "Jan", price: 485.89 },
      { month: "Feb", price: 492.15 },
      { month: "Mar", price: 505.4 },
      { month: "Apr", price: 517.75 },
      { month: "May", price: 525.1 },
    ],
    DIS: [
      { month: "Jan", price: 94.89 },
      { month: "Feb", price: 98.36 },
      { month: "Mar", price: 102.75 },
      { month: "Apr", price: 106.2 },
      { month: "May", price: 109.45 },
    ],
    PYPL: [
      { month: "Jan", price: 64.32 },
      { month: "Feb", price: 67.15 },
      { month: "Mar", price: 69.8 },
      { month: "Apr", price: 71.95 },
      { month: "May", price: 73.6 },
    ],
  };

  const holdings = [
    {
      name: "Reliance Industries",
      invested: 10000,
      current: 9500,
      returns: -500,
    },
    { name: "TCS", invested: 5000, current: 5500, returns: 500 },
  ];

  const mutualFunds = [
    { name: "SBI Bluechip Fund", invested: 7000, current: 7500, returns: 500 },
    { name: "HDFC Small Cap", invested: 8000, current: 7800, returns: -200 },
  ];
  const radarData = {
    title: "Investment Diversification Analysis",
    chartData: [
      {
        name: "Stocks",
        yourScore: 75,
        averagePercentage: 60,
        maxMarks: 100,
      },
      {
        name: "Mutual Funds",
        yourScore: 50,
        averagePercentage: 45,
        maxMarks: 100,
      },
      {
        name: "Insurance",
        yourScore: 20,
        averagePercentage: 25,
        maxMarks: 100,
      },
      {
        name: "Bonds",
        yourScore: 60,
        averagePercentage: 50,
        maxMarks: 100,
      },
      {
        name: "Foreign Stocks",
        yourScore: 30,
        averagePercentage: 35,
        maxMarks: 100,
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-[#240046]">
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-[#240046] text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 xl:static xl:translate-x-0`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 bg-[#F8EBFF]">
        <Navbar />

        <div className="mt-5">
          <button
            className="xl:hidden text-gray-800 ml-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className="w-7 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  sidebarOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <div className="p-6">
            {/* Indices Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-white shadow rounded-lg">
                <p className="text-gray-500">NIFTY</p>
                <p className="text-xl font-semibold">22,397.20</p>
                <p className="text-red-500">-73.30 (-0.33%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p className="text-gray-500">SENSEX</p>
                <p className="text-xl font-semibold">73,828.91</p>
                <p className="text-red-500">-200.85 (-0.27%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p className="text-gray-500">BANKNIFTY</p>
                <p className="text-xl font-semibold">48,060.40</p>
                <p className="text-green-500">+3.75 (0.01%)</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-lg font-semibold">Your Investments</h2>
              <a href="#" className="text-green-500">
                Dashboard
              </a>
            </div>
            <div className="p-4 bg-white shadow rounded-lg mt-4  mb-4 flex justify-between">
              <div>
                <p className="text-gray-500">Total Returns</p>
                <p className="text-xl font-semibold text-red-500">- ₹2,323</p>
              </div>
              <div>
                <p className="text-gray-500">Current Value</p>
                <p className="text-xl font-semibold">₹19,055</p>
              </div>
            </div>
            <div className="p-4 bg-white shadow rounded-lg mb-6">
              <div style={{ padding: "20px" }}>
                <h1>M Data Visualization</h1>
                <BrushBarChart
                  data={chartData}
                  xKey="name"
                  yKey="value"
                  barColor="#82ca9d"
                />
              </div>
            </div>
            <div className="p-4 bg-white shadow rounded-lg mb-6">
              <ComparisonChart allStocks={allStocks} stockData={stockData} />
            </div>

            <div className="p-4 bg-white shadow rounded-lg mb-6">
              <RadarChartComponent data={radarData} />
            </div>

            {/* Holdings Section */}
            <div className="p-4 bg-white shadow rounded-lg mb-6">
              <h2 className="text-lg font-semibold mb-4">Current Holdings</h2>
              {holdings.map((holding, index) => (
                <div key={index} className="flex justify-between border-b py-2">
                  <p>{holding.name}</p>
                  <p>Invested: ₹{holding.invested}</p>
                  <p>Current: ₹{holding.current}</p>
                  <p
                    className={
                      holding.returns >= 0 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {holding.returns >= 0 ? "+" : ""}₹{holding.returns}
                  </p>
                </div>
              ))}
            </div>

            {/* Mutual Funds Section */}
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Mutual Funds</h2>
              {mutualFunds.map((fund, index) => (
                <div key={index} className="flex justify-between border-b py-2">
                  <p>{fund.name}</p>
                  <p>Invested: ₹{fund.invested}</p>
                  <p>Current: ₹{fund.current}</p>
                  <p
                    className={
                      fund.returns >= 0 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {fund.returns >= 0 ? "+" : ""}₹{fund.returns}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
