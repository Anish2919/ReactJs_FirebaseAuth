import {GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'; 
import { addDoc, collection, getDocs, query, where} from 'firebase/firestore'; 
import { auth, db } from './firebaseSetup';



// Google Auth Provider 

const googleProvider = new GoogleAuthProvider(); 
const loginWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.error(error);
    console.log('error from login with google:', error);
    alert(error.message);
  }
};


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
const resetPassword = async(email) => {
  try {
    // check if the email address exists in the 'users' collection 
    const emailExists = await checkEmailExists(email); 
    if(!emailExists) {
      alert('email doesnot exists! please signIn'); 
      return false; 
    }

    await sendPasswordResetEmail(auth, email); 
    alert('password reset link sent.'); 
  } catch (error) {
    alert("Something went wrong!"); 
    console.log('error message: ', error.message); 
    return; 
  }
}

// check emaile exits 
const checkEmailExists = async (email) => {
  try {
    const q = query(collection(db, 'users'), where('email', '==', email)); 
    const querySnapshot = await getDocs(q); 
    return !querySnapshot.empty;    
  } catch (error) {
    console.error('Error checking email existance: ', error); 
    return false; 
  }
}

// logout function 
const logout = () => {
   signOut(auth); 
}

export {
  loginWithGoogle, 
  loginWithEmailandPassword, 
  registerWithEmailandPassword, 
  resetPassword, 
  logout, 
}