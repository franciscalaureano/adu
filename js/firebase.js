// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuKt8IET8IhQJQYPU1enxtVJWiP-8y3v0",
  authDomain: "adu22-516ba.firebaseapp.com",
  databaseURL: "https://adu22-516ba-default-rtdb.firebaseio.com",
  projectId: "adu22-516ba",
  storageBucket: "adu22-516ba.appspot.com",
  messagingSenderId: "271527558438",
  appId: "1:271527558438:web:27e839f27b9503bde215e7",
  measurementId: "G-0Q770VQQL9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true });
