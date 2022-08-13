import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFormAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const docRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(docRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`user login error ${error.message}`);
    }
    return docRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
