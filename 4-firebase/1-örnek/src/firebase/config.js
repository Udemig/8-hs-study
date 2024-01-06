// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBO4E0QOn2eQ-Kj6nyc-gzinGfMDguLnL4',
  authDomain: 'hs-chat-app-70a45.firebaseapp.com',
  projectId: 'hs-chat-app-70a45',
  storageBucket: 'hs-chat-app-70a45.appspot.com',
  messagingSenderId: '183155160378',
  appId: '1:183155160378:web:50db379d30a03bde350c03',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase kulalnıcn yapsın referansını ala
export const auth = getAuth(app);

// goole sağlayıcısı kurulumunu yap
export const provider = new GoogleAuthProvider();
