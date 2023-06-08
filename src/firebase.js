import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBfrTzjno2wyGhCHpxp9s-STDwKakf8ZE",
  authDomain: "mihuertafacilcom.firebaseapp.com",
  projectId: "mihuertafacilcom",
  storageBucket: "mihuertafacilcom.appspot.com",
  messagingSenderId: "370891791525",
  appId: "1:370891791525:web:9ad015c7e634917d34814c"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, firebase, storage}
