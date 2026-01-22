// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANJttR7ahSHCSUm8dc9LY3JbaXyNPcYzU",
  authDomain: "gas-n-go-website.firebaseapp.com",
  projectId: "gas-n-go-website",
  storageBucket: "gas-n-go-website.firebasestorage.app",
  messagingSenderId: "478939200549",
  appId: "1:478939200549:web:540d2ea89d7f77ae31d3cc",
  measurementId: "G-D9LHSJNRY9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics (optional, safe)
export const analytics = getAnalytics(app);
