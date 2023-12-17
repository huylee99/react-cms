import React from 'react';
import { Navigate } from 'react-router-dom';

// configs
import { configs } from '@/configs';

function AuthRoute({ children }) {
  const accessToken = localStorage.getItem(configs.access_token);

  if (!accessToken) {
    return <Navigate to="/login" />
  }

  return children
}

export default AuthRoute