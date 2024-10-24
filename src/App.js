import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import Login from './pages/login/login.js';
import Signup from './pages/signup/signup.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Signup />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
