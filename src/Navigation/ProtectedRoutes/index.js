import React, { useContext } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext';

const ProtectedRoutes = () => {
  const loginContext = useContext(AuthContext);
  return loginContext?.accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
