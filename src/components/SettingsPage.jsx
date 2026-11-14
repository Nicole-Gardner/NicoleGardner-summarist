import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./SettingsPage.css";

function SettingsPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>

      {!user ? (
        <div className="settings-page-login">
          <figure className="settings-login--image">
            <img src="/assets/login.png" alt="Login" />
          </figure>
          <div className="settings-login--text">
            Log in to your account to see your details.
          </div>
          <button className="settings-login--btn">
            Login
          </button>
        </div>
      ) : (
        <div className="settings-section">
          <h2>Email</h2>
          <p>{user.email}</p>
          {/* Click this button once to log out of guest@gmail.com and see the Login illustration view! */}
          <button
            className="settings-login--btn"
            style={{ marginTop: "16px" }}
            onClick={() => signOut(auth)}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default SettingsPage;