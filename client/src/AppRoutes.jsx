import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashBoard from "./pages/UserDashboard";
import UserDetails from "./pages/UserDetails"
import Stock from "./pages/Stock"
import MutualFund from "./pages/MutualFund";
import Bonds from "./pages/Bonds";
import Explore from "./pages/Explore";
import LandingPage from "./pages/Landing";
import Insurance from "./pages/Insurance";
import StockScreen from "./pages/StockScreen";
import AdmDashBoard from "./pages/admin/AdmDashBoard";
import UserList from "./pages/admin/UserList";
import AdminDetails from "./pages/admin/AdminDetails";
import ProtectedRoute from "./protectedRoutes";

const AppRoutes = () => {
  return (
    
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={
        <LandingPage />
        } />
        
      <Route path="/login" element={
        
        <Login />
        } />
      <Route path="/signup" element={
        <SignUp />} />
      <Route path="/dashboard" element={
    <UserDashBoard />
        } />
      <Route path="/userdetails" element={
         <ProtectedRoute allowedRoles={["User"]}><UserDetails /></ProtectedRoute>
        } />
      <Route path="/stock" element={
        <ProtectedRoute allowedRoles={["User"]}><Stock /></ProtectedRoute>
        } />
      <Route path="/mutualfunds" element={
        <ProtectedRoute allowedRoles={["User"]}><MutualFund/></ProtectedRoute>
        } />
      <Route path="/bonds" element={
        <ProtectedRoute allowedRoles={["User"]}> <Bonds/></ProtectedRoute>
       } />
      <Route path="/explore" element={
        <ProtectedRoute allowedRoles={["User"]}><Explore/></ProtectedRoute>
       } />
      
      <Route path="/insurance" element={
        <ProtectedRoute allowedRoles={["User"]}><Insurance /></ProtectedRoute>
        } />
      <Route path="/stock/:stockSymbol" element={
        <ProtectedRoute allowedRoles={["User"]}>  <StockScreen /></ProtectedRoute>
      } />
     

     {/* admin Routes */}
     <Route path="/admin/dashboard" element={
      <ProtectedRoute allowedRoles={["Admin"]}><AdmDashBoard/></ProtectedRoute>
      } />
     <Route path="/admin/user" element={
        <ProtectedRoute allowedRoles={["Admin"]}><UserList/></ProtectedRoute>
      } />
     <Route path="/admin/details" element={
              <ProtectedRoute allowedRoles={["Admin"]}>  <AdminDetails/></ProtectedRoute>
    } />

    </Routes>
  );
};
export default AppRoutes;
