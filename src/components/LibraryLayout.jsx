import React from 'react';
import { Outlet } from "react-router";
import Sidebar from './SideBar'; 
const LibraryLayout = () => {
    return (
        <div style={layoutStyle}>
            <Sidebar />
            <div style={contentStyle}>
                <Outlet /> {/* This will render the matched child route */}
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