// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'; 
import {  getFirestore,} from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1QWSxFq2CJ2hyj2kvop8u-yys1Axvpvc",
  authDomain: "fir-authreactjs-d4c80.firebaseapp.com",
  projectId: "fir-authreactjs-d4c80",
  storageBucket: "fir-authreactjs-d4c80.appspot.com",
  messagingSenderId: "291575388351",
  appId: "1:291575388351:web:299959f1027e1af3da4e0a",
  measurementId: "G-F8M08D916N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app); 
const auth = getAuth(app); 

export {
    db, auth
}
