import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC62L2SHd2JSoEsc2MW9bTiPeBAtBN3noI",
  authDomain: "fi-sh-5ab4a.firebaseapp.com",
  projectId: "fi-sh-5ab4a",
  storageBucket: "fi-sh-5ab4a.appspot.com",
  messagingSenderId: "967760421967",
  appId: "1:967760421967:web:076c5982b6a6b33826b63a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
