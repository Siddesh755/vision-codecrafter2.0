import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/Logo.svg";
import userIcon from "../assets/user.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Navbar() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const userDropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user.user)
  console.log(user)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add search functionality here if needed
  };

  const logout = async () => {
    const API_BASE_URL = import.meta.env.VITE_APP_REACT_BASE_URL; // Fix env variable
      try {
        const response = await axios.post(`${API_BASE_URL}/api/user/logout`)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
  }

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 text-white shadow-md">
      {/* Logo Section - Uncomment if needed */}
      {/* <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
      </div> */}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Stocks..."
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 rounded-lg w-[45%] focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white text-gray-700 placeholder-gray-400"
      />

      {/* User Profile Section */}
      <div className="relative" ref={userDropdownRef}>
        <div
          className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-orange-600 transition-colors"
          onClick={toggleDropdown}
        >
          {/* J This could be dynamic based on user initial */}
          {user?.name?.charAt(0).toUpperCase() || "?"}
        </div>

        {/* Dropdown Menu */}
        {isUserDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <button
              onClick={() => navigate("/admin/details")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </button>
            
            <button
              onClick={() => logout()}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;