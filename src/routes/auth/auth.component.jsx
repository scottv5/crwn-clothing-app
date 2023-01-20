import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import styled from "styled-components";

const Auth = () => (
  <AuthFormsContainer>
    <SignInForm />
    <SignUpForm />
  </AuthFormsContainer>
);

export default Auth;

//styles
const AuthFormsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 900px;
  margin: 34px auto;
`;

// .auth-forms-container {
//   display: flex;
//   justify-content: space-evenly;
//   width: 900px;
//   margin: 34px auto;
// }
