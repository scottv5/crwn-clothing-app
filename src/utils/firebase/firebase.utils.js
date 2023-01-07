import { initializeApp } from "firebase/app";
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm9I5OeIUJcLu8b_dVQgRqCnBHjxiXNR0",
  authDomain: "crwn-clothing-db-two.firebaseapp.com",
  projectId: "crwn-clothing-db-two",
  storageBucket: "crwn-clothing-db-two.appspot.com",
  messagingSenderId: "310256914813",
  appId: "1:310256914813:web:98fce7a8a20511a10dfc14",
};

//const firebaseApp =
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("there was an error creating the user: ", e);
    }
  }

  return userDocRef;
};
