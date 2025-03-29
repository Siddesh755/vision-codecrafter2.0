import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import AdmSidebar from "../../components/AdmSidebar";
import jsPDF from "jspdf";

const AdmDashBoard = () => {
  const [news, setNews] = useState("");
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [selectedMarket, setSelectedMarket] = useState("Indian");

  const generateIndicesData = (market) => ({
    Indian: [
      { name: "NIFTY", value: 22397.2, change: -73.3, percentChange: "-0.33%" },
      { name: "SENSEX", value: 73828.91, change: -200.85, percentChange: "-0.27%" },
      { name: "BANKNIFTY", value: 48060.4, change: 3.75, percentChange: "+0.01%" },
    ],
    US: [
      { name: "Dow Jones", value: 38120.5, change: -85.4, percentChange: "-0.22%" },
      { name: "Nasdaq", value: 15532.4, change: 120.8, percentChange: "+0.78%" },
      { name: "S&P 500", value: 5056.7, change: 17.6, percentChange: "+0.35%" },
    ],
    Japanese: [
      { name: "Nikkei 225", value: 39825.5, change: 210.3, percentChange: "+0.53%" },
      { name: "Topix", value: 2732.1, change: -8.6, percentChange: "-0.31%" },
      { name: "JPX400", value: 18225.7, change: 45.2, percentChange: "+0.25%" },
    ],
  })[market];

  const [indices, setIndices] = useState(generateIndicesData(selectedMarket));

  useEffect(() => {
    setIndices(generateIndicesData(selectedMarket));
  }, [selectedMarket]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-[#10002b] text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 xl:static xl:translate-x-0`}
      >
        <AdmSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <AdminNavbar />

        {/* Sidebar Toggle Button */}
        <button
          className="xl:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "✖" : "☰"}
        </button>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Market Selection */}
          <div className="flex flex-wrap gap-4 mb-6">
            {["Indian", "US", "Japanese"].map((market) => (
              <button
                key={market}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  selectedMarket === market
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
                onClick={() => setSelectedMarket(market)}
              >
                {market} Market
              </button>
            ))}
          </div>

          {/* Indices Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Market Indices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {indices.map((index, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 shadow rounded-lg border border-gray-200"
                >
                  <p className="text-gray-500 font-semibold">{index.name}</p>
                  <p className="text-xl font-bold">{index.value}</p>
                  <p
                    className={`${
                      parseFloat(index.change) > 0 ? "text-green-500" : "text-red-500"
                    } font-medium`}
                  >
                    {index.change} ({index.percentChange})
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* News Update Section */}
          <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Update Financial News</h2>
            <textarea
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Enter financial news..."
              value={news}
              onChange={(e) => setNews(e.target.value)}
            ></textarea>
            <button
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => console.log("News Updated:", news)}
            >
              Update News
            </button>
          </div>

          {/* Generate Report */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
              onClick={() => console.log("Generating Report")}
            >
              📄 Generate Monthly Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmDashBoard;
