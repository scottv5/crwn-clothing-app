import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

import { Category } from "../../store/categories/categories.types";

const firebaseConfig = {
  apiKey: "AIzaSyCm9I5OeIUJcLu8b_dVQgRqCnBHjxiXNR0",
  authDomain: "crwn-clothing-db-two.firebaseapp.com",
  projectId: "crwn-clothing-db-two",
  storageBucket: "crwn-clothing-db-two.appspot.com",
  messagingSenderId: "310256914813",
  appId: "1:310256914813:web:98fce7a8a20511a10dfc14",
};

initializeApp(firebaseConfig);

//---------Auth related code---------
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

type UserWithAcessToken = User & { accessToken?: string };

export const onAuthStateChangedListener = (
  callback: NextOrObserver<UserWithAcessToken>
) => {
  if (!callback) return;
  return onAuthStateChanged(auth, callback);
};
//------------------------------------

//---------firestore related code---------
export const db = getFirestore();

type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object: any) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryData = querySnapshot.docs.map(
    (docSnap) => docSnap.data() as Category
  );

  return categoryData;
};

type AdditionalInfo = {
  displayName?: string;
};

export type UserData = {
  displayName: string | null;
  email: string | null;
  createdAt: Date & { seconds?: number };
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInfo
): Promise<UserData | void> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    const userData: UserData = {
      displayName,
      email,
      createdAt,
    };

    try {
      await setDoc(userDocRef, { ...userData, ...additionalInfo });
    } catch (e) {
      console.log("there was an error creating the user: ", e);
    }
  }
  return userSnapshot.data() as UserData;
};
//------------------------------------
