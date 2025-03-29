import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BuySell from "../components/BuySell"; // Import BuySell component

const MutualFund = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [selectedMarket, setSelectedMarket] = useState("Indian"); // Default market
  const [selectedFund, setSelectedFund] = useState(null); // Track selected fund

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
  

  // Dummy mutual fund data for different markets
  const generateMutualFundsData = (market) => {
    const fundData = {
      Indian: [
        "Motilal Oswal Midcap Fund Direct Growth",
        "Parag Parikh Flexi Cap Fund Direct Growth",
        "SBI PSU Direct Plan Growth",
        "Quant Small Cap Fund Direct Plan Growth",
        "Axis Bluechip Fund Direct Growth",
        "ICICI Prudential Technology Fund Direct Plan",
      ],
      US: [
        "Vanguard 500 Index Fund",
        "Fidelity Contrafund",
        "T. Rowe Price Growth Stock Fund",
        "American Funds Growth Fund",
        "Schwab S&P 500 Index Fund",
        "Invesco QQQ Trust",
      ],
      Japanese: [
        "Nikko AM Japan Value Fund",
        "Daiwa Japan Equity Fund",
        "Nomura Japan High Dividend Fund",
        "Mitsubishi UFJ Japan Growth Fund",
        "Sumitomo Mitsui Trust Japan Fund",
        "T&D Japan ESG Fund",
      ],
    };

    return fundData[market].map((fund) => {
      const returns1Y = (Math.random() * 30).toFixed(2);
      const returns3Y = (Math.random() * 40).toFixed(2);
      const returns5Y = (Math.random() * 50).toFixed(2);
      const rating = Math.floor(Math.random() * 3) + 3; // 3-5 star rating
      const nav = (Math.random() * 200 + 50).toFixed(2);
      const aum = Math.floor(Math.random() * 50000) + 1000; // AUM in crores

      return {
        name: fund,
        risk: Math.random() > 0.5 ? "Very High Risk" : "High Risk",
        type: "Equity",
        rating,
        nav,
        aum,
        returns: {
          "1Y": returns1Y,
          "3Y": returns3Y,
          "5Y": returns5Y,
        },
      };
    });
  };

  // State for mutual funds
  const [mutualFunds, setMutualFunds] = useState(
    generateMutualFundsData(selectedMarket)
  );

  // Update mutual funds when market changes
  useEffect(() => {
    setMutualFunds(generateMutualFundsData(selectedMarket));
  }, [selectedMarket]);

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
          {/* Market Selection Buttons */}
          <div className="flex gap-4 mb-6">
            {["Indian", "US", "Japanese"].map((market) => (
              <button
                key={market}
                className={`px-4 py-2 rounded ${
                  selectedMarket === market
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setSelectedMarket(market)}
              >
                {market} Mutual Funds
              </button>
            ))}
          </div>

          {/* Popular Mutual Funds */}
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                {selectedMarket} Mutual Funds
              </h2>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">Sort by:</span>
                <select className="text-green-500 bg-transparent border-none focus:outline-none">
                  <option>Popularity</option>
                  <option>Returns (1Y)</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              {mutualFunds.map((fund, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg mb-4 p-4"
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex mb-4 md:mb-0">
                      <div className="bg-blue-500 w-10 h-10 rounded-md flex items-center justify-center text-white mr-4">
                        {fund.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium">{fund.name}</h3>
                        <div className="flex text-xs text-gray-500 mt-1">
                          <span className="mr-3">{fund.risk}</span>
                          <span className="mr-3">•</span>
                          <span className="mr-3">{fund.type}</span>
                          <span className="mr-3">•</span>
                          <span>{fund.rating} ★</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 md:gap-10">
                      <div className="text-center">
                        <div className="font-medium text-lg">
                          {fund.returns["1Y"]}%
                        </div>
                        <div className="text-xs text-gray-500">1Y Return</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-lg">
                          {fund.returns["3Y"]}%
                        </div>
                        <div className="text-xs text-gray-500">3Y Return</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-lg">
                          {fund.returns["5Y"]}%
                        </div>
                        <div className="text-xs text-gray-500">5Y Return</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded-md"
                      onClick={() => setSelectedFund(fund)}
                    >
                      Invest
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BuySell Component (only shows when a fund is selected) */}
      {selectedFund && (
        <div className="fixed right-0 top-0 h-full flex items-center justify-end bg-gray-50/70">
          <BuySell fund={selectedFund} onClose={() => setSelectedFund(null)} />
        </div>
      )}
    </div>
    </div>
  );
};

export default MutualFund;
