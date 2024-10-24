import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // For page routing
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import '../../style.css';
import Chatbot from '../chatbot/chatbot'; // Import Chatbot component (ensure capitalization)

const Home = () => {
  const [user, setUser] = useState(null); // State to track the user
  const [chatVisible, setChatVisible] = useState(true); // State for chatbot visibility

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log('User logged out.');
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  return (
    <>
      {/* Top Element Holder */}
      <div className="top-element-holder">
        <div className="web-name inline">
          <img src='/assets/girl_2.png' alt="girl" className="inline girl-logo" />
          <h1 className='inline'>Calm<span className="stroke"> Space</span></h1>
        </div>
        <div className="inline right-align">
          <ul className='inline right-align'>
            <li className='inline list-items right-align'>Home</li>
            <li className='inline list-items right-align'>About Us</li>
            <li className='inline list-items right-align'><Link to="">Feedback</Link></li>
            {!user ? (
              <>
                <li className='inline list-items'><Link to="/login">Login</Link></li>
                <li className='inline list-items'><Link to="/registration">Register</Link></li>
              </>
            ) : (
              <li className='inline list-items' onClick={handleLogout}>Logout</li>
            )}
          </ul>
        </div>
      </div>

      {/* Home Section */}
      <div className="container" id="home">
        <div className="text">
          <h1>
            Mental Health <br />
            <span className="stroke">Problems.</span>
          </h1>
          <p>
            At Mindful Journey, we're here to help you navigate the complexities
            of mental health. Our resources and support are designed to empower
            you on your journey to well-being.
          </p>
          <button className="learn_more">
            <Link to="software">Learn more.</Link>
          </button>
        </div>
        <div className="img"></div>
      </div>

      {/* Software Section
      <div className="software" id="software">
        <div className="head">
          <h1>Empowering Your <span className="stroke">Well-Being.</span></h1>
        </div>
        <div className="img">
          <img src="/assets/software.svg" alt="Software" />
        </div>
        <div className="down_button">
          <button className="download">
            <a href="#home">Begin Using Our App →</a>
          </button>
        </div>
      </div> */}

      {/* About Us Section */}
      <div id="about">
      <br /><br /><br />
      <div className="about">
        <div className="starter">
          <h1>
            <span className="stroke">Meet</span> our team of <i className="light">creators,</i><br />
            <i className="light">designers</i> and world-class <br />
            <i className="light">problem solvers.</i>
          </h1>
          {/* <div className="img">
            <img src="./assets/about-us.png" alt="" />
          </div> */}
        </div>
        <br /><br />
        <p className="about_text">
          We are a team studying at
          <b className="italic">Thadomal Shahani Engineering College, <i className="light"> Mumbai</i></b>, brought together by a
          shared passion <br />
          for making a <b className="italic">positive impact</b> in our community. Our journey began with a
          simple yet powerful idea: <br />to create a platform that provides
          <b className="italic">valuable resources</b> and support to those seeking information,
          <br />guidance, and inspiration related to <b className="italic">mental health.</b>
        </p>
        <div className="creators">
  <div className="grid-container">
    <div className="creator-item">
      <img src="./assets/sHUBHAM-bg.png" alt="Shubham Pandey" className="float-hover-one" />
      <div className="info">
        <p className="name">Shubham Pandey</p>
        <p className="class-name bg-yellow-color-black">T21</p>
      </div>
    </div>
    <div className="creator-item">
      <img src="./assets/sATISH-bg.png" alt="Satish Shabade" className="float-hover-two" />
      <div className="info">
        <p className="name">Satish Shabade</p>
        <p className="class-name bg-yellow-color-black">T21</p>
      </div>
    </div>
    <div className="creator-item">
      <img src="./assets/sANYA-bg.png" alt="Sanya Ramchandani" className="float-hover-three" />
      <div className="info">
        <p className="name">Sanya Ramchandani</p>
        <p className="class-name bg-yellow-color-black">T23</p>
      </div>
    </div>
    <div className="creator-item">
      <img src="./assets/hERAMB-bg.png" alt="Heramb Vengurlekar" className="float-hover-four" />
      <div className="info">
        <p className="name">Heramb Vengurlekar</p>
        <p className="class-name bg-yellow-color-black">T23</p>
      </div>
    </div>
  </div>
</div>

        <br /><br /><br /><br /><br />
      </div>
      </div>

      
      {/* Chatbot Section */}
      <div className='threed'>
        <Chatbot/>
      </div>
            <hr/>
      <div className='bottom-element-holder'>
        <p>
        developed by <a href="https://github.com/HerambVE" target='blank'>@heyrmb</a>
        </p>
      </div>
    </>
  );
};

export default Home;
