import React, { useState } from 'react';
import './SignUp.css'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const SignUp = () => {
    // State variables for form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");


  const handleSubmit = async (e) => {
  e.preventDefault(); setError("")

  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Account created successfully!");
    alert("Your account has been created!");
  }catch (error) {
  if (error.code === "auth/invalid-email") {
    setError("Please enter a valid email address.");
  } else if (error.code === "auth/weak-password") {
    setError("Password must be at least 6 characters.");
  } else if (error.code === "auth/email-already-in-use") {
    setError("This email is already registered.");
  } else {
    setError("Something went wrong. Please try again.");
  }
}
};
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p className="signup__error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
          
        </div>
    );
};

export default SignUp;