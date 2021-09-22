import { useQuery } from "@apollo/client";
import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";
//import { GET_REPO_REVIEWS } from "../qraphql/queries";
import useReviews from "../hooks/useReviews";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

function ReviewsList({ id }) {
  const { reviews, loading, error } = useReviews(id);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const reviewNodes = reviews ? reviews.map((el) => el.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return <ReviewItem item={item} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default ReviewsList;
