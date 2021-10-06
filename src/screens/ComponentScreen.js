import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const userName = <Text>Chris</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is {userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },

  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
