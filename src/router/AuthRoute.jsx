import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  const authToken = localStorage.getItem('access_token');

  return !authToken ? <Navigate to='/signin' /> : <Outlet />;
};

export default AuthRoute;
