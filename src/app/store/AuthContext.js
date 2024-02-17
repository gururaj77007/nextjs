"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import Cookies from "js-cookie";

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqwgV6NgLTbuZyLuERICsLAb3srEVQngI",
  authDomain: "gb-77-8a9cc.firebaseapp.com",
  projectId: "gb-77-8a9cc",
  storageBucket: "gb-77-8a9cc.appspot.com",
  messagingSenderId: "218016810702",
  appId: "1:218016810702:web:970dc2e5e7848d7619f29f",
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const auth = getAuth(app);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const cookies = Cookies;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    const isauth = () => {
      const userCookie = cookies.get("user");

      if (userCookie) {
        console.log(userCookie);
        setUser(userCookie);
        setAuthenticated(true);
      } else {
        console.log("no cookkie");
      }
    };
    isauth();

    return () => unsubscribe();
  }, []);

  const signInWithEmailAndPasswordHandler = async (email, password) => {
    try {
      var response = await signInWithEmailAndPassword(auth, email, password);

      cookies.set("user", response.user, { path: "/" });

      router.push("/");
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      cookies.remove("user");
      router.push("/");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const value = {
    user,
    isAuthenticated: isAuthenticated,
    signInWithEmailAndPassword: signInWithEmailAndPasswordHandler,
    signOut: signOutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
