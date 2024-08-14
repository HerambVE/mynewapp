import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        {/* Navbar content here */}
      </div>
      <div className="sidebar">
        <div className="flex-shrink-0 p-3" style={{ width: '280px' }}>
          <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
            <svg className="bi pe-none me-2" width="30" height="24">
              <use href="#bootstrap" />
            </svg>
            <span className="fs-5 fw-semibold">Collapsible</span>
          </a>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                Home
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Dashboard
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Orders
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                </ul>
              </div>
            </li>
            <li className="border-top my-3"></li>
            <li className="mb-1">
              <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                Account
              </button>
              <div className="collapse" id="account-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
                  <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        {/* Main content here */}
      </div>
      <div className="textarea">
        <form target="/" className='neechekicheeze round'>
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
