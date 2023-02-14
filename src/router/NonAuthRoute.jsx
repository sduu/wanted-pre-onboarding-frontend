import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = () => {
  const authToken = localStorage.getItem('access_token');

  return !authToken ? <Outlet /> : <Navigate to='/todo' />;
};

export default NonAuthRoute;
