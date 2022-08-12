import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO681mjPvNrti2tBJqfEvdtqM8KXgZncc",
  authDomain: "coderhouse-project-edffa.firebaseapp.com",
  projectId: "coderhouse-project-edffa",
  storageBucket: "coderhouse-project-edffa.appspot.com",
  messagingSenderId: "1053577919433",
  appId: "1:1053577919433:web:bd21d0a783842a9696c618"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);