const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBej-iUkktX9p05DvgN7HTBPAIBmoWa6pE",
    authDomain: "back-electiva.firebaseapp.com",
    projectId: "back-electiva",
    storageBucket: "back-electiva.appspot.com",
    messagingSenderId: "130110545922",
    appId: "1:130110545922:web:a9d7e97d611a9e9031c71b"
  };

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app