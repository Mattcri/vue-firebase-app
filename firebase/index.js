// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsHMtiG2cFamQyL-8Sx52T776jzFTU1iI",
  authDomain: "dashboard-app-3a6fb.firebaseapp.com",
  projectId: "dashboard-app-3a6fb",
  storageBucket: "dashboard-app-3a6fb.appspot.com",
  messagingSenderId: "1066851508363",
  appId: "1:1066851508363:web:c4038f2c241f3caa0f748e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }