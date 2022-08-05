import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqepbWtmjBXomPaIUIrpEl_h1Yk3Sa1eY",
  authDomain: "gochi-69162.firebaseapp.com",
  projectId: "gochi-69162",
  storageBucket: "gochi-69162.appspot.com",
  messagingSenderId: "193889041069",
  appId: "1:193889041069:web:69c407c66e2472dc65a424"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth, firebase}