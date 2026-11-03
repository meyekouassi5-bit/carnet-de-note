// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWRh5alnx4663LyCcS_UHvYX6dr-3Ui00",
  authDomain: "junior-7ca83.firebaseapp.com",
  projectId: "junior-7ca83",
  storageBucket: "junior-7ca83.firebasestorage.app",
  messagingSenderId: "992179303719",
  appId: "1:992179303719:web:4f82c40bd528c54a30e502",
  measurementId: "G-EEN2366PR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);