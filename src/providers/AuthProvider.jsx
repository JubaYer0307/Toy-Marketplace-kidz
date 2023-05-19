import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const addToy = async (newToy) => {
    // Get the seller's email and name from the authenticated user
    const sellerEmail = user?.email;
    const sellerName = user?.displayName;

    // Add the seller's email and name to the newToy object
    newToy.sellerEmail = sellerEmail;
    newToy.sellerName = sellerName;

    const response = await fetch('http://localhost:5000/addatoy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    });

    const data = await response.json();
    return data;
  };

  const authInfo = {
    currentUser: user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    addToy,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
