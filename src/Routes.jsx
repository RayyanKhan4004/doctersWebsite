import React from 'react'
import App from './routes/App';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import OrthoRoute from './routes/OrthoRoute';
import Botox from './routes/Botox';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },{
      path: "/Ortho",
      element: <OrthoRoute/>
    },
    {
      path: "/Botox",
      element: <Botox/>
    }
  ]);
  export default router