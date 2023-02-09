import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import styled from "styled-components";
import { ChangeEvent, FormEvent } from "react";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const signUpFormSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setFormFields(() => ({
        ...formFields,
        password: "",
        confirmPassword: "",
      }));
      return console.log("passwords don't match");
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      setFormFields(() => defaultFormFields);
      if (res) await createUserDocumentFromAuth(res.user, { displayName });
    } catch (e) {
      console.log(
        "There was an error trying to create a user with email & password,",
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
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email</span>

      <form onSubmit={signUpFormSubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={inputOnChangeHandler}
          required
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={inputOnChangeHandler}
          required
        />

        <Button>Sign Up</Button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;

//styles
const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`;
