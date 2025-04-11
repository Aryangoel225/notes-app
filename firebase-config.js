import { initializeApp } from "firebase/app"; // connects firebase to app
import {getAuth} from "firebase/auth";  // allows user verication 
import { getFirestore } from "firebase/firestore"; // import firebase services 


// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); // this connects firebase to servers

  // Initialize Firebase servises 
  const auth = getAuth(app); // intializes Firebase Authentication from app  
  const db = getFirestore(app);// This initializes Firestore from app that allows us to store notes

  export {auth, db} // export auth and db to use the function through project

  