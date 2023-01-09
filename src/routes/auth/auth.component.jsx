import "./auth.styles.scss";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up/sign-up.component";

const Auth = () => {
  useEffect(() => {
    const getRedirectResultAndCreateUserDoc = async () => {
      const res = await getRedirectResult(auth);
      if (res) {
        //const userDoc=
        await createUserDocumentFromAuth(res.user);
      }
    };
    getRedirectResultAndCreateUserDoc();
  }, []);

  const logGoogleUserWithPopup = async () => {
    const res = await signInWithGooglePopup();
    //const userDoc =
    await createUserDocumentFromAuth(res.user);
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={logGoogleUserWithPopup}>
        Sign In with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>

      <SignUpForm />
    </div>
  );
};

export default Auth;
