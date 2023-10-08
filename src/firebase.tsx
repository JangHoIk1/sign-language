// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = { 
  apiKey: "AIzaSyD0-WIPsCBo9-xdiXqtr7E7u_cnurh5H6U",
  authDomain: "sign-language-af03c.firebaseapp.com",
  projectId: "sign-language-af03c",
  storageBucket: "sign-language-af03c.appspot.com",
  messagingSenderId: "303370882342",
  appId: "1:303370882342:web:dfab438c1fee83491745e7",
  measurementId: "G-3Y0FRHMRBF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);