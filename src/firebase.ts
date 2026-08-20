import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

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

// Offline persistence: enables an on-device (IndexedDB) cache so reads can be served
// from disk instantly via getDocFromCache instead of waiting on the network, and
// writes queue locally and sync once the connection comes back instead of failing
// outright. persistentMultipleTabManager lets multiple open tabs share the same cache
// instead of each grabbing an exclusive lock (a single-tab lock would otherwise make
// every tab but the first silently fall back to in-memory-only persistence).
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
});

setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error("Failed to set Firebase auth persistence", err);
});