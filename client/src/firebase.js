/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-589e5.firebaseapp.com",
  projectId: "mern-estate-589e5",
  storageBucket: "mern-estate-589e5.appspot.com",
  messagingSenderId: "22164976909",
  appId: "1:22164976909:web:65765f05db21a18c13ec44",
  measurementId: "G-X9TVKYNC5T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);