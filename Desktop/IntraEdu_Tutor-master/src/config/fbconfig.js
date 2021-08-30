import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjM8q_YD8AZHGUy5-8n8aPcUHai23dnQ8",
  authDomain: "shellcode1-78f01.firebaseapp.com",
  databaseURL: "https://shellcode1-78f01-default-rtdb.firebaseio.com",
  projectId: "shellcode1-78f01",
  storageBucket: "shellcode1-78f01.appspot.com",
  messagingSenderId: "324315657386",
  appId: "1:324315657386:web:b192bebe1919760d03ccd3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export default db;
export { auth };
