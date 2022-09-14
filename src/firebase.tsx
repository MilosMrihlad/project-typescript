// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDlDw4RJYQD1Ommx0lsLqFqmBTOSWvHCTw',
    authDomain: 'projectx-a4902.firebaseapp.com',
    projectId: 'projectx-a4902',
    storageBucket: 'projectx-a4902.appspot.com',
    messagingSenderId: '1039778434651',
    appId: '1:1039778434651:web:69c6d8f3e6445e914f797e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
