import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/VisionInvest.svg";


const Sidebar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showAnalyticsSubmenu, setShowAnalyticsSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  const toggleAnalyticsSubmenu = () =>
    setShowAnalyticsSubmenu(!showAnalyticsSubmenu);

  return (
    <div className="min-h-screen flex bg-[#10002b]">
    <div className="fixed left-0 top-0 w-64 h-full    p-5 font-sans z-50">
      <a
        href="/dashboard"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src={logo} className="h-10" alt="Flowbite Logo" />
      </a>
      <ul className="list-none p-0 m-0">
        <li
          className="flex items-center p-2 mt-10 text-white text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#D27EFF]  "
          onClick={() => handleNavigation("/admin/dashboard")}
        >
          
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li
          className="flex items-center p-2 text-white text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#D27EFF]  "
          onClick={() => handleNavigation("/admin/user")}
        >
          
          <Link to="/admin/user">Users</Link>
        </li>
        {/* <li
          className="flex items-center p-2 text-white text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#D27EFF]  "
          onClick={() => handleNavigation("/explore")}
        >
          
          <Link to="/explore">Users</Link>
        </li> */}
        {/* <li
          className="flex items-center p-2 text-white text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#D27EFF]  "
          onClick={() => handleNavigation("/stock")}
        >
          
          <Link to="/stock">Stocks and F&O</Link>
        </li>
        <li
          className="flex items-center p-2 text-white  text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#D27EFF]  "
          onClick={() => handleNavigation("/mutualfunds")}
        >
          
          <Link to="/mutualfunds">Mutual Funds</Link>
        </li>
        <li
          className="flex items-center p-2 text-white text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#D27EFF]  "
          onClick={() => handleNavigation("/bonds")}
        >
          
          <Link to="/bonds">Bonds</Link>
        </li>
        <li
          className="flex items-center p-2 text-white text-xl font-bold cursor-pointer transition-colors duration-300 hover:text-[#D27EFF] "
          onClick={() => handleNavigation("/insurance")}
        >
          
          <Link to="/insurance">Insurance</Link> */}
        {/* </li> */}

      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
