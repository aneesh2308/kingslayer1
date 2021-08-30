import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjM8q_YD8AZHGUy5-8n8aPcUHai23dnQ8",
  authDomain: "shellcode1-78f01.firebaseapp.com",
  projectId: "shellcode1-78f01",
  storageBucket: "shellcode1-78f01.appspot.com",
  messagingSenderId: "324315657386",
  appId: "1:324315657386:web:b192bebe1919760d03ccd3",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
