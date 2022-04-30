import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXukz8jcLKZlP-3rK3EJ11NUDUuBtNjw4",
    authDomain: "fir-router-integration-f44aa.firebaseapp.com",
    projectId: "fir-router-integration-f44aa",
    storageBucket: "fir-router-integration-f44aa.appspot.com",
    messagingSenderId: "671579898904",
    appId: "1:671579898904:web:2e7eeb4ce2fd42c5876f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;