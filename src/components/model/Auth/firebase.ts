import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Router from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';

import { currentUserState } from '../States/currentUser';

const firebaseParams: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseApp = () => initializeApp(firebaseParams);

export const login = async (setIsError: Dispatch<SetStateAction<boolean>>) => {
  const google = new GoogleAuthProvider();
  const auth = getAuth();
  try {
    await signInWithPopup(auth, google);
    setIsError(false);
    Router.push('/');
  } catch {
    setIsError(true);
  }
};

export const logout = () => {
  const auth = getAuth();
  signOut(auth);
  location.reload();
};

export const useCurrentUser = () => {
  const currentUser = useRecoilValue(currentUserState);
  const isAuthChecking = currentUser === undefined;

  return { currentUser, isAuthChecking };
};
