// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqAN_Q2DbFumlXqoU5wC3TaaQoBxyUU-c",
  authDomain: "socialmediaapp-ca413.firebaseapp.com",
  databaseURL: "https://socialmediaapp-ca413-default-rtdb.firebaseio.com",
  projectId: "socialmediaapp-ca413",
  storageBucket: "socialmediaapp-ca413.appspot.com",
  messagingSenderId: "325181118116",
  appId: "1:325181118116:web:57ced7784261739794b831",
  measurementId: "G-KDWSZ5C72Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);