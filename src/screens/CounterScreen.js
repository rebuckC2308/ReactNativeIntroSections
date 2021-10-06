import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Current Count:</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
