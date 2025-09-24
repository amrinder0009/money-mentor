// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu3_W9oDBfa2z7YCiAUNrqI7OGJ1iEG6U",
  authDomain: "moneymentor-09.firebaseapp.com",
  projectId: "moneymentor-09",
  storageBucket: "moneymentor-09.firebasestorage.app",
  messagingSenderId: "711274316425",
  appId: "1:711274316425:web:0a544498b974274d9b3c58",
  measurementId: "G-F96CK5B58J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);