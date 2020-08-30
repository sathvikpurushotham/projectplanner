import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAi2YvPJqJGRx5gHSpA-piNMA-Gz9ON2N4",
    authDomain: "marioplan-cd174.firebaseapp.com",
    databaseURL: "https://marioplan-cd174.firebaseio.com",
    projectId: "marioplan-cd174",
    storageBucket: "marioplan-cd174.appspot.com",
    messagingSenderId: "509048856700",
    appId: "1:509048856700:web:be3d9b099cfadb8b26a9f9",
    measurementId: "G-79DV3663Q0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.firestore().settings({timestampsInSnapshots : true});

  export default firebase;