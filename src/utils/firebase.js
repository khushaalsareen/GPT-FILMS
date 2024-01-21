// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuWDYKBkLb4WmfvccGAUqGVvRjDz04s9A",
  authDomain: "netflixgpt-257d9.firebaseapp.com",
  projectId: "netflixgpt-257d9",
  storageBucket: "netflixgpt-257d9.appspot.com",
  messagingSenderId: "105755243324",
  appId: "1:105755243324:web:a7c08c97adc3ef23f92439",
  measurementId: "G-WTEPJZXWWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();