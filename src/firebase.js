import firebase from "firebase";

const myFirebase = firebase.initializeApp({
  apiKey: "AIzaSyCvdsl9zfOakUR1_K0pznnih0p0C_wsEDs",
  authDomain: "todo-app-9138f.firebaseapp.com",
  databaseURL: "https://todo-app-9138f.firebaseio.com",
  projectId: "todo-app-9138f",
  storageBucket: "todo-app-9138f.appspot.com",
  messagingSenderId: "508654373798",
  appId: "1:508654373798:web:a3eb107b46094c1e8d1d67",
  measurementId: "G-REYTQZDLGS",
});
const db = myFirebase.firestore();
export default db;
