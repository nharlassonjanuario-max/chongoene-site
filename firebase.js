import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


 const firebaseConfig = {
    apiKey: "AIzaSyBy6GQ4W1UKs_P2PT3-vjWSA8YS73x77HU",
    authDomain: "chongoene-training.firebaseapp.com",
    databaseURL: "https://chongoene-training-default-rtdb.firebaseio.com",
    projectId: "chongoene-training",
    storageBucket: "chongoene-training.firebasestorage.app",
    messagingSenderId: "967322901657",
    appId: "1:967322901657:web:db95285ae5f0422c1a2c08",
    measurementId: "G-Q85ZMVPXWG"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);