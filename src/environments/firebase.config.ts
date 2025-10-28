// src/environments/firebase.config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAEQHQatnwEgXDdD75UARAt-tCvM4BzrbI",
  authDomain: "pokeapp-2a14f.firebaseapp.com",
  projectId: "pokeapp-2a14f",
  storageBucket: "pokeapp-2a14f.firebasestorage.app",
  messagingSenderId: "1016616348093",
  appId: "1:1016616348093:web:99e7d6b4917068fe0ecad4",
  measurementId: "G-H8W2HKP3FM"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
