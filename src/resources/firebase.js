// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9uwMsJXarm6Lz9XOyfJFsj3GgU3gHlkE",
  authDomain: "ecommerce-modulo2.firebaseapp.com",
  projectId: "ecommerce-modulo2",
  storageBucket: "ecommerce-modulo2.appspot.com",
  messagingSenderId: "718726379781",
  appId: "1:718726379781:web:7bd39c110a446f46419f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
    .then(() =>{
        console.log("Auth persistence set to LocalStorage succesfuly");
    })
    .catch((error) =>{
        console.error("Error setting auth persistence:", error);
    })






