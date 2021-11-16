import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, colors: COLORS.black }}>
      <Text>Hello there! This is Homepage</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
