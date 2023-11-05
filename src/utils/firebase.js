import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl1O_iDoAL1n9mmFN2q1gglmFkpKQUbiA",
  authDomain: "crown-clothing-3702b.firebaseapp.com",
  projectId: "crown-clothing-3702b",
  storageBucket: "crown-clothing-3702b.appspot.com",
  messagingSenderId: "495215149269",
  appId: "1:495215149269:web:12226289578ca6b88ce25c",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const loginGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const dataBase = getFirestore();

export const createUserOnDataBase = async (
  userAuth,
  informationAdditional = {}
) => {
  if (!userAuth) return;

  const Doc = doc(dataBase, "users", userAuth.uid);
  const userDoc = await getDoc(Doc);

  if (!userDoc.exists()) {
    const { displayName, email } = userAuth;
    const createUserDate = new Date();
    try {
      await setDoc(Doc, {
        displayName,
        email,
        createUserDate,
        ...informationAdditional,
      });
    } catch (error) {
      alert("Erro encontrado ao criar o usúario!" + error.message);
    }
  } else {
    return Doc;
  }
};

export const createUser = async (emailRef, passwordRef) => {
  if (!emailRef || !passwordRef) {
    return;
  } else {
    return await createUserWithEmailAndPassword(auth, emailRef, passwordRef);
  }
};

export const signIn = async (emailRef, passwordRef) => {
  if (!emailRef || !passwordRef) {
    return;
  } else {
    return await signInWithEmailAndPassword(auth, emailRef, passwordRef);
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
