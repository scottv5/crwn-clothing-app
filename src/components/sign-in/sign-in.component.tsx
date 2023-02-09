import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import styled from "styled-components";
import { ChangeEvent, FormEvent } from "react";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUserWithPopup = async () => {
    await signInWithGooglePopup();
  };

  const signInFormSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(() => defaultFormFields);
    } catch (e) {
      console.log(
        "There was an error signing in user with email & password,",
        e
      );
    }
  };

  const inputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
