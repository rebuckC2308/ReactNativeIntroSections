import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
      <Text style={styles.textFourStyle}>Child 4</Text>
    </View>
  );
};

//Parent Element Style Properties for Flex-Box Layout:
//flexDirection; alignItems; justifyContent
// const styles = StyleSheet.create({
//   viewStyle: {
//     alignItems: "center",
//     borderWidth: 10,
//     borderColor: "black",
//     height: 200,
//     justifyContent: "space-evenly",
//   },
//   textStyle: {
//     borderWidth: 1,
//     borderColor: "red",
//     marginVertical: 3,
//     marginHorizontal: 5,
//   },
// });

//Child properties for flex-box layout
//flex; alignSelf
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems: "center",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    //shortcut for absoulte fill instead of putting all 5 properties (on textTwoStyle)
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "blue",
    flex: 1,
    alignSelf: "flex-end",
    position: "absolute",
    top: 0,
    right: 150,
    bottom: 0,
    left: 0,
    //absolute fill, position (absolute), top, bottom, right, left propterties
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "orange",
    flex: 2,
    alignSelf: "baseline",
  },
  textFourStyle: {
    borderWidth: 3,
    borderColor: "green",
    flex: 3,
  },
});

export default BoxScreen;
