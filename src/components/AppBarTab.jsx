import React from "react";
import { Pressable, Text } from "react-native";
import theme from "../theme";

function AppBarTab({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={theme.appBarTab}>{title}</Text>
    </Pressable>
  );
}

export default AppBarTab;
