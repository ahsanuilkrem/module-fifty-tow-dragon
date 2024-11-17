// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb6-4DobDRJ7CsnHtQPntw1mQokch7aqA",
  authDomain: "dragon-news-a574d.firebaseapp.com",
  projectId: "dragon-news-a574d",
  storageBucket: "dragon-news-a574d.firebasestorage.app",
  messagingSenderId: "62692864797",
  appId: "1:62692864797:web:93a8cd7d3e3370971fa7f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;