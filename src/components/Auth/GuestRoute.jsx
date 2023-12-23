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

/* 
web MPA
- SEO friendly
- slow
- load resource of page when user access page

web SPA (fw nextjs) server side rendering-> load html css in server -> serve static file on client
- SEO friendly
- fast
- when user acc page, it just load resource of page one time


SPA react
- SEO friendly
- pre-rendered
- page not SEO => react render
- page SEO => server render

*/


