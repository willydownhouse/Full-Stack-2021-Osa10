import React from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import { Link } from "react-router-native";
import { useMutation } from "@apollo/client";
import { deleteReview } from "../qraphql/mutations";
import {
  GET_REPOSITORIES,
  GET_REPO_REVIEWS,
  AUTHORIZED_USER,
} from "../qraphql/queries";

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

function MyReviewsButtons({ reviewId, repoId, refetch }) {
  const [deleteOne] = useMutation(deleteReview);

  const createAlert = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("cancel"),
        },
        {
          text: "Delete",
          onPress: () => handleDelete(),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const handleDelete = async () => {
    try {
      console.log("lets delete this review");
      console.log(reviewId);
      const res = await deleteOne({
        variables: {
          id: reviewId,
        },
      });
      console.log(res);
      refetch();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <View style={styles.cont}>
      <Link title="View repository" component={Button} to={`/${repoId}`} />
      <Button title="Delete review" onPress={createAlert} color="red" />
    </View>
  );
}

export default MyReviewsButtons;
