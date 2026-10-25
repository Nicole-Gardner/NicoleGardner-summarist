
import React from 'react';
import { useNavigate } from "react-router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from './firebase'; // Ensure you have initialized Firebase in this file

const GoogleLogin = () => {
    const navigate = useNavigate();
  const handleGoogleLogin = async () => {
  
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      // User is signed in
      const user = result.user;
      console.log('User Info:', user);
      navigate("/for-you");
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div className="google-login"> 
     <button className="btn btn--google" onClick={handleGoogleLogin}>
  <figure className="google__icon--wrapper">
    <img src="assets/google.png" alt="Google" className="google__icon" />
  </figure>
  Login with Google
</button>
    </div>
  );
};

export default GoogleLogin;