import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Bonds = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showAnalyticsSubmenu, setShowAnalyticsSubmenu] = useState(false);
  const [bondMarket, setBondMarket] = useState("indian"); // Default to Indian bonds

  // Generate dummy Indian bond data
  const generateIndianBondData = () => {
    const bonds = [
      "Indian Govt 5Y",
      "Indian Govt 10Y",
      "Indian Govt 15Y",
      "Indian Govt 30Y",
      "Reliance Industries 2028",
      "HDFC Bank 2027",
    ];

    return bonds.map((bond) => {
      const isPositive = Math.random() > 0.3;
      const yield_ = (Math.random() * 3 + 6).toFixed(2); // Indian bonds typically have higher yields
      const change = (Math.random() * 0.15).toFixed(3);
      const percentChange = (Math.random() * 2).toFixed(2);

      return {
        name: bond,
        yield: yield_,
        change: isPositive ? change : -change,
        percentChange: isPositive ? percentChange : -percentChange,
        isPositive,
      };
    });
  };

  // Generate dummy US bond data
  const generateUSBondData = () => {
    const bonds = [
      "US Treasury 2Y",
      "US Treasury 5Y",
      "US Treasury 10Y",
      "US Treasury 30Y",
      "Apple Inc. 2030",
      "Microsoft Corp 2032",
    ];

    return bonds.map((bond) => {
      const isPositive = Math.random() > 0.3;
      const yield_ = (Math.random() * 2 + 3).toFixed(2); // US bonds typically have lower yields
      const change = (Math.random() * 0.25).toFixed(3);
      const percentChange = (Math.random() * 3).toFixed(2);

      return {
        name: bond,
        yield: yield_,
        change: isPositive ? change : -change,
        percentChange: isPositive ? percentChange : -percentChange,
        isPositive,
      };
    });
  };

  // Generate dummy Indian top performing bonds
  const generateIndianTopPerformers = () => {
    const bonds = [
      "REC Limited 2026",
      "ICICI Bank 2025",
      "Tata Steel 2028",
      "State Bank of India 2029",
    ];

    return bonds.map((bond) => {
      const yield_ = (Math.random() * 2 + 7).toFixed(2);
      const change = (Math.random() * 0.2).toFixed(3);
      const percentChange = (Math.random() * 2.5).toFixed(2);

      return {
        name: bond,
        yield: yield_,
        change: change,
        percentChange: percentChange,
      };
    });
  };

  // Generate dummy US top performing bonds
  const generateUSTopPerformers = () => {
    const bonds = [
      "Corporate BBB 5Y",
      "US Treasury 30Y",
      "Johnson & Johnson 2026",
      "Amazon 2030",
    ];

    return bonds.map((bond) => {
      const yield_ = (Math.random() * 2 + 4).toFixed(2);
      const change = (Math.random() * 0.3).toFixed(3);
      const percentChange = (Math.random() * 4).toFixed(2);

      return {
        name: bond,
        yield: yield_,
        change: change,
        percentChange: percentChange,
      };
    });
  };

  // Generate dummy Indian underperforming bonds
  const generateIndianUnderperformers = () => {
    const bonds = [
      "Adani Green Energy 2027",
      "JSW Steel 2025",
      "YES Bank 2026",
      "PNB 2028",
    ];

    return bonds.map((bond) => {
      const yield_ = (Math.random() * 2 + 8).toFixed(2);
      const change = (Math.random() * 0.25).toFixed(3);
      const percentChange = (Math.random() * 3).toFixed(2);

      return {
        name: bond,
        yield: yield_,
        change: -change,
        percentChange: -percentChange,
      };
    });
  };

  // Generate dummy US underperforming bonds
  const generateUSUnderperformers = () => {
    const bonds = [
      "Emerging Market 10Y",
      "Junk Bond Index",
      "Ford Motor 2029",
      "Wells Fargo 2027",
    ];

    return bonds.map((bond) => {
      const yield_ = (Math.random() * 3 + 5).toFixed(2);
      const change = (Math.random() * 0.35).toFixed(3);
      const percentChange = (Math.random() * 5).toFixed(2);

      return {
        name: bond,
        yield: yield_,
        change: -change,
        percentChange: -percentChange,
      };
    });
  };

  // Generate data for both markets initially
  const [indianBonds] = useState(generateIndianBondData());
  const [usBonds] = useState(generateUSBondData());
  const [indianTopPerformers] = useState(generateIndianTopPerformers());
  const [usTopPerformers] = useState(generateUSTopPerformers());
  const [indianUnderperformers] = useState(generateIndianUnderperformers());
  const [usUnderperformers] = useState(generateUSUnderperformers());

  // Data to display based on selected market
  const bonds = bondMarket === "indian" ? indianBonds : usBonds;
  const topPerformers =
    bondMarket === "indian" ? indianTopPerformers : usTopPerformers;
  const underperformers =
    bondMarket === "indian" ? indianUnderperformers : usUnderperformers;

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const toggleAnalyticsSubmenu = () => {
    setShowAnalyticsSubmenu(!showAnalyticsSubmenu);
  };

  const toggleBondMarket = (market) => {
    setBondMarket(market);
  };

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
            {/* Bond Market Toggle Buttons */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    bondMarket === "indian"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => toggleBondMarket("indian")}
                >
                  Indian Bonds
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    bondMarket === "us"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => toggleBondMarket("us")}
                >
                  US Bonds
                </button>
              </div>
            </div>

            {/* Benchmark Yields Section */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">
                {bondMarket === "indian"
                  ? "Indian Benchmark Yields"
                  : "US Benchmark Yields"}
              </h2>
              <a href="#" className="text-green-500">
                All benchmarks
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {bondMarket === "indian" ? (
                // Indian Benchmark Yields
                <>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <p className="text-gray-500">India 10Y</p>
                    <p className="text-xl font-semibold">7.23%</p>
                    <p className="text-green-500">+0.03 (+0.42%)</p>
                  </div>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <p className="text-gray-500">India 5Y</p>
                    <p className="text-xl font-semibold">6.89%</p>
                    <p className="text-red-500">-0.05 (-0.72%)</p>
                  </div>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <p className="text-gray-500">India 2Y</p>
                    <p className="text-xl font-semibold">6.65%</p>
                    <p className="text-green-500">+0.04 (+0.61%)</p>
                  </div>
                </>
              ) : (
                // US Benchmark Yields
                <>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <p className="text-gray-500">US 10Y</p>
                    <p className="text-xl font-semibold">4.23%</p>
                    <p className="text-green-500">+0.05 (+1.19%)</p>
                  </div>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <p className="text-gray-500">US 30Y</p>
                    <p className="text-xl font-semibold">4.41%</p>
                    <p className="text-red-500">-0.03 (-0.67%)</p>
                  </div>
                  <div className="p-4 bg-white shadow rounded-lg">
                    <p className="text-gray-500">US 2Y</p>
                    <p className="text-xl font-semibold">3.92%</p>
                    <p className="text-green-500">+0.02 (+0.51%)</p>
                  </div>
                </>
              )}
            </div>

            {/* Most Active Bonds */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Most Active Bonds</h2>
                <a href="#" className="text-green-500">
                  View all
                </a>
              </div>

              <div className="mt-4 bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 text-gray-500 font-normal text-sm">
                        BOND
                      </th>
                      <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                        YIELD
                      </th>
                      <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                        CHANGE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bonds.map((bond, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="py-3 px-4">
                          <div className="font-medium">{bond.name}</div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="font-medium">{bond.yield}%</div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div
                            className={
                              bond.isPositive
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {bond.isPositive ? "+" : ""}
                            {bond.change}% ({bond.isPositive ? "+" : ""}
                            {bond.percentChange}%)
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Performers */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Top Performers</h2>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 text-gray-500 font-normal text-sm">
                          BOND
                        </th>
                        <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                          YIELD
                        </th>
                        <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                          CHANGE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPerformers.map((bond, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="py-3 px-4">
                            <div className="font-medium">{bond.name}</div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="font-medium">{bond.yield}%</div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="text-green-500">
                              +{bond.change}% (+{bond.percentChange}%)
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Underperformers */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Underperformers</h2>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 text-gray-500 font-normal text-sm">
                          BOND
                        </th>
                        <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                          YIELD
                        </th>
                        <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                          CHANGE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {underperformers.map((bond, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="py-3 px-4">
                            <div className="font-medium">{bond.name}</div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="font-medium">{bond.yield}%</div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="text-red-500">
                              {bond.change}% ({bond.percentChange}%)
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonds;
