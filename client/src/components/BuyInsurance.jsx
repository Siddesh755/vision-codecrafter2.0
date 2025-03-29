import React from "react";

const BuyInsurance = ({ selectedInsurance }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Buy Insurance</h2>
      {selectedInsurance ? (
        <div>
          <p className="text-gray-700">
            <strong>Insurance:</strong> {selectedInsurance.name}
          </p>
          <p className="text-gray-700">
            <strong>Coverage:</strong> {selectedInsurance.coverage}
          </p>
          <p className="text-gray-700">
            <strong>Premium:</strong> {selectedInsurance.premium}
          </p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
            Purchase Insurance
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Select an insurance plan to buy.</p>
      )}
    </div>
  );
};

export default BuyInsurance;
