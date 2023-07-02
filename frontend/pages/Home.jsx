import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Context, useContext } from "../context";


const Home = ({ navigation }) => {
  
  const context = useContext(Context);
  const getters = context.getters;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Playlist details</Text>

      <Text>Your Activity: {getters.activity}</Text>
      <Text>YOur country code: {getters.countryCode}</Text>
      <Text>Your playlist duration {getters.playlistDuration}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
