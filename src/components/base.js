import * as firebase from "firebase/app";
import "firebase/auth";

const Base = firebase.initializeApp({
  apiKey: "AIzaSyDH_yvnBx_PJW5oW2okVpkFo7DggPZSs5U",
  authDomain: "secret-apps.firebaseapp.com",
  databaseURL: "https://secret-apps.firebaseio.com",
  projectId: "secret-apps",
  storageBucket: "",
  messagingSenderId: "468723549588",
  appId: "1:468723549588:web:8f27a258155e0620"
});
// Initialize Firebase

export default Base;
