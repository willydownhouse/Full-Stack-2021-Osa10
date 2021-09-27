import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import MyReviewsButtons from "./MyReviewsButtons";

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    display: "flex",
  },
  ratingWrapper: {
    width: "15%",
  },
  contentWrapper: {},
  wrapperName: {
    marginBottom: 5,
  },
  wrapperDate: {
    marginBottom: 5,
  },
  wrapperText: {
    marginBottom: 5,
  },
});

function ReviewItem({ item, refetch }) {
  return (
    <View style={styles.cont}>
      <View style={styles.ratingWrapper}>
        <Text fontSize="rating" color="primary">
          {item.rating}
        </Text>
      </View>
      <View styles={styles.contentWrapper}>
        <Text fontWeight="bold">
          {item.user ? item.user.username : item.repository.fullName}
        </Text>

        <Text color="textSecondary">
          {format(parseISO(`${item.createdAt}`), "MM/dd/yyyy")}
        </Text>

        <Text style={{ flex: 1, flexWrap: "wrap" }}>{item.text}</Text>
        {item.user ? null : (
          <MyReviewsButtons
            reviewId={item.id}
            repoId={item.repository.id}
            refetch={refetch}
          />
        )}
      </View>
    </View>
  );
}

export default ReviewItem;
