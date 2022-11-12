// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeHPNiSkPktxhcRP4dIsLDF7zrKP8G5Cc",
  authDomain: "genius-car-clint-ed3ac.firebaseapp.com",
  projectId: "genius-car-clint-ed3ac",
  storageBucket: "genius-car-clint-ed3ac.appspot.com",
  messagingSenderId: "917185105434",
  appId: "1:917185105434:web:5ab4e1116480836a79cba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app