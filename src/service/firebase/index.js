// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEsN4i6x50Sn6b9w_P9UZlCinvA4TIF3E",
  authDomain: "react-vite-js.firebaseapp.com",
  databaseURL: "https://react-vite-js-default-rtdb.firebaseio.com",
  projectId: "react-vite-js",
  storageBucket: "react-vite-js.firebasestorage.app",
  messagingSenderId: "84701867847",
  appId: "1:84701867847:web:2d0db91eee85bcd39ce662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
export const db = getFirestore(app);