import React from "react";
import SignUpForm from "./SignUpForm";

function SignUp({ setNotification }) {
  const onSubmit = (values) => {
    //CREATE USER
    //SIGN IN WITH NEW USER CREDENTIALS
    //SET TOKEN
    //REDIRECT TO REPOLIST PAGE
    console.log(values);
  };
  return <SignUpForm onSubmit={onSubmit} />;
}

export default SignUp;
