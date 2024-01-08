// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! İMPORT Edilecek
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'hs-twit.firebaseapp.com',
  projectId: 'hs-twit',
  storageBucket: 'hs-twit.appspot.com',
  messagingSenderId: '124949368259',
  appId: '1:124949368259:web:b2d6ef02dff2449e630176',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! kimlik doğrulma bölümünün referansını uygulamya al
export const auth = getAuth(app);

//! google sağlayıcısının kurulumunu
export const provider = new GoogleAuthProvider();

// veritbanın referansını al
export const db = getFirestore(app);
