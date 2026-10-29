import React from 'react';
import { Link, NavLink } from "react-router";
import './SideBar.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li>
                    <NavLink
                        to="/for-you"
                        className={({ isActive }) =>
                            isActive ? "li active" : "li"
                        }
                    >
                        For You
                    </NavLink>
                </li>
               <li>
  <NavLink
    to="/library-page"
    className={({ isActive }) =>
      isActive ? "li active" : "li"
    }
  >
    My Library
  </NavLink>
</li>
                <li><Link to="/highlights" className="li">Highlights</Link></li>
                <li><Link to="/search" className="li">Search</Link></li>
                <li><Link to="/settings" className="li">Settings</Link></li>
                <li><Link to="/help" className="li">Help & Support</Link></li>
                <li><Link to="/login" className="li">Login</Link></li>

            </ul>
        </div>
    );
};
export default Sidebar;