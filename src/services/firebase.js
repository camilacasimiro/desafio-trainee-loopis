import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBmUqWkZhhz_ZUPBzmeAn4HrU-9CeSiLpQ",
    authDomain: "desafio-trainee-a5653.firebaseapp.com",
    databaseURL: "https://desafio-trainee-a5653.firebaseio.com",
    projectId: "desafio-trainee-a5653",
    storageBucket: "desafio-trainee-a5653.appspot.com",
    messagingSenderId: "1071521352483",
    appId: "1:1071521352483:web:df8ff9db6feaba31451a96"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);

