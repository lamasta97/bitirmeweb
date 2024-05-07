// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb42QWJBk8QQtpx01ExuzUQLZsO_UZZVE",
  authDomain: "vr-ar-editor.firebaseapp.com",
  databaseURL: "https://vr-ar-editor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vr-ar-editor",
  storageBucket: "vr-ar-editor.appspot.com",
  messagingSenderId: "1059272036943",
  appId: "1:1059272036943:web:562a970914495e4860503a",
  measurementId: "G-PT2Q76358C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
