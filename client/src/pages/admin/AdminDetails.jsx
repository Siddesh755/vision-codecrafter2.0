import React, { useState, useEffect, useRef } from "react";
import AdminDetailsCard from "../../components/AdminDetailsCard"
import AdminNavbar from "../../components/AdminNavbar"
import AdminIcon from "../../components/AdminIcon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminSidebar from "../../components/AdmSidebar"
import jsPDF from "jspdf";
import axios from "axios";

function AdminDetails() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);
  // console.log(userData);
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

 

const generatePDF = async () => {
  try {
    const API_BASE_URL = import.meta.env.VITE_APP_REACT_BASE_URL; // Fix env variable
    const response = await axios.get(
      `${API_BASE_URL}/api/investments/generate-pdf?user_id=${userData.id}`,
      {
        responseType: "blob", // Ensure we get binary data
      }
    );

    // Create a Blob from the PDF response
    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link and trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "investment_report.pdf"; // Name of the downloaded file
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};




  return (
    <div className="min-h-screen flex bg-[#10002b]">
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full bg-[#10002b] text-white z-50 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out w-64 xl:static xl:translate-x-0`}
    >
      <AdminSidebar />
    </div>

    <div className="flex-1 bg-gray-100">
      <AdminNavbar />

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
        <div className="flex items-center justify-center mt-6 mb-6">
          <div className="flex flex-col w-5/12 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <AdminIcon data={userData} />
            <AdminDetailsCard data={userData} />

            {/* PDF Download Button */}
            <button
              onClick={generatePDF}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Download PDF Report
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminDetails;
