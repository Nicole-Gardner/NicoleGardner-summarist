import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
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

    if (!user) {
        return (
            <div className="settings-page">
                <h2>Log in to view your settings</h2>
                <p>Please log in to access your account information.</p>
                {/* We'll connect your login button and image next */}
            </div>
        );
    }

    return (
        <div className="settings-page">
            <h1>Settings</h1>
            <div className="settings-section">
                <h2>Email</h2>
                <p>{user.email}</p>
            </div>
        </div>
  );
};

export default SettingsPage;