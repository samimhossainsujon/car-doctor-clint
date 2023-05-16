import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loding, setloding] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //==============================
  //create password provider
  //=============================
  const createUser = (email, password) => {
    setloding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  //===================================
  // sign in provider
  //===================================

  const signIn = (email, password) => {
    setloding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



  //==========================
  //   SIGN IN Google
  //==========================

  const googleSignIn = () => {
    setloding(true);
    return signInWithPopup(auth, googleProvider);
  }



  //==========================
  //   SIGN OUT
  //==========================

  const LogOut = () => {
    setloding(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user in auth Provider', currentUser);
      setloding(false);
      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email
        }
        fetch('https://car-doctor-server-samimhossainsujon.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loggedUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log('jwt response', data);
            // Warning: Local storage is not the best (second best place) to store access token
            localStorage.setItem('car-access-token', data.token);
          })
      }
      else {
        localStorage.removeItem('car-access-token');
      }
    });
    return () => unsubscribe();
  }, []);



  const authInfo = {
    user,
    loding,
    createUser,
    signIn,
    googleSignIn,
    LogOut,

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;






/**
 
  //=========================
  //   SIGN IN WITH GOOGLE
  //=========================

  








  //=========================
  //   SIGN IN WITH GITHUB
  //=========================
  const githubProvider = new GithubAuthProvider();

  const SignInGithub = () => {
    setloding(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedGithubUser = result.user;
        setUser(loggedGithubUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //=========================
  //   LOGOUT
  //=========================

  const LogOut = () => {
    setloding(true);
    return signOut(auth);
  };







  //=========================
  //   SET USER
  //=========================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      //   console.log("loggedUser", loggedUser);
      setUser(loggedUser);
      setloding(false);
    });
    return () => unsubscribe();
  }, []);


  //=========================

  const authInfo = {
    user,
    loding,
    createUser,
    signIn,
    LogOut,
    SingInGoogle,
    SignInGithub,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

 */