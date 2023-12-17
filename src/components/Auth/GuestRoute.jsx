import React from 'react';
import { Navigate } from 'react-router-dom';

// configs
import { configs } from '@/configs';

function GuestRoute({ children }) {
  const accessToken = localStorage.getItem(configs.access_token);

  if (accessToken) {
    return <Navigate to="/" />
  }

  return children
}

export default GuestRoute