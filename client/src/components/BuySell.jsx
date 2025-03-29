import React, { useState } from "react";

const BuySell = ({ fund, onClose }) => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [sipAmount, setSipAmount] = useState(0);
  const [sipDate, setSipDate] = useState("21st");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-80">
      {/* Close Button */}
      <button className="text-red-500 float-right" onClick={onClose}>✖</button>

      {/* Tabs: Monthly SIP & One-Time */}
      <div className="flex border-b mt-2">
        <button
          className={`flex-1 pb-2 text-center ${
            activeTab === "monthly" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("monthly")}
        >
          MONTHLY SIP
        </button>
        <button
          className={`flex-1 pb-2 text-center ${
            activeTab === "one-time" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("one-time")}
        >
          ONE-TIME
        </button>
      </div>

      {/* SIP Amount Input */}
      <div className="mt-4">
        <p className="text-sm text-gray-500">SIP Amount</p>
        <div className="flex items-center border p-2 rounded-md">
          <span className="text-lg">₹</span>
          <input
            type="number"
            value={sipAmount}
            onChange={(e) => setSipAmount(e.target.value)}
            className="w-full outline-none ml-2"
          />
        </div>
      </div>

      {/* SIP Date Selection */}
      {activeTab === "monthly" && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">Monthly SIP Date</p>
          <div className="flex items-center border p-2 rounded-md">
            <span className="text-lg">📅</span>
            <span className="ml-2">{sipDate}</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Next SIP installment on 21st of Apr
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-6 flex space-x-3">
        <button className="flex-1 py-2 border border-green-500 text-green-500 rounded-md">
          ADD TO CART
        </button>
        <button className="flex-1 py-2 bg-green-500 text-white rounded-md">
          START SIP
        </button>
      </div>
    </div>
  );
};

export default BuySell;
