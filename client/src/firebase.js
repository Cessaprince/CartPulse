// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAc9Kx1R9L5aF3-Qi53ePfXxuqidLN7IKA",
  authDomain: "cartpulse-d1335.firebaseapp.com",
  projectId: "cartpulse-d1335",
  storageBucket: "cartpulse-d1335.firebasestorage.app",
  messagingSenderId: "758474325796",
  appId: "1:758474325796:web:6904b23169a57061c4fdb1",
  measurementId: "G-FN39JL3E1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth };
