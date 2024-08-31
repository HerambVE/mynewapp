import React from 'react';

import './App.css';

function App() {
  return (
    <>
      <div className="navigation-btn">
        <label htmlFor="profile-btn"><p>Account</p>
        </label>
          <button id="profile-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
          </button>
      </div>
      <div className="textarea dark-color round">
        <form target="/" className='neechekicheeze dark-color round'>
          <textarea placeholder='type here...' className="text-area"></textarea>
          <label>
            <input type="submit"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16" className="send-btn">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
