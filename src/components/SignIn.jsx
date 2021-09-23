import React from "react";
import { useHistory, useParams } from "react-router-native";
import { useMutation } from "@apollo/client";
import { authorize } from "../qraphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import SignInForm from "./SignInForm";

const SignIn = ({ setNotification }) => {
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
      setNotification(err.message);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return <SignInForm onFormSubmit={onFormSubmit} />;
};

export default SignIn;
