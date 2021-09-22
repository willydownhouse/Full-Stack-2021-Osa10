import React from "react";
import { useHistory, useParams } from "react-router-native";
import { useMutation } from "@apollo/client";
import { authorize } from "../qraphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [signIn] = useMutation(authorize);
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  let history = useHistory();

  const onFormSubmit = async ({ username, password }) => {
    try {
      const { data } = await signIn({
        variables: {
          credentials: {
            username,
            password,
          },
        },
      });

      await authStorage.setAccessToken(data.authorize.accessToken);
      client.resetStore();
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return <SignInForm onFormSubmit={onFormSubmit} />;
};

export default SignIn;
