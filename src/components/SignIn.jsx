import React from "react";
import SignInForm from "./SignInForm";
import useSignIn from "../hooks/useSignIn";

const SignIn = ({ setNotification }) => {
  const [signIn] = useSignIn();

  const onFormSubmit = async (values) => {
    try {
      await signIn(values);

      setNotification("Succesfully logged in");
      setTimeout(() => setNotification(null), 3000);
    } catch (err) {
      setNotification(err.message);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return <SignInForm onFormSubmit={onFormSubmit} />;
};

export default SignIn;
