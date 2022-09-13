import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBAdWETY4SGELGrtTWgT908Nr1tLsO2M-U",
  authDomain: "mihuetafacil.firebaseapp.com",
  projectId: "mihuetafacil",
  storageBucket: "mihuetafacil.appspot.com",
  messagingSenderId: "631887267271",
  appId: "1:631887267271:web:ad46ace497e6827aa845e2"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, firebase, storage}