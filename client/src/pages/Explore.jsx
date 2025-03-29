import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Explore = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showAnalyticsSubmenu, setShowAnalyticsSubmenu] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  const toggleAnalyticsSubmenu = () =>
    setShowAnalyticsSubmenu(!showAnalyticsSubmenu);
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

      <div className="flex-1 bg-gray-100">
        <Navbar />

        <div className="  mt-5">
          <button
            className="xl:hidden text-gray-800"
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

          <div className="p-6 ">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Indices</h2>
              <a href="#" className="text-green-500">
                All indices
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
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

            <h2 className="mt-6 text-lg font-semibold">Most traded Stocks</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Data Patterns</p>
                <p className="text-lg font-semibold">₹1,663.10</p>
                <p className="text-green-500">+76.80 (4.84%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Mangalore Refinery</p>
                <p className="text-lg font-semibold">₹119.33</p>
                <p className="text-green-500">+7.24 (6.48%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>BSE</p>
                <p className="text-lg font-semibold">₹3,926.25</p>
                <p className="text-red-500">-88.15 (2.20%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>IndusInd Bank</p>
                <p className="text-lg font-semibold">₹672.35</p>
                <p className="text-red-500">-12.35 (1.80%)</p>
              </div>
            </div>

            {/* Investments Section */}
           {/*  <div className="flex justify-between items-center mt-6">
              <h2 className="text-lg font-semibold">Your Investments</h2>
              <a href="#" className="text-green-500">
                Dashboard
              </a>
            </div>
            <div className="p-4 bg-white shadow rounded-lg mt-4 flex justify-between">
              <div>
                <p className="text-gray-500">Total Returns</p>
                <p className="text-xl font-semibold text-red-500">- ₹2,323</p>
              </div>
              <div>
                <p className="text-gray-500">Current Value</p>
                <p className="text-xl font-semibold">₹19,055</p>
              </div>
            </div> */}

            {/* Watchlist Section */}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-lg font-semibold">All Watchlists</h2>
              <a href="#" className="text-green-500">
                View all
              </a>
            </div>
            <div className="p-4 bg-white shadow rounded-lg mt-4 flex justify-between">
              <p>My Watchlist</p>
              <button className="text-green-500">+ Create new watchlist</button>
            </div>
            <h2 className="mt-6 text-lg font-semibold">Top Gainers</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Avenue Supermarts</p>
                <p className="text-lg font-semibold">₹3797</p>
                <p className="text-green-500">+122.90 (3.34%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Adani Green Energy</p>
                <p className="text-lg font-semibold">₹873.65</p>
                <p className="text-green-500">+20.25 (2.37%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Varun Beverages</p>
                <p className="text-lg font-semibold">₹488.15</p>
                <p className="text-green-500">+9.80 (2.05%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Bank of Baroda</p>
                <p className="text-lg font-semibold">₹205.52</p>
                <p className="text-green-500">-3.12 (1.54%)</p>
              </div>
            </div>
            <h2 className="mt-6 text-lg font-semibold">Top Losers</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Samvardhana Motherson</p>
                <p className="text-lg font-semibold">₹121.76</p>
                <p className="text-red-500">-3.72 (2.96%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Shriram Finance</p>
                <p className="text-lg font-semibold">₹1055.25</p>
                <p className="text-red-500">-17.40 (2.73%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Macrotech Devs</p>
                <p className="text-lg font-semibold">₹488.15</p>
                <p className="text-red-500">+26.45 (2.45%)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p>Bank of Baroda</p>
                <p className="text-lg font-semibold">₹3529.15</p>
                <p className="text-red-500">-81.10 (2.25%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
