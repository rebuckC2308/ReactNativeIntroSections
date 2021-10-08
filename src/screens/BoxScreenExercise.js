import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreenExercise = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 500,
    justifyContent: "space-evenly",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: "red",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: "green",
    marginLeft: 75,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: "purple",
  },
});
export default BoxScreenExercise;
