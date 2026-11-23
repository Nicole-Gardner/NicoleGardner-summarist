import React from 'react';
import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { FaHome, FaBookOpen, FaCog, FaHighlighter, FaSearch,
  FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";

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
        <img
          src="/assets/logo.png"
          alt="Summarist"
          className="sidebar__logo"
        />
        <ul>
          <li>
            <NavLink
              to="/for-you"
              className={({ isActive }) =>
                isActive ? "li active" : "li"
              }
            >
              <FaHome /> For You
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                isActive ? "li active" : "li"
              }
            >
              <FaBookOpen /> My Library
            </NavLink>
          </li>

          <li><span className="no-cursor">
            <FaHighlighter /> Highlights</span></li>
          <li><span className="no-cursor">
            <FaSearch /> Search</span></li>
        </ul>

        <ul className="sidebar__bottom">
          <li>
            <NavLink to="/settings" className="li">
              <FaCog /> Settings
            </NavLink>
          </li>

          <li>
            <span className="no-cursor">
              <FaQuestionCircle /> Help & Support</span>
          </li>

          <li>
            {user ? (
              <button
                className="sidebar__auth"
                onClick={handleLogout}
              >  <FaSignOutAlt />
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