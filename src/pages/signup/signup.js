import React, { useState } from 'react';
import { signUp } from '../../firebase/firebaseConfig';  // Import only the signUp function
import '../../style.css'; // Keeping the same CSS file

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      await signUp(email, password);  // Call the signUp function
      setEmail(''); // Clear email input
      setPassword(''); // Clear password input
    } catch (err) {
      setError(err.message); // Set error message if sign up fails
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
        <form onSubmit={handleSignUp}>
          <div className="email">
            <i className="fa-regular fa-user"></i>
            <input
              type="email"  // Use type="email" for better validation
              name="email"
              value={email} // Controlled input
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
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          <button type="submit">SIGN UP</button> {/* Update button text */}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
