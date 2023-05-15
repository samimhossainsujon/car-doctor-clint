import React, { createContext, useEffect, useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loding, setloding] = useState(true);

  //==============================
  //create password provider
  //=============================
  const createUser = (email, password) => {
    setloding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setloding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  //==========================
  //   SIGN OUT
  //==========================

  const LogOut = () => {
    setloding(true);
    return signOut(auth);
  };







  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloding(false);
      // console.log('current user', currentUser);
    });
    return () => unsubscribe();

  }, []);


  const authInfo = {
    user,
    loding,
    createUser,
    signIn,
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

  const googleprovider = new GoogleAuthProvider();
  const SingInGoogle = () => {
    setloding(true);
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggedGoogleUser = result.user;
        console.log(loggedGoogleUser);
        setUser(loggedGoogleUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };








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