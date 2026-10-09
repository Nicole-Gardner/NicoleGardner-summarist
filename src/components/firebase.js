import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx5EdTP8jGXZjlQLIg2aQ-_2Zt45TEJk8",
  authDomain: "nicole-summarist.firebaseapp.com",
  projectId: "nicole-summarist",
  storageBucket: "nicole-summarist.firebasestorage.app",
  messagingSenderId: "468755420472",
  appId: "1:468755420472:web:541ae5b565af3ac99d1dcd",
  measurementId: "G-7XS49CLQQT"
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
