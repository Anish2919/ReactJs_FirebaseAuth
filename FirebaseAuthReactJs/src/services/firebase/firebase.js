// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'; 
import { addDoc, collection, getDoc, getFirestore, query, where} from 'firebase/firestore'; 
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


// Google Auth Provider 
import {} from 'firebase/auth'; 

const googleProvider = new GoogleAuthProvider(); 
const loginWithGoogle = async() => {
  try {
    const res = await signInWithPopup(auth, googleProvider); 
    const user = res.user; 
    const q = query(collection(db, "users"), where("uid", "==", user.uid)); 
    const docs = await getDoc(q); 
    if(docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid, 
        name:user.displayName, 
        authProvider: "google", 
        email: user.email, 
      }); 
    }
  } catch (error) {
    console.error(error); 
    alert(error.message); 
  }
} 

// SignIn using email and password 
const loginWithEmailandPassword = async(email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); 
  } catch (error) {
    console.error('error from login with email and password', error); 
    alert('error from login and password', error.message); 
  } 
} 


// function for registering user 
const registerWithEmailandPassword = async(name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password); 
    const user = res.user; 
    await addDoc(collection(db, "users"), {
      uid: user.uid, 
      name, 
      authProvider: "local", 
      email
    }); 
  } catch (error) {
    console.error('error from signup with email and password', error); 
    alert('error from signup and password', error.message); 
  }
}

// send password reset link 
const sendPasswordReset = async(email) => {
  try {
    await sendPasswordReset(auth, email); 
    alert('password reset link sent.'); 
  } catch (error) {
    console.error('error from reset:', error); 
    alert('error from reset: ', error.message); 
  }
}

// logout function 
const logout = () => {
  signOut();  
}

export {
  auth, 
  db, 
  loginWithGoogle, 
  loginWithEmailandPassword, 
  registerWithEmailandPassword, 
  sendPasswordReset, 
  logout, 
}