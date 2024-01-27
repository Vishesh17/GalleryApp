import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9qv7Iaj8wQylBuHi8LlKfV67ygnzNHfc",
  authDomain: "photogalleryapp-416ad.firebaseapp.com",
  projectId: "photogalleryapp-416ad",
  storageBucket: "photogalleryapp-416ad.appspot.com",
  messagingSenderId: "546222805959",
  appId: "1:546222805959:web:d4fd58f4ffbf8866cbbfe2",
  measurementId: "G-3B1JL6B5NJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };