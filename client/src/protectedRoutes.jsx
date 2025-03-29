import React, { useEffect, useState } from "react";
import { Navigate,  } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.user.user); // Get the user from Redux

  if (!user) {

    return <Navigate to="/" replace />;
  }

 


  if (!allowedRoles.includes(user.role)) {
   
    return <Navigate to="/dashboard" replace />;
  }

  // If the user is authenticated and has the required role, render the children
  return children;
};

export default ProtectedRoute;