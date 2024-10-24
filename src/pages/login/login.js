import React, { useState } from 'react';
import { login } from '../../firebase/firebaseConfig';  
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('../home'); // Redirect to the home page after login
    } catch (error) {
      console.error('Login Failed', error);
      // Handle error, e.g., show a message to the user
    }
  };

  return (
    <div>
      <div className="branding">
        <img src="../../assets/girl_2.png" alt="girl" className="girl" />
        <h1>
          Calm <span className="stroke">Space</span>
        </h1>
      </div>

      <div className="container">
        <div className="user">
          <i className="fa-regular fa-user"></i>
        </div>
        <form onSubmit={handleLogin}>
          <div className="email">
            <i className="fa-regular fa-user"></i>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="pass">
            <i className="fa-solid fa-key"></i>
            <input
              type="password"
              name="pass"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
