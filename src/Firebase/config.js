import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmT-Vfh44dSD6C4vyl0w0xoVwpCrkAAUU",
    authDomain: "reading-books-f5c6d.firebaseapp.com",
    projectId: "reading-books-f5c6d",
    storageBucket: "reading-books-f5c6d.appspot.com",
    messagingSenderId: "653133947885",
    appId: "1:653133947885:web:093b79dd2dd9b9c1cdbde4"
};


initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()


export { db, auth }