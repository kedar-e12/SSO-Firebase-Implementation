// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2XmOJxj6rNJL2-VN9-dUhQrO8Kjk6RdU",
  authDomain: "sso-lab-93fc7.firebaseapp.com",
  projectId: "sso-lab-93fc7",
  storageBucket: "sso-lab-93fc7.appspot.com",
  messagingSenderId: "696237035806",
  appId: "1:696237035806:web:ffac2463a1c16ced09b90f",
  measurementId: "G-XJLJ9X8NKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Remove this line

// Export the necessary Firebase services
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
