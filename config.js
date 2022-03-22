import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDsdunBf22MkvvB9J2r9gzjmyHyDtGkyF0",
    authDomain: "classtest-2568e.firebaseapp.com",
    projectId: "classtest-2568e",
    storageBucket: "classtest-2568e.appspot.com",
    messagingSenderId: "366293690709",
    appId: "1:366293690709:web:3df598327ef5d79c6427dc",
    measurementId: "G-HMRW7BE1G5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.database();