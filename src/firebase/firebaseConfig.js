// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA6KQU49PhDdL3FJb8OtfvBVom2qMzCpE",
  authDomain: "calmspace-9e61b.firebaseapp.com",
  projectId: "calmspace-9e61b",
  storageBucket: "calmspace-9e61b.appspot.com",
  messagingSenderId: "852097299855",
  appId: "1:852097299855:web:51147be8381059598d87fa",
  measurementId: "G-WHSD5CGPG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

// Sign Up function
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential.user);
  } catch (error) {
    console.error('Error during sign up:', error.message);
  }
};

// Login function
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
  } catch (error) {
    console.error('Error during login:', error.message);
  }
};

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User logged out.');
  } catch (error) {
    console.error('Error during logout:', error.message);
  }
};