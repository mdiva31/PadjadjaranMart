// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5gLVCUZ7C_NX-SR8OUk1Y8iWJofQdLx4",
  authDomain: "padjadjaranmart.firebaseapp.com",
  projectId: "padjadjaranmart",
  storageBucket: "padjadjaranmart.appspot.com",
  messagingSenderId: "873802740060",
  appId: "1:873802740060:web:344f0b3415cff6e8da1199",
  measurementId: "G-5DMKEHHM3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
