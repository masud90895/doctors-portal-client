import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import Loader from "../Pages/Shared/Loader";

const PriveteRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);
  //loading 
  if (loading) {
    return <Loader />;
  }
  //user thakle 
  if (user?.email || user?.uid) {
    return children;
  }
  //user na thakle
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PriveteRoute;
