import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDdAM9nEuHK7jXfT7c7Y7gT1foy71pPns4",
   authDomain: "fir-react-crud-67765.firebaseapp.com",
   projectId: "fir-react-crud-67765",
   storageBucket: "fir-react-crud-67765.appspot.com",
   messagingSenderId: "363231556217",
   appId: "1:363231556217:web:9bdbb522c5f50dc1521aa8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
