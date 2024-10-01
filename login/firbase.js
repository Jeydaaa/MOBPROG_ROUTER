// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoYVWtp1kHvf0slHyv4-Df7VQRg-PtUp4",
  authDomain: "notifyme-7e2ea.firebaseapp.com",
  projectId: "notifyme-7e2ea",
  storageBucket: "notifyme-7e2ea.appspot.com",
  messagingSenderId: "25316775865",
  appId: "1:25316775865:web:2826d2507ed122a8c74868",
  measurementId: "G-Q75J1F4Z9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
