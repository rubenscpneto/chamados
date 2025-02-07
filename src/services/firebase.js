import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBR5UPTGnKVT1Aiz7D8j8KNy-OafGTfOq0",
    authDomain: "tickets-175e5.firebaseapp.com",
    projectId: "tickets-175e5",
    storageBucket: "tickets-175e5.firebasestorage.app",
    messagingSenderId: "588908538263",
    appId: "1:588908538263:web:d374d7d5a79f62ea023cd2",
    measurementId: "G-X5RL3FGDV7"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };