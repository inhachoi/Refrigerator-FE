// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARjXdPpJ01e2Okqql2WG_aXTv6bQl-ulk",
  authDomain: "refrigerator-78d61.firebaseapp.com",
  projectId: "refrigerator-78d61",
  storageBucket: "refrigerator-78d61.appspot.com",
  messagingSenderId: "673175467831",
  appId: "1:673175467831:web:2a23be156383605a8eccb2",
  measurementId: "G-XHFKV3NLER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
