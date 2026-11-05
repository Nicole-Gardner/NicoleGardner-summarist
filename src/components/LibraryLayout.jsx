import React from 'react';
import { Outlet } from "react-router";
import Sidebar from './SideBar'; 
import SearchBar from "./SearchBar";
const LibraryLayout = () => {
  return (
    <div style={layoutStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
};

const layoutStyle = {
    display: 'flex',
    height: '100vh',
};

const contentStyle = {
    flex: 1,
    padding: '20px',
};

export default LibraryLayout;