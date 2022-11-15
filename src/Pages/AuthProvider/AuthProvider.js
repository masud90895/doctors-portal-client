import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from "../../Firebase/firebase.confiq";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin=()=>{
    return signInWithPopup(auth, provider)
  }

  const updateName=(name)=>{
    return updateProfile(user,name)
  }

  const logOut =()=>{
    return signOut(auth)
  }
  const logInUser=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const resetPass=(email)=>{
    return sendPasswordResetEmail(auth,email)
  }


  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
   return ()=>{
      unSubscribe()
    }
  },[])

  const authInfo = {
    user,
    createUser,
    googleLogin,
    updateName,
    logInUser,
    resetPass,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
