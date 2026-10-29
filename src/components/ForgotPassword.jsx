import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
  if (!email.trim()) {
    setMessage("Please enter your email address.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email.trim());
    setMessage(
      "If an account exists with this email, you'll receive a password reset link."
    );
  } catch (error) {
    console.error("Password reset error:", error);
    setMessage("Unable to send reset email. Please try again.");
  }
};

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;


