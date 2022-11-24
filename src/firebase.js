// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeCFPU5Wj4p_mOohrB-iZTDy8yRV1f43U",
  authDomain: "to-do-app-cf227.firebaseapp.com",
  projectId: "to-do-app-cf227",
  storageBucket: "to-do-app-cf227.appspot.com",
  messagingSenderId: "40069121516",
  appId: "1:40069121516:web:7bccc41eae1c532051acc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)