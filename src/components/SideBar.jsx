import React from 'react';
import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

import Login from "./Login";
import './SideBar.css';
const Sidebar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);


 useEffect(() => {
  return onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (currentUser) setShowLogin(false);
  });
}, []);
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <button className="sidebar__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </button>
      <div className={isOpen ? "sidebar sidebar--open" : "sidebar"}>
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
              to="/library"
              className={({ isActive }) =>
                isActive ? "li active" : "li"
              }
            >
              My Library
            </NavLink>
          </li>
          <li><span className="no-cursor">Highlights</span></li>
          <li>
            <span className="no-cursor">Search</span>
          </li>
          <li>
            <NavLink to="/settings" className="li">
              Settings
            </NavLink>
          </li>
          <li><span className="no-cursor">Help & Support</span></li>
          <li>
            {user ? (
              <button className="sidebar__auth" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="sidebar__auth"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            )}
          </li>

        </ul>
          </div>
  {showLogin && (
  <div className="auth__overlay">
    <div className="auth__modal">
      <button
        className="login-close"
        onClick={() => setShowLogin(false)}
      >
        ×
      </button>
      <Login />
    </div>
  </div>
)}
</>
);
};

export default Sidebar;