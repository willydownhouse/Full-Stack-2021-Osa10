import React from "react";
import { Text, View, StyleSheet } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  link: {
    margin: 10,
  },
});

function AppBarTab({ title, to }) {
  return (
    <View style={styles.link}>
      <Link to={to}>
        <Text style={theme.appBarTab}>{title}</Text>
      </Link>
    </View>
  );
}

export default AppBarTab;
