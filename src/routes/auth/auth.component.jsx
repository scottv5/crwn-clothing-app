import "./auth.styles.scss";
import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

const Auth = () => (
  <div className="auth-forms-container">
    <SignInForm />
    <SignUpForm />
  </div>
);

export default Auth;
