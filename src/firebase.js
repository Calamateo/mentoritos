import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAKbKt05HxthoBX0CakToONV6s8H-cFEvg",
    authDomain: "estudiambreee.firebaseapp.com",
    projectId: "estudiambreee",
    storageBucket: "estudiambreee.appspot.com",
    messagingSenderId: "557569893830",  
    appId: "1:557569893830:web:71d89ee922310cc7153ec7",  
    measurementId: "G-JT3YGVJQF3"  
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {auth, firebase, db, storage}