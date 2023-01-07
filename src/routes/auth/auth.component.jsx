import "./auth.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Auth = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    //const userDoc =
    await createUserDocumentFromAuth(res.user);
  };
  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  );
};

export default Auth;
