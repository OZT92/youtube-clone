// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYEdiP_R-mhMg9BZJX9xHfoThDj8KRLDw",
  authDomain: "clone-15a87.firebaseapp.com",
  projectId: "clone-15a87",
  storageBucket: "clone-15a87.appspot.com",
  messagingSenderId: "43503990247",
  appId: "1:43503990247:web:3fd3cf2f91c5738ae4b942",
  measurementId: "G-VN3TCSK69X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
