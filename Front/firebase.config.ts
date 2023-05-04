// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const FirebaseConfig = {
// Your web app's Firebase configuration
firebase : {
  apiKey: "AIzaSyBIuZyYZSlC6HKCOWrr7534jrVRjOAYd2Q",
  authDomain: "footballjersey-f55d2.firebaseapp.com",
  databaseURL: "https://footballjersey-f55d2-default-rtdb.firebaseio.com",
  projectId: "footballjersey-f55d2",
  storageBucket: "footballjersey-f55d2.appspot.com",
  messagingSenderId: "168375933961",
  appId: "1:168375933961:web:bdd8169c07989288946cd8",
}

}
// Initialize Firebase
const app = initializeApp(FirebaseConfig.firebase);


