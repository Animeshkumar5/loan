// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <--- 1. Import Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB61vqwDkJ1R7V5BZkeC9MQq_n7PhUEHBk",
  authDomain: "paisasolution-f9b7a.firebaseapp.com",
  projectId: "paisasolution-f9b7a",
  storageBucket: "paisasolution-f9b7a.firebasestorage.app",
  messagingSenderId: "79813222778",
  appId: "1:79813222778:web:c69481d9da5cf0b6c476c3",
  measurementId: "G-FDP60FR7EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Database
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app); 

// Export both Database and Auth
export { db, auth }; 