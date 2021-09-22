import React from "react";
import { View } from "react-native";
import Text from "./Text";

function ItemDetails({ num, title }) {
  return (
    <View>
      <Text testID="count" fontWeight="bold">
        {num > 999 ? `${(num / 1000).toFixed(1)}k` : num}
      </Text>
      <Text color="textSecondary">{title}</Text>
    </View>
  );
}

export default ItemDetails;
