// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7LokQdaVvPlhARbvGovBBn0PfTCebm58",
  authDomain: "bhojon-bari-b432f.firebaseapp.com",
  projectId: "bhojon-bari-b432f",
  storageBucket: "bhojon-bari-b432f.appspot.com", // ✅ fixed
  messagingSenderId: "983758424121",
  appId: "1:983758424121:web:7add5e569f7e8afa2a25e8",
  measurementId: "G-6XTLND9P4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app; 