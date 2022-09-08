import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// public apikey https://firebase.google.com/docs/projects/api-keys#general-info
const firebaseConfig = {
  apiKey: 'AIzaSyDzH5QwymS-rretFRl83849_yT7CRyg20M',
  authDomain: 'web-store-e7ed3.firebaseapp.com',
  projectId: 'web-store-e7ed3',
  storageBucket: 'web-store-e7ed3.appspot.com',
  messagingSenderId: '204756857659',
  appId: '1:204756857659:web:5971134f585f198d2cbd1e',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

//***Google Authentication

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//***Email & Password Authentication

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//*** General Functions

export const createUserDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const signOutUser = async () => await signOut(auth);
