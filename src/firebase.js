import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAKbKt05HxthoBX0CakToONV6s8H-cFEvg",
    authDomain: "estudiambreee.firebaseapp.com",
    projectId: "estudiambreee",
    storageBucket: "estudiambreee.appspot.com",
    messagingSenderId: "557569893830",  
    appId: "1:557569893830:web:71d89ee922310cc7153ec7",  
    measurementId: "G-JT3YGVJQF3"  
};

app.initializeApp(firebaseConfig);

const bd = app.firestore();
const auth = app.auth();

export {auth, bd}