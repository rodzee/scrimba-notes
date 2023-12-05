import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAMFQWTpmhyD_wyp4Bg9jBcoW7k8LsX-k",
  authDomain: "react-notes-app-34e54.firebaseapp.com",
  projectId: "react-notes-app-34e54",
  storageBucket: "react-notes-app-34e54.appspot.com",
  messagingSenderId: "132768279159",
  appId: "1:132768279159:web:e8a91b9f6a425eb2f87472",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
