import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './navbar';


export const Layout = ({children}) => {
  return (
    <div className="layout">
      <ResponsiveAppBar/>
      <Outlet />
    </div>
  )
}

export default Layout;