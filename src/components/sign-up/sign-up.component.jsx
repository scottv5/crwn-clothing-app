import "./sign-up.styles.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const signInFormSubmitHandler = async (e) => {
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
      await createUserDocumentFromAuth(res.user, { displayName });
    } catch (e) {
      console.log(
        "There was an error trying to create a user with email & password,",
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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email</span>

      <form onSubmit={signInFormSubmitHandler}>
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
    </div>
  );
};

export default SignUpForm;
