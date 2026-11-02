
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2HZUCEXAZPtyV0j0V5C0flrvNK1cvwU",
  authDomain: "orchid-makeup-studio.firebaseapp.com",
  projectId: "orchid-makeup-studio",
  storageBucket: "orchid-makeup-studio.firebasestorage.app",
  messagingSenderId: "550610053999",
  appId: "1:550610053999:web:a1165252999cab079cd69a",
  measurementId: "G-D6QXZ9JMDC",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Analytics is optional and supported only in suitable browser environments.
if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    })
    .catch((error) => {
      console.warn("Firebase Analytics unavailable:", error);
    });
}

export default app;
