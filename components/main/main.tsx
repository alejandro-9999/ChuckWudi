import React, { useEffect, useState } from 'react';

import firebase from 'firebase';

import LonginSecction from '../pages/login-secction/login-secction';

import Dashboard from '../pages/dashboard/dashboard';

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [User,setUser] = useState([]);
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);


  
  if (!isSignedIn) {
    return <LonginSecction/>;
  }
  return <Dashboard/>
}

export default SignInScreen;


// (
//   <div>
//     <h1>My App</h1>
//     <p>Welcome {firebase.auth().currentUser?.displayName}! You are now signed-in!</p>
//     <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
//   </div>
// );