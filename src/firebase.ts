import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-eFRnB7k16L2YS062-ttKNczT8s324E4",
  authDomain: "derioux-66d69.firebaseapp.com",
  projectId: "derioux-66d69",
  storageBucket: "derioux-66d69.firebasestorage.app",
  messagingSenderId: "923340940456",
  appId: "1:923340940456:web:d0f4db70e4e803ea764e9d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error("Failed to set Firebase auth persistence", err);
});