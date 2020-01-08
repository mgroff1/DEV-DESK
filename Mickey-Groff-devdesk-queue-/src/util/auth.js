import React, { useState, useEffect, useContext, createContext } from "react";
import queryString from "query-string";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDKEcey71xKamT6W36jpW-2ljWZOaD6w-M",
    authDomain: "first-prod-910d3.firebaseapp.com",
    databaseURL: "https://first-prod-910d3.firebaseio.com",
    projectId: "first-prod-910d3",
    storageBucket: "first-prod-910d3.appspot.com",
    messagingSenderId: "238874354970",
    appId: "devdesk",
    measurementId: "G-YXCS26PB65"
  });
}

const authContext = createContext();

//wraps app and makes an auth object
//available by calling useAuth();
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}


export const useAuth = () => {
  return useContext(authContext);
};

//creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = email => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (password, code) => {
    const resetCode = code || getFromQueryString("oobCode");

    return firebase
      .auth()
      .confirmPasswordReset(resetCode, password)
      .then(() => {
        return true;
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

const getFromQueryString = key => {
  return queryString.parse(window.location.search)[key];
};
