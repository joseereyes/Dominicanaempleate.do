import firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAoPb0HmXCneQXY74in9eYzi2rtFk5-esU",
    authDomain: "jobs-realtime.firebaseapp.com",
    databaseURL: "https://jobs-realtime-default-rtdb.firebaseio.com",
    projectId: "jobs-realtime",
    storageBucket: "jobs-realtime.appspot.com",
    messagingSenderId: "770963738843",
    appId: "1:770963738843:web:cc0105bd814d6cc2defcfe"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);


export default db.database().ref();