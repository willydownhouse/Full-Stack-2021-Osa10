import React from "react";
import SignUpForm from "./SignUpForm";
import useSignIn from "../hooks/useSignIn";
import { useMutation } from "@apollo/client";
import { createUser } from "../qraphql/mutations";

function SignUp({ setNotification }) {
  const [mutate, result] = useMutation(createUser);
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    try {
      console.log(values);

      const res = await mutate({
        variables: {
          user: {
            username: values.username,
            password: values.password,
          },
        },
      });

      console.log("after creating user");
      console.log(res);

      await signIn(values);

      setNotification("Succesfully created account and logged in!");
      setTimeout(() => setNotification(null), 3000);
    } catch (err) {
      setNotification(err.message);
      setTimeout(() => setNotification(null), 3000);
    }
  };
  return <SignUpForm onSubmit={onSubmit} />;
}

export default SignUp;
