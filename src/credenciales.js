// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-7wz8jtcOe3rvOwXWREAjmlAs3MN4cWA",
  authDomain: "centro-cultural-virtual-login.firebaseapp.com",
  projectId: "centro-cultural-virtual-login",
  storageBucket: "centro-cultural-virtual-login.firebasestorage.app",
  messagingSenderId: "197540702009",
  appId: "1:197540702009:web:37ce213e259c78a53aeae8",
  measurementId: "G-JZPJF43K4Y"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;