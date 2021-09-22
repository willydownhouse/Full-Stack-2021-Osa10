import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  btnWrapper: {
    margin: 9,
  },
});

function SignInForm({ onFormSubmit }) {
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
            testID="username"
          />

          <FormikTextInput
            name="password"
            placeholder="password"
            style={theme.loginInput}
            secureTextEntry
            testID="password"
          />

          <View style={styles.btnWrapper}>
            <Button
              testID="submit"
              onPress={handleSubmit}
              title="sign up"
            ></Button>
          </View>
        </View>
      )}
    </Formik>
  );
}

export default SignInForm;
