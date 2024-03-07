// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-esteat.firebaseapp.com",
  projectId: "mern-esteat",
  storageBucket: "mern-esteat.appspot.com",
  messagingSenderId: "640013569166",
  appId: "1:640013569166:web:de0c8dc59e09f915754ddf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);