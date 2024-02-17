// Import the functions you need from the SDKs you need
"use client";
import { initializeApp } from "firebase/app";
import { getRemoteConfig } from "firebase/remote-config";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqwgV6NgLTbuZyLuERICsLAb3srEVQngI",
  authDomain: "gb-77-8a9cc.firebaseapp.com",
  projectId: "gb-77-8a9cc",
  storageBucket: "gb-77-8a9cc.appspot.com",
  messagingSenderId: "218016810702",
  appId: "1:218016810702:web:970dc2e5e7848d7619f29f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authconf = getAuth(app);
let remoteConfigVar;
if (typeof window !== "undefined") {
  remoteConfigVar = getRemoteConfig(app);
  remoteConfigVar.settings.minimumFetchIntervalMillis = 600000;
}
export { authconf };
export default remoteConfigVar;
