import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import { useState, useEffect } from "react";
import Button from "../button/button.component";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
    await signInWithGooglePopup();
    //const userDoc =
  };

  const signInFormSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //const res =
      await signInAuthUserWithEmailAndPassword(email, password);
      //console.log(res.user);
      // const res2 = await createUserDocumentFromAuth(res.user);
      // console.log(res2);
      setFormFields(() => defaultFormFields);
    } catch (e) {
      console.log(
        "There was an error signing in user with email & password,",
        e
      );
    }
  };

  const inputOnChangeHandler = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in here</span>

      <form onSubmit={signInFormSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={inputOnChangeHandler}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={inputOnChangeHandler}
          required
        />
        <div className="sign-in-buttons-container">
          <Button>Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={logGoogleUserWithPopup}
          >
            Googe Sign In
          </Button>
          <Button
            type="button"
            buttonType="google"
            style={{ flex: "1 1 auto", marginTop: "12px" }}
            onClick={signInWithGoogleRedirect}
          >
            Sign In with Google Redirect
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
