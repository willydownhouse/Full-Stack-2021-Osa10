import React from "react";
import { View, Text, Button } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner is required field"),
  repositoryName: yup.string().required("Repository name is required field"),
  rating: yup
    .number()
    .positive()
    .integer()
    .min(0)
    .max(100)
    .required("Rating is required"),
  text: yup.string("Review is required"),
});

function CreateReviewForm({ onSubmit }) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: "",
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
            style={theme.loginInput}
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
            style={theme.loginInput}
          />
          <FormikTextInput
            name="rating"
            placeholder="Repository rating between 0 - 100"
            style={theme.loginInput}
          />
          <FormikTextInput
            name="text"
            placeholder="Review"
            style={theme.loginInput}
            multiline
          />
          <View style={theme.btnWrapper}>
            <Button onPress={handleSubmit} title="Create a review"></Button>
          </View>
        </View>
      )}
    </Formik>
  );
}

export default CreateReviewForm;
