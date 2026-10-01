import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBd79SwoK_RwssbXZje1U3t7gUohvaVI80",
  authDomain: "undangan-pernikahan-c200c.firebaseapp.com",
  databaseURL: "https://undangan-pernikahan-c200c-default-rtdb.firebaseio.com",
  projectId: "undangan-pernikahan-c200c",
  storageBucket: "undangan-pernikahan-c200c.firebasestorage.app",
  messagingSenderId: "268479190048",
  appId: "1:268479190048:web:e66e715e0cdc5a50e61845",
  measurementId: "G-DE48L66NZW",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };
