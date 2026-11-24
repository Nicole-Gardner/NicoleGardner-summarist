import React from 'react';
import { Outlet } from "react-router";
import Sidebar from './SideBar'; 
import SearchBar from "./SearchBar";
import { useState } from "react";
const LibraryLayout = () => {
  const [fontSize, setFontSize] = useState(16);
 return (
  <div style={layoutStyle}>
    <Sidebar fontSize={fontSize} setFontSize={setFontSize} />

    <div className="library-layout__content" style={contentStyle}>
      <SearchBar />
      <Outlet context={{ fontSize }} />
    </div>
  </div>
);
};

const layoutStyle = {
  display: "flex",
  minHeight: "100vh",
};

const contentStyle = {
    flex: 1,
    minWidth: 0,
    padding: '20px',
};

export default LibraryLayout;