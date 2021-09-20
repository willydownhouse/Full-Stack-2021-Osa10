import React from "react";
import { Formik } from "formik";
import { View, StyleSheet, Button } from "react-native";
import theme from "../theme";

import FormikTextInput from "./FormikTextInput";
//import useSignIn from "../hooks/useSignIn";
import { useMutation } from "@apollo/client";
import { authorize } from "../qraphql/mutations";
const styles = StyleSheet.create({
  btnWrapper: {
    margin: 9,
  },
});

const SignIn = () => {
  const [signIn, result] = useMutation(authorize);

  console.log(result);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        signIn({
          variables: {
            credentials: {
              username: values.username,
              password: values.password,
            },
          },
        });
      }}
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
