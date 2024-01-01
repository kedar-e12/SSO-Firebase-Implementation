// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxVuy_LFbaA2RJ1uMSeEOK7Eb8fPCHKr4",
  authDomain: "fir-react-app-91505.firebaseapp.com",
  projectId: "fir-react-app-91505",
  storageBucket: "fir-react-app-91505.appspot.com",
  messagingSenderId: "561012137414",
  appId: "1:561012137414:web:0ef449d2a6a091ab0de6c7",
  measurementId: "G-HVYD4LH8RC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
