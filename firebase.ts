import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"; 
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBpp_fnxnZELJ7rMRIB5EME8zvE8V4hheg",
    authDomain: "meghadoot-vault.firebaseapp.com",
    projectId: "meghadoot-vault",
    storageBucket: "meghadoot-vault.appspot.com",
    messagingSenderId: "492326052248",
    appId: "1:492326052248:web:54529a5a566fab8040cbed",
    measurementId: "G-14P6KQM5P9"
  };



const app = getApps().length ?  getApp() : initializeApp(firebaseConfig);
// somegtines next wiil intailze the appss prior for us so well check the condtn here if legnth is more then we'll getAp else we'll intailzeApp


const db =getFirestore(app); 
// const auth = getAuth(app);
const storage = getStorage(app);


export {db , storage};