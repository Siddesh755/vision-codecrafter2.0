import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BuyAndSell from "../components/BuyAndSell";

const Stock = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState("Indian"); // Default market
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

  // Dummy Indices Data
  const generateIndicesData = (market) => {
    const indicesData = {
      Indian: [
        {
          name: "NIFTY",
          value: 22397.2,
          change: -73.3,
          percentChange: "-0.33%",
        },
        {
          name: "SENSEX",
          value: 73828.91,
          change: -200.85,
          percentChange: "-0.27%",
        },
        {
          name: "BANKNIFTY",
          value: 48060.4,
          change: 3.75,
          percentChange: "+0.01%",
        },
      ],
      US: [
        {
          name: "Dow Jones",
          value: 38120.5,
          change: -85.4,
          percentChange: "-0.22%",
        },
        {
          name: "Nasdaq",
          value: 15532.4,
          change: +120.8,
          percentChange: "+0.78%",
        },
        {
          name: "S&P 500",
          value: 5056.7,
          change: +17.6,
          percentChange: "+0.35%",
        },
      ],
      Japanese: [
        {
          name: "Nikkei 225",
          value: 39825.5,
          change: +210.3,
          percentChange: "+0.53%",
        },
        { name: "Topix", value: 2732.1, change: -8.6, percentChange: "-0.31%" },
        {
          name: "JPX400",
          value: 18225.7,
          change: +45.2,
          percentChange: "+0.25%",
        },
      ],
    };
    return indicesData[market];
  };

  // Generate stock data for different markets
  const generateStockData = (market) => {
    const stockData = {
      Indian: [
        {
          name: "Tata Motors",
          symbol: "NSE:TATAMOTORS",
          price: 600,
          change: "+10.5",
          percentChange: "1.8%",
        },
        {
          name: "Reliance Industries",
          symbol: "NSE:RELIANCE",
          price: 2700,
          change: "-25.4",
          percentChange: "-0.9%",
        },
        {
          name: "Infosys",
          symbol: "NSE:INFY",
          price: 1500,
          change: "+5.2",
          percentChange: "0.35%",
        },
        {
          name: "HDFC Bank",
          symbol: "NSE:HDFCBANK",
          price: 1680.25,
          change: "+15.75",
          percentChange: "0.95%",
        },
        {
          name: "TCS",
          symbol: "NSE:TCS",
          price: 3450.60,
          change: "-22.40",
          percentChange: "-0.65%",
        },
        {
          name: "ICICI Bank",
          symbol: "NSE:ICICIBANK",
          price: 950.75,
          change: "+7.80",
          percentChange: "0.83%",
        },
        {
          name: "Bharti Airtel",
          symbol: "NSE:BHARTIARTL",
          price: 875.30,
          change: "+12.45",
          percentChange: "1.44%",
        },
        {
          name: "Hindustan Unilever",
          symbol: "NSE:HINDUNILVR",
          price: 2350.20,
          change: "-5.65",
          percentChange: "-0.24%",
        },
        {
          name: "Wipro",
          symbol: "NSE:WIPRO",
          price: 420.15,
          change: "+3.25",
          percentChange: "0.78%",
        },
        {
          name: "Asian Paints",
          symbol: "NSE:ASIANPAINT",
          price: 3100.50,
          change: "-8.75",
          percentChange: "-0.28%",
        }
      ],
      US: [
        {
          name: "Apple Inc",
          symbol: "NASDAQ:AAPL",
          price: 175.40,
          change: "+2.35",
          percentChange: "1.36%",
        },
        {
          name: "Microsoft",
          symbol: "NASDAQ:MSFT",
          price: 378.92,
          change: "+4.53",
          percentChange: "1.21%",
        },
        {
          name: "Tesla",
          symbol: "NASDAQ:TSLA",
          price: 230.55,
          change: "-5.75",
          percentChange: "-2.43%",
        },
        {
          name: "Amazon",
          symbol: "NASDAQ:AMZN",
          price: 178.75,
          change: "+4.25",
          percentChange: "2.43%",
        },
        {
          name: "Alphabet (Google)",
          symbol: "NASDAQ:GOOGL",
          price: 142.30,
          change: "+1.70",
          percentChange: "1.21%",
        },
        {
          name: "Johnson & Johnson",
          symbol: "NYSE:JNJ",
          price: 162.80,
          change: "-0.90",
          percentChange: "-0.55%",
        },
        {
          name: "Procter & Gamble",
          symbol: "NYSE:PG",
          price: 158.25,
          change: "+0.75",
          percentChange: "0.48%",
        },
        {
          name: "JPMorgan Chase",
          symbol: "NYSE:JPM",
          price: 180.50,
          change: "+3.25",
          percentChange: "1.83%",
        },
        {
          name: "Visa Inc",
          symbol: "NYSE:V",
          price: 267.40,
          change: "-1.35",
          percentChange: "-0.50%",
        },
        {
          name: "Walmart",
          symbol: "NYSE:WMT",
          price: 59.80,
          change: "+0.45",
          percentChange: "0.76%",
        }
      ],
      Japanese: [
        {
          name: "Toyota Motor",
          symbol: "TSE:7203",
          price: 2450.50,
          change: "+45.75",
          percentChange: "1.90%",
        },
        {
          name: "SoftBank Group",
          symbol: "TSE:9984",
          price: 6780.25,
          change: "-120.50",
          percentChange: "-1.75%",
        },
        {
          name: "Sony Group",
          symbol: "TSE:6758",
          price: 12450.75,
          change: "+225.60",
          percentChange: "1.85%",
        },
        {
          name: "Nintendo",
          symbol: "TSE:7974",
          price: 7350.50,
          change: "+80.25",
          percentChange: "1.10%",
        },
        {
          name: "Nippon Telegraph & Telephone",
          symbol: "TSE:9432",
          price: 3860.75,
          change: "-45.25",
          percentChange: "-1.16%",
        },
        {
          name: "Fanuc Corp",
          symbol: "TSE:6954",
          price: 4520.25,
          change: "+65.50",
          percentChange: "1.47%",
        },
        {
          name: "Keyence Corp",
          symbol: "TSE:6861",
          price: 65200.50,
          change: "-780.25",
          percentChange: "-1.18%",
        },
        {
          name: "Mitsubishi UFJ Financial",
          symbol: "TSE:8306",
          price: 1230.75,
          change: "+18.50",
          percentChange: "1.53%",
        },
        {
          name: "Hitachi",
          symbol: "TSE:6501",
          price: 9450.25,
          change: "+125.75",
          percentChange: "1.35%",
        },
        {
          name: "Denso Corp",
          symbol: "TSE:6902",
          price: 1820.50,
          change: "-25.25",
          percentChange: "-1.37%",
        }
      ],
    };
    
    return stockData[market] || [];
  };

  const [indices, setIndices] = useState(generateIndicesData(selectedMarket));
  const [stocks, setStocks] = useState(generateStockData(selectedMarket));

  // Update stocks and indices when market changes
  useEffect(() => {
    setIndices(generateIndicesData(selectedMarket));
    setStocks(generateStockData(selectedMarket));
  }, [selectedMarket]);

  // Handle stock selection
  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
    navigate(`/stock/${encodeURIComponent(stock.symbol)}`);
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

          <div className="p-4 lg:p-6 flex flex-col xl:flex-row gap-6">
            {/* Left Section - Stocks Data */}
            <div className="xl:w-2/3 w-full">
              {/* Market Selection */}
              <div className="flex flex-wrap gap-4 mb-6">
                {["Indian", "US", "Japanese"].map((market) => (
                  <button
                    key={market}
                    className={`px-4 py-2 rounded ${
                      selectedMarket === market
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedMarket(market)}
                  >
                    {market} Stocks
                  </button>
                ))}
              </div>

              {/* Indices Section */}
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">Indices</h2>
                <a href="#" className="text-blue-500 hover:underline">
                  All indices
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {indices.map((index, idx) => (
                  <div key={idx} className="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow">
                    <p className="text-gray-500">{index.name}</p>
                    <p className="text-xl font-semibold">{index.value}</p>
                    <p
                      className={
                        parseFloat(index.change) > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {index.change} ({index.percentChange})
                    </p>
                  </div>
                ))}
              </div>

              {/* Stocks Table */}
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Most Traded Stocks</h2>
                  <a href="#" className="text-blue-500 hover:underline">
                    View all
                  </a>
                </div>

                <div className="mt-4 bg-white shadow rounded-lg overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 text-gray-500 font-normal text-sm">
                          COMPANY
                        </th>
                        <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                          MARKET PRICE
                        </th>
                        <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                          CHANGE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {stocks.map((stock, index) => (
                        <tr
                          key={index}
                          className="border-t border-gray-200 cursor-pointer hover:bg-gray-100"
                          onClick={() => handleStockSelect(stock)}
                        >
                          <td className="cursor-pointer text-blue-500 hover:underline py-3 px-4">
                            {stock.name}
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            {selectedMarket === "Indian" ? "₹" : selectedMarket === "US" ? "$" : "¥"}
                            {stock.price}
                          </td>
                          <td
                            className={`py-3 px-4 text-right ${
                              parseFloat(stock.change) > 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {stock.change} ({stock.percentChange})
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Section - Buy & Sell Component */}
            <div className="xl:w-1/3 w-full">
              <BuyAndSell selectedStock={selectedStock} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;