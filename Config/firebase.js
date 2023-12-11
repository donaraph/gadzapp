// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6cPmGRqHZibKoNh_0dCGPcHijb8tWMgg",
  authDomain: "gadzapp-b44c8.firebaseapp.com",
  projectId: "gadzapp-b44c8",
  storageBucket: "gadzapp-b44c8.appspot.com",
  messagingSenderId: "395716371157",
  appId: "1:395716371157:web:9166f95858744b2251785c",
  measurementId: "G-FSG2YJ02TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
