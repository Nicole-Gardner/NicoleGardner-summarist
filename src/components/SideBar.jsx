import React from 'react';
import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router";
import './SideBar.css';
const Sidebar = () => {
    const [user, setUser] = useState(null);
const navigate = useNavigate();

useEffect(() => {
  return onAuthStateChanged(auth, setUser);
}, []);

const handleLogout = async () => {
  await signOut(auth);
  navigate("/");
};
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
                <li><a href="#" className="no-cursor">Highlights</a></li>
                <li><a href="#" className="no-cursor">Search</a></li>
                <li><Link to="/settings" className="li">Settings</Link></li>
                <li><a href="#" className="no-cursor">Help & Support</a></li>
                <li>
  {user ? (
    <button className="sidebar__auth" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <Link to="/" className="li">
      Login as a Guest
    </Link>
  )}
</li>

            </ul>
        </div>
    );
};
export default Sidebar;