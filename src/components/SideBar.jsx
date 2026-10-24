import React from 'react';
import { Link } from 'react-router'; 
import './SideBar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/" className="li">For You</Link></li>
                <li><Link to="/about" className="li">My Library</Link></li>
                <li><Link to="/library" className="li">Highlights</Link></li>
                <li><Link to="/search" className="li">Search</Link></li>
                <li><Link to="/settings" className="li">Settings</Link></li>
                <li><Link to="/help" className="li">Help & Support</Link></li>
                <li><Link to="/login" className="li">Login</Link></li>
                
            </ul>
        </div>
    );
};
export default Sidebar;