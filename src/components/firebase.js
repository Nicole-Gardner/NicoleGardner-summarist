import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseConfig'; // Adjust the path as necessary

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
    // Redirect or set user state here
  } catch (error) {
    setError(error.message);
  }
};
