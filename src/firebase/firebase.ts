import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: "AIzaSyAYeMe_NVZvA6CtImNEvR_dPzidbHZfC1A",
    authDomain: "admisssions-apply.firebaseapp.com",
    projectId: "admisssions-apply",
    storageBucket: "admisssions-apply.appspot.com",
    messagingSenderId: "1014143671566",
    appId: "1:1014143671566:web:88caabe157480fdd0d4b5f",
    measurementId: "G-F5DXCNTH51"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
