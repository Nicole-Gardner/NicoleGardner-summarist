import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router";
import GoogleLogin from "./GoogleLogin";
import ForgotPassword from "./ForgotPassword";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
    setError("");
    navigate("/for-you");
  } catch (error) {
    setError(error.message);
  
  }
};
  
  const handleGuestLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, "guest@gmail.com", "guest234");
      console.log("User logged in successfully");
      setError("");
      navigate("/for-you"); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn--login" onClick={handleLogin}>Login</button>
      <button className="btn btn--guest" onClick={handleGuestLogin}>
        Login as a Guest
      </button>
      <GoogleLogin />
      <button className="btn btn--forgot" onClick={() => setShowForgotPassword(true)}>
        Forgot Password?
      </button>
      <button className="btn btn--account" onClick={() => navigate("/signup")}>
        Don't have an account?
      </button>

{showForgotPassword && <ForgotPassword />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
