
import app from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyAsR0Irc1BznuqHo6nI48efAhUNxX2elFg",
    authDomain: "job-app-react.firebaseapp.com",
    projectId: "job-app-react",
    storageBucket: "job-app-react.appspot.com",
    messagingSenderId: "929999226467",
    appId: "1:929999226467:web:1ad51ad8c3b963dfc49a56"
  };
  
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  export{ firebase, firestore, app };