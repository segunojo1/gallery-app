// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDddLqNWpMIBrqnq42nlMfAVFYmylCwufs",
  authDomain: "gallery-login-d077d.firebaseapp.com",
  projectId: "gallery-login-d077d",
  storageBucket: "gallery-login-d077d.appspot.com",
  messagingSenderId: "276013927911",
  appId: "1:276013927911:web:7b2a5e72ab976c51334142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);