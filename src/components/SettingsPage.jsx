import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import "./SettingsPage.css";

function SettingsPage() {
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setSubscription(null);
      setLoading(true);

      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));

          if (userDoc.exists()) {
            console.log("Firestore data:", userDoc.data());
            setSubscription(userDoc.data());
          } else {
            console.log("User document not found");
          }
        } catch (error) {
          console.error("Error loading subscription:", error);
        }
      }

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
          <button
            className="settings-login--btn"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="settings-section">
          <h2>Email</h2>
          <p>{user.email}</p>
          <h2>Subscription Plan</h2>
          <p>{subscription?.subscriptionPlan || "No plan found"}</p>

          <h2>Subscription Status</h2>
          <p>{subscription?.subscriptionStatus || "Inactive"}</p>
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