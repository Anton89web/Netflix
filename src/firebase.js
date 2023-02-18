// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP2gMBid_EgEPhepkNsrafOeFmuhsk4zE",
  authDomain: "netflix-clone-ac209.firebaseapp.com",
  projectId: "netflix-clone-ac209",
  storageBucket: "netflix-clone-ac209.appspot.com",
  messagingSenderId: "340549648299",
  appId: "1:340549648299:web:cac2a7b1d5db29cbd39cee"
};

// Initialize Firebase
const firestoreApp = firebase.initializeApp(firebaseConfig);
const db = firestoreApp.firestore();
const auth = firebase.auth()


export {auth}
export default db