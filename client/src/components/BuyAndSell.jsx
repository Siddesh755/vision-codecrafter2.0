import React, { useState } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setUser,clearUser } from "../redux/userSlice";

function BuyAndSell({ selectedStock }) {
  console.log("Selected Stock:", selectedStock);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  

  const [tradeType, setTradeType] = useState('BUY');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(selectedStock?.price || 0);
  const [userBalance, setUserBalance] = useState(user?.balance || 0);
  const [ownedStocks, setOwnedStocks] = useState(10); // Example stock count
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const totalPrice = quantity * price;
  const API_BASE_URL = import.meta.env.VITE_APP_REACT_BASE_URL;
  
  // Function to handle buy transaction
  const handleBuy = async () => {
    const currentBalance = parseFloat(userBalance); // Convert string to number
  const totalCost = parseFloat(totalPrice);

    console.log(`Attempting to buy ${quantity} stocks for ₹${totalPrice}`);

    if (currentBalance < totalCost) {
      console.log("Insufficient balance!");
      setErrorMessage("Insufficient balance!");
      return;
    }

    const newBalance = currentBalance - totalCost;
    setUserBalance(newBalance);
    dispatch(clearUser())

    try {
      const totalPrice = quantity * price;
  const API_BASE_URL = import.meta.env.VITE_APP_REACT_BASE_URL;
  

      const response = await axios.put(`${API_BASE_URL}/api/user/balance`, {
        id: user.id,
        balance: newBalance,
      },{
        withCredentials:true
      });

      console.log("Trade successful:", response.data);
      await dispatch(setUser(response.data));

      setSuccessMessage("Purchase successful!");
      setErrorMessage("");
      navigate("/stock")
    } catch (error) {
      console.error("Trade failed:", error);
      setErrorMessage("Transaction failed. Please try again.");
    }
  };

  // Function to handle sell transaction
  const handleSell = async () => {
    const currentBalance = parseFloat(userBalance); // Convert string to number
  const totalCost = parseFloat(totalPrice);

    console.log(`Attempting to buy ${quantity} stocks for ₹${totalPrice}`);

    if (currentBalance < totalCost) {
      console.log("Insufficient balance!");
      setErrorMessage("Insufficient balance!");
      return;
    }

    const newBalance = currentBalance + totalCost;
    setUserBalance(newBalance);
    dispatch(clearUser())

    try {
      const totalPrice = quantity * price;
  const API_BASE_URL = import.meta.env.VITE_APP_REACT_BASE_URL;
  
      const response = await axios.put(`${API_BASE_URL}/api/user/balance`, {
        id: user.id,
        balance: newBalance,
      },{
        withCredentials:true
      });

      console.log("Trade successful:", response.data);
      await dispatch(setUser(response.data));
      

      setSuccessMessage("Sold successful!");
      setErrorMessage("");
      navigate("/stock")
    } catch (error) {
      console.error("Trade failed:", error);
      setErrorMessage("Transaction failed. Please try again.");
    } };

  // Handle trade execution
  const handleTrade = async () => {
    console.log(`Executing trade: ${tradeType}`);
    if (tradeType === "BUY") {
      await handleBuy();
    } else {
      handleSell();
    }
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(newQuantity);
    setPrice(newQuantity * (selectedStock?.price || 0));
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md w-96 fixed right-5 top-[47%]">
      {selectedStock ? (
        <>
          <h2 className="text-lg font-semibold">{selectedStock.name}</h2>
          <p className="text-gray-500">
            NSE ₹{selectedStock.price || 0} ({selectedStock.percentChange}%)
          </p>

          {/* BUY / SELL Buttons */}
          <div className="flex mt-3 border-b">
            <button
              className={`flex-1 py-2 ${tradeType === 'BUY' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
              onClick={() => {
                console.log("Trade type set to BUY");
                setTradeType('BUY');
              }}
            >
              BUY
            </button>
            <button
              className={`flex-1 py-2 ${tradeType === 'SELL' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
              onClick={() => {
                console.log("Trade type set to SELL");
                setTradeType('SELL');
              }}
            >
              SELL
            </button>
          </div>

          {/* Quantity Input */}
          <div className="mt-3">
            <label className="block text-gray-600">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full p-2 border rounded mt-1"
              min="1"
            />
          </div>

          {/* Total Price Display */}
          <div className="mt-3">
            <label className="block text-gray-600">Total Price</label>
            <input
              type="number"
              value={price}
              className="w-full p-2 border rounded mt-1"
              readOnly
            />
          </div>

          {/* Order Execution Message */}
          <p className="mt-3 text-sm text-gray-500">
            Order will be executed at ₹{selectedStock.price || 0} or lower price
          </p>

          {/* Trade Execution Button */}
          <button
            className={`w-full mt-4 py-2 text-white rounded ${tradeType === 'BUY' ? 'bg-green-500' : 'bg-red-500'}`}
            onClick={handleTrade}
          >
            {tradeType} at ₹{price}
          </button>

          {/* Success & Error Messages */}
          {successMessage && <p className="mt-2 text-green-500">{successMessage}</p>}
          {errorMessage && <p className="mt-2 text-red-500">{errorMessage}</p>}
        </>
      ) : (
        <p className="text-center text-gray-500">Select a stock to trade</p>
      )}
    </div>
  );
}

export default BuyAndSell;
