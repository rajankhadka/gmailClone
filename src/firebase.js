import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7CXSgLRx-vMOxzFrSNN5ask76atNvfrY",
  authDomain: "clone-6b95f.firebaseapp.com",
  projectId: "clone-6b95f",
  storageBucket: "clone-6b95f.appspot.com",
  messagingSenderId: "931714307223",
  appId: "1:931714307223:web:145587be324da1515805d2",
  measurementId: "G-C7PH07M322"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };