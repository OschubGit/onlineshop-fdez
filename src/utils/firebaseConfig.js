// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO681mjPvNrti2tBJqfEvdtqM8KXgZncc",
  authDomain: "coderhouse-project-edffa.firebaseapp.com",
  projectId: "coderhouse-project-edffa",
  storageBucket: "coderhouse-project-edffa.appspot.com",
  messagingSenderId: "1053577919433",
  appId: "1:1053577919433:web:bd21d0a783842a9696c618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);