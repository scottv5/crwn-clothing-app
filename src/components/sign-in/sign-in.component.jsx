import FormInput from "../form-input/form-input.component";
import { useState, useEffect } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  useEffect(() => {
    const getRedirectResultAndCreateUserDoc = async () => {
      const res = await getRedirectResult(auth);
      if (res && res.user) {
        //const userDoc=
        await createUserDocumentFromAuth(res.user);
        setCurrentUser(res.user);
      }
    };
    getRedirectResultAndCreateUserDoc();
  }, [setCurrentUser]);

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
    <SignInContainer>
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
        <SignInButtonsContainer>
          <Button>Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUserWithPopup}
          >
            Googe Sign In
          </Button>
          <Button
            type="button"
            style={{ flex: "1 1 auto", marginTop: "12px" }}
            onClick={signInWithGoogleRedirect}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In with Google Redirect
          </Button>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

//styles
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`;
const SignInButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// .sign-in-container {
//   display: flex;
//   flex-direction: column;
//   width: 380px;

//   h2 {
//     margin: 10px 0;
//   }
// }

// .sign-in-buttons-container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }
