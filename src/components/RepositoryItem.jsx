import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text as NativeText,
  Pressable,
} from "react-native";
import theme from "../theme";
import Text from "./Text";
import ItemDetails from "./ItemDetails";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  cont: {
    padding: 10,
  },
  topDiv: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  bottomDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  language: {
    padding: 15,
    backgroundColor: "blue",
  },
});

function RepositoryItem({ item }) {
  return (
    <View key={item.id} style={styles.cont}>
      <Link component={Pressable} to={`/${item.id}`}>
        <View style={styles.topDiv}>
          <Image
            style={styles.avatar}
            source={{
              uri: `${item.ownerAvatarUrl}`,
            }}
          />
          <View>
            <Text testID="fullName" fontWeight="bold">
              {item.fullName}
            </Text>
            <Text
              testID="description"
              color="textSecondary"
              fontSize={theme.fontSizes.body}
            >
              {item.description}
            </Text>
            <Text testID="language" color="primary" fontWeight="bold">
              {item.language}
            </Text>
          </View>
        </View>
        <View style={styles.bottomDiv}>
          <ItemDetails num={item.forksCount} title="Forks" />
          <ItemDetails num={item.stargazersCount} title="Stars" />
          <ItemDetails num={item.ratingAverage} title="Rating" />
          <ItemDetails num={item.reviewCount} title="Review" />
        </View>
      </Link>
    </View>
  );
}

export default RepositoryItem;
