import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  link: {
    margin: 10,
  },
});

function AppBarTab({ title, to, onPress }) {
  return (
    <View style={styles.link}>
      <Link component={Pressable} onPress={onPress} to={to}>
        <Text style={theme.appBarTab}>{title}</Text>
      </Link>
    </View>
  );
}

export default AppBarTab;
