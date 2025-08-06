// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-VOMp3xIdC0eidx7RYNY4nx7-qD2oWkI",
  authDomain: "city-cars-39404.firebaseapp.com",
  projectId: "city-cars-39404",
  storageBucket: "city-cars-39404.firebasestorage.app",
  messagingSenderId: "989936272400",
  appId: "1:989936272400:web:13410128a78c4d1b627695",
  measurementId: "G-FGGBV06PW2"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
