import React, { useState } from 'react';
import './dropdown.css'; // Add CSS for styling if needed

const OptionsMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="options-menu-container">
      <label htmlFor="profile-btn">
      <button id="profile-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" onClick={toggleMenu}>
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
      </button>
      </label>
      {isMenuVisible && (
        <div className="menu">
          <ul>
            <li><a>ACCOUNT</a></li>
            <li><a>APPOINTMENTS</a></li>
            <li><a>HELP & CONTACT US</a></li>
            <li><a>SIGN OUT</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptionsMenu;
