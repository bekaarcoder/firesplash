import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDJLhnc2ODEOnr08c3hx0odZUpslm07RlM",
  authDomain: "firesplash-f770f.firebaseapp.com",
  databaseURL: "https://firesplash-f770f.firebaseio.com",
  projectId: "firesplash-f770f",
  storageBucket: "firesplash-f770f.appspot.com",
  messagingSenderId: "845757855867",
  appId: "1:845757855867:web:e7236b3c2b7f6c03cb0ade",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
