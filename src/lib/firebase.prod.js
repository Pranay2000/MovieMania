import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { seedDatabase } from '../seed';


const config ={
    apiKey: "AIzaSyA5ReAkJhvqJWLQphxGv_r4cHxfQyC5QXY",
  authDomain: "movie-mania-5be45.firebaseapp.com",
  projectId: "movie-mania-5be45",
  storageBucket: "movie-mania-5be45.appspot.com",
  messagingSenderId: "391274123742",
  appId: "1:391274123742:web:52355f45d9438d69b6cd4f"
};

const firebase= Firebase.initializeApp(config);
//seedDatabase(firebase);
export { firebase };