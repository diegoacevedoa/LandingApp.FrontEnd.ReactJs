import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, isAllowed, redirectTo = "/landing" }) => {
  return isAllowed ? (
    children ? (
      children
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default ProtectedRoute;
