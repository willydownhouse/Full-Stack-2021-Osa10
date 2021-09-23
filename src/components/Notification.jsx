import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";
const styles = StyleSheet.create({
  cont: {
    margin: 10,
  },
});
function Notification({ message }) {
  return (
    <View style={styles.cont}>
      <Text color="red" fontSize={theme.fontSizes.rating} fontWeight="bold">
        {message}
      </Text>
    </View>
  );
}

export default Notification;
