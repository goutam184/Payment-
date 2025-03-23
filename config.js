// Firebase SDK से जरूरी Functions Import करो
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// 🔥 Firebase Config (Hardcoded Keys से बचने के लिए Env Variables का Use करो)
const firebaseConfig = {
  apiKey: "AIzaSyARBRX3_koE6Z4GxoBxen4vTRtXufHhZgg",
  authDomain: "my-earnings-9de24.firebaseapp.com",
  databaseURL: "https://my-earnings-9de24-default-rtdb.firebaseio.com",
  projectId: "my-earnings-9de24",
  storageBucket: "my-earnings-9de24.appspot.com",
  messagingSenderId: "15922001860",
  appId: "1:15922001860:web:1b3b348ae5e5687fe2d691",
  measurementId: "G-W6XDG2T36D"
};

// 🔥 Firebase Initialize करो
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

// Modules को Export करो ताकि बाकी JS Files में यूज़ कर सको
export { auth, database, storage };