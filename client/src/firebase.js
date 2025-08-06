// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f8ac4.firebaseapp.com",
  projectId: "mern-estate-f8ac4",
  storageBucket: "mern-estate-f8ac4.firebasestorage.app",
  messagingSenderId: "237505617118",
  appId: "1:237505617118:web:9bf11d6e43ff076f13364f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
