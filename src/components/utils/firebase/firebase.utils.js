import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBR-ZvGYjUO071pvtv1Bkr0ZsqnuXULLKw',
  authDomain: 'crwn-clothing-db-9567a.firebaseapp.com',
  projectId: 'crwn-clothing-db-9567a',
  storageBucket: 'crwn-clothing-db-9567a.appspot.com',
  messagingSenderId: '1022050652801',
  appId: '1:1022050652801:web:9c86e244d7aee698673380',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFormAuth = async (userAuth) => {
  const docRef = doc(db, 'users', userAuth.uid);
  console.log(docRef);

  const userSnapshot = await getDoc(docRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`user login error ${error.message}`);
    }
  }
};
