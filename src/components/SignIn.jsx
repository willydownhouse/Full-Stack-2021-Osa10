import React from "react";
import { useHistory } from "react-router-native";
import { Formik } from "formik";
import { View, StyleSheet, Button } from "react-native";
import theme from "../theme";

import FormikTextInput from "./FormikTextInput";

import { useMutation } from "@apollo/client";
import { authorize } from "../qraphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  btnWrapper: {
    margin: 9,
  },
});

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
      console.log(authStorage);

      console.log(data.authorize);

      await authStorage.setAccessToken(data.authorize.accessToken);
      client.resetStore();
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={onFormSubmit}
      validate={(values) => {
        const errors = {};
        const required = "Field is required";

        if (!values.username) {
          errors.username = required;
        }
        if (!values.password) {
          errors.password = required;
        }

        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name="username"
            placeholder="username"
            style={theme.loginInput}
          />

          <FormikTextInput
            name="password"
            placeholder="password"
            style={theme.loginInput}
            secureTextEntry
          />

          <View style={styles.btnWrapper}>
            <Button onPress={handleSubmit} title="sign up"></Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
