// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxh_LJm6y7gRiOHFtJ2Xze41ITlXHJ7uw",
  authDomain: "animestore-84cfb.firebaseapp.com",
  projectId: "animestore-84cfb",
  storageBucket: "animestore-84cfb.appspot.com",
  messagingSenderId: "788922793570",
  appId: "1:788922793570:web:dc7b3d9a12355fb0cc9b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//inicializar firestore
const db = getFirestore(app)

export default db