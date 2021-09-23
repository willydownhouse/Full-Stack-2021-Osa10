import React from "react";
import { View, Button } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .max(30, "Username must be less than 30 characters")
    .required("Username is required field"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be less than 50 characters")
    .required("Password is required field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Password confirm is required"),
});

function SignUpForm({ onSubmit }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name="username"
            placeholder="Username"
            style={theme.loginInput}
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            style={theme.loginInput}
            secureTextEntry
          />
          <FormikTextInput
            name="confirmPassword"
            placeholder="Confirm password"
            style={theme.loginInput}
            secureTextEntry
          />
          <View style={theme.btnWrapper}>
            <Button onPress={handleSubmit} title="Sign up"></Button>
          </View>
        </View>
      )}
    </Formik>
  );
}

export default SignUpForm;
