// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChofxPug9QkO31YGnRTvHiu01dM1f3cgw",
  authDomain: "protect-you-backend.firebaseapp.com",
  projectId: "protect-you-backend",
  storageBucket: "protect-you-backend.firebasestorage.app",
  messagingSenderId: "316445887699",
  appId: "1:316445887699:web:e4354f7ee5e8ec43bd5826",
  measurementId: "G-9LKMLGSD72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
