// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHSvNZq8k9LztWa8Mh64BkqQQNoJOHzs",
  authDomain: "simplexdecor-7a3eb.firebaseapp.com",
  projectId: "simplexdecor-7a3eb",
  storageBucket: "simplexdecor-7a3eb.appspot.com",
  messagingSenderId: "883418330341",
  appId: "1:883418330341:web:3d6b3a5091cd4ff6c1900c",
  measurementId: "G-77PRKD28Y6"
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
