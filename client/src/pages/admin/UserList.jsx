import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AdmSidebar from "../../components/AdmSidebar";

function UserList() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [users, setUsers] = useState([]);

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
  useEffect(() => {
    setUsers([
      

     
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com" },
        { id: 4, name: "Bob Brown", email: "bob@example.com" },
        { id: 5, name: "Charlie White", email: "charlie@example.com" },
        { id: 6, name: "David Black", email: "david@example.com" },
        { id: 7, name: "Eve Adams", email: "eve@example.com" },
        { id: 8, name: "Franklin Green", email: "franklin@example.com" },
        { id: 9, name: "Grace Miller", email: "grace@example.com" },
        { id: 10, name: "Hank Wilson", email: "hank@example.com" },
        { id: 11, name: "Ivy Taylor", email: "ivy@example.com" },
        { id: 12, name: "Jack Martinez", email: "jack@example.com" },
        { id: 13, name: "Karen Lee", email: "karen@example.com" },
        { id: 14, name: "Leo Harris", email: "leo@example.com" },
        { id: 15, name: "Mia Clark", email: "mia@example.com" },
        { id: 16, name: "Noah Lewis", email: "noah@example.com" },
        { id: 17, name: "Olivia Hall", email: "olivia@example.com" },
        { id: 18, name: "Peter Young", email: "peter@example.com" },
        { id: 19, name: "Quinn Allen", email: "quinn@example.com" },
        { id: 20, name: "Ryan Scott", email: "ryan@example.com" }
    
      
    
      
    ]);
  }, []);
  return (
    <div className="min-h-screen flex bg-[#10002b]">
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-[#10002b] text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 xl:static xl:translate-x-0`}
      >
        <AdmSidebar />
      </div>

      <div className="flex-1 bg-gray-100">
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
          {/* User List */}
          <div className="bg-white p-4 shadow rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Registered Users</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id} className="border-b py-2">
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
