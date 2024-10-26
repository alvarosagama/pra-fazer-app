
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyCAgXb2fU8w9joDOxLXFe4XNzNjGxsemM4",
  authDomain: "pra-fazer-app-e99e3.firebaseapp.com",
  databaseURL: "https://pra-fazer-app-e99e3-default-rtdb.firebaseio.com",
  projectId: "pra-fazer-app-e99e3",
  storageBucket: "pra-fazer-app-e99e3.appspot.com",
  messagingSenderId: "352938794358",
  appId: "1:352938794358:web:8e0b25562e4bfa77a1ee57"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {auth, db};