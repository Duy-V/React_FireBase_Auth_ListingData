import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDpSj03CPuLeZSfEcC6BLOqJv7yQt5Y6hI",
  authDomain: "house-marketplace-app-41c6e.firebaseapp.com",
  projectId: "house-marketplace-app-41c6e",
  storageBucket: "house-marketplace-app-41c6e.appspot.com",
  messagingSenderId: "615370154183",
  appId: "1:615370154183:web:ed09d6ebe33f40e69c5ee2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
