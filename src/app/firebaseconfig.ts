import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCK_TujHizuO3etGZqzuO2Bpk4Ei4zLF00",
    authDomain: "jaredshoppinglist.firebaseapp.com",
    projectId: "jaredshoppinglist",
    storageBucket: "jaredshoppinglist.appspot.com",
    messagingSenderId: "86072516707",
    appId: "1:86072516707:web:d2a9b7a2fd550f79c81856"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);