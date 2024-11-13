// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIWN7-OX0O_OltbAnxlr0b3iAL1H3l67o",
  authDomain: "products-1416d.firebaseapp.com",
  projectId: "products-1416d",
  storageBucket: "products-1416d.appspot.com",
  messagingSenderId: "934601788240",
  appId: "1:934601788240:web:10e84f1c2b8eb0422c3a55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appAuth = getAuth(app);
