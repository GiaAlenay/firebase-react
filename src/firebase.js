// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrr3MDAgWkT4QZR4ho6FlwW2-MviNY3qE",
  authDomain: "react-fb-auth-58816.firebaseapp.com",
  projectId: "react-fb-auth-58816",
  storageBucket: "react-fb-auth-58816.appspot.com",
  messagingSenderId: "307345781023",
  appId: "1:307345781023:web:e20d5dd7722d5081f2802a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)