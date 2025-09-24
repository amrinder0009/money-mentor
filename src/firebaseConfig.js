// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu3_W9oDBfa2z7YCiAUNrqI7OGJ1iEG6U",
  authDomain: "moneymentor-09.firebaseapp.com",
  projectId: "moneymentor-09",
  storageBucket: "moneymentor-09.firebasestorage.app",
  messagingSenderId: "711274316425",
  appId: "1:711274316425:web:0a544498b974274d9b3c58",
  measurementId: "G-F96CK5B58J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


