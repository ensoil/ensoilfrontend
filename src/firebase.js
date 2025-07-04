// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXoWLzdazktpc8XQsVDmP8q98cf7F4NEo",
  authDomain: "capstone-ensoil.firebaseapp.com",
  projectId: "capstone-ensoil",
  storageBucket: "capstone-ensoil.firebasestorage.app",
  messagingSenderId: "33847895492",
  appId: "1:33847895492:web:5cb60c8a8bd9e6e03d7091",
  measurementId: "G-EV5TZ5S4YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };