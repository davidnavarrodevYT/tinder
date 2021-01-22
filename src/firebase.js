import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDLbvFPAdISR5yb6lg--KPh96AZ2EcKNi8",
    authDomain: "tinder--final.firebaseapp.com",
    projectId: "tinder--final",
    storageBucket: "tinder--final.appspot.com",
    messagingSenderId: "669725022763",
    appId: "1:669725022763:web:ad4a3e501b4ceb7b68686e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;