import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BuyInsurance from "../components/BuyInsurance";

const Insurance = () => {
  const [selectedCategory, setSelectedCategory] = useState("Health");
  const [selectedInsurance, setSelectedInsurance] = useState(null);
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
  

  // Dummy insurance data
  const insuranceData = {
    Health: [
      {
        name: "HDFC ERGO Health Insurance",
        premium: "₹5,000/year",
        coverage: "₹5 Lakh",
        benefits: "Cashless hospitals, tax benefits",
      },
      {
        name: "ICICI Lombard Health Insurance",
        premium: "₹6,500/year",
        coverage: "₹7 Lakh",
        benefits: "Pre & post-hospitalization, critical illness cover",
      },
      {
        name: "Max Bupa Health Companion",
        premium: "₹4,800/year",
        coverage: "₹5 Lakh",
        benefits: "Free annual health checkups",
      },
    ],
    Life: [
      {
        name: "LIC Jeevan Anand",
        premium: "₹10,000/year",
        coverage: "₹10 Lakh",
        benefits: "Lifetime cover, maturity benefits",
      },
      {
        name: "HDFC Click 2 Protect",
        premium: "₹8,500/year",
        coverage: "₹1 Cr",
        benefits: "Accidental death benefit, low premium",
      },
      {
        name: "ICICI Prudential iProtect Smart",
        premium: "₹7,000/year",
        coverage: "₹75 Lakh",
        benefits: "Critical illness cover, tax benefits",
      },
    ],
    Vehicle: [
      {
        name: "Bajaj Allianz Car Insurance",
        premium: "₹4,000/year",
        coverage: "Own Damage & Third Party",
        benefits: "Cashless repairs, roadside assistance",
      },
      {
        name: "TATA AIG Two-Wheeler Insurance",
        premium: "₹2,500/year",
        coverage: "Own Damage & Third Party",
        benefits: "Accidental cover, quick claims",
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

        <div className="p-6 flex flex-col xl:flex-row gap-6">
          {/* Left Section - Insurance Categories & Plans */}
          <div className="xl:w-3/4 w-full">
            {/* Category Selection */}
            <div className="flex gap-4 mb-6">
              {["Health", "Life", "Vehicle"].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} Insurance
                </button>
              ))}
            </div>

            {/* Insurance Plans */}
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">
                {selectedCategory} Insurance Plans
              </h2>

              <div>
                {insuranceData[selectedCategory].map((plan, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 p-4 cursor-pointer hover:bg-gray-100"
                    onClick={() => setSelectedInsurance(plan)}
                  >
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="font-medium">{plan.name}</h3>
                        <div className="text-gray-500 text-sm">{plan.benefits}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Premium</div>
                        <div className="font-medium">{plan.premium}</div>
                        <div className="text-sm text-gray-500 mt-1">Coverage</div>
                        <div className="font-medium">{plan.coverage}</div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                        Purchase
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Buy Insurance Component */}
          <div className="xl:w-5/12 w-full">
            <BuyInsurance selectedInsurance={selectedInsurance} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Insurance;
