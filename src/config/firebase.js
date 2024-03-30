// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChY_jYAD6S1swdOcg96HOb2Y_1iOSv8-U",

  authDomain: "beatbyte-c521b.firebaseapp.com",

  projectId: "beatbyte-c521b",

  storageBucket: "beatbyte-c521b.appspot.com",

  messagingSenderId: "1085559321379",

  appId: "1:1085559321379:web:46d5692c00fe4eb7461296",

  measurementId: "G-VCGBPK0NZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
