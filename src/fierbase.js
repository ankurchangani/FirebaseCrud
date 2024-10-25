// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.googimle.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApSqVoqk8bnTanZ2JpkAKvI5SfxbUJ_p0",
  authDomain: "employee-crud-react.firebaseapp.com",
  projectId: "employee-crud-react",
  storageBucket: "employee-crud-react.appspot.com",
  messagingSenderId: "968978658821",
  appId: "1:968978658821:web:ed2a22da23ef87af668e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

