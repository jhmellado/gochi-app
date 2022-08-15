import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDaEyah6TSSuZCU1DRAF86AMY1ggeyU7hc",
  authDomain: "gochi-app.firebaseapp.com",
  projectId: "gochi-app",
  storageBucket: "gochi-app.appspot.com",
  messagingSenderId: "570769947302",
  appId: "1:570769947302:web:f8d94a465ae1aa2ca1d267"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, firebase, storage}