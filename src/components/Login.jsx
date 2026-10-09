import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Call your login function here
    login(email, password);
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};


const users = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
];

function login(email, password) {
  const user = users.find((user) => user.email === email);
  if (!user) {
    setError("Email not found");
    return;
  }
  
  if (user.password === password) {
    console.log("Log the user in, the details are correct");
    // Here you can redirect the user or set the logged-in state
  } else {
    setError("Password is incorrect, try again");
  }
} 