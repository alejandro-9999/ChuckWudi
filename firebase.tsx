import firebase from "firebase";
import React from "react";


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyBoxkS8dRLUpWwOkLwMARWffeeRbEByWws",
    authDomain: "chukwudi-b6e78.firebaseapp.com",
    projectId: "chukwudi-b6e78",  
    storageBucket: "chukwudi-b6e78.appspot.com",  
    messagingSenderId: "153984944660",  
    appId: "1:153984944660:web:b4094efc4efef92a88b501",  
    measurementId: "G-B3QS5265J0"
  
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);

}else {
    firebase.app(); // if already initialized, use that one
}


const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
};

const  LoginWithFirebase: React.FC  = () => {
    return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
}


export default LoginWithFirebase;

