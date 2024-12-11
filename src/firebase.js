// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa5wtu66InpxO8O7Xge0Kw4CEmuk2xC30",
  authDomain: "eventify-91c27.firebaseapp.com",
  projectId: "eventify-91c27",
  storageBucket: "eventify-91c27.firebasestorage.app",
  messagingSenderId: "1067597027676",
  appId: "1:1067597027676:web:707f480a7812cdb9044999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app,auth };