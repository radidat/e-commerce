import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/storage'; 
import 'firebase/auth';
  const firebaseConfig = {
    apiKey: "AIzaSyBtMAMOZz0DFpCpCrS1qetAK9lUlO_z8xc",
    authDomain: "ecommerce-audiophile.firebaseapp.com",
    projectId: "ecommerce-audiophile",
    storageBucket: "ecommerce-audiophile.appspot.com",
    messagingSenderId: "114586122714",
    appId: "1:114586122714:web:c50b4961b23e1a445468e3",
    measurementId: "G-04WTXFSNGJ"
  };
  // Initialize Firebase
   export const app = firebase.initializeApp(firebaseConfig);
   export const db = firebase.firestore(); 
   export const storage  = firebase.storage();
   export const auth = firebase.auth();