import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import logo from "../assets/geogroove-transparent.gif";

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={logo} style={styles.image}></Image>
      <Text>Connect to Spotify</Text>
      <Button
        title="No thanks"
        onPress={() => navigation.navigate("Question1")}
      />
      <Button title="Accept" onPress={() => navigation.navigate("Question1")} />
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
  subheading: {
    color: "#808080",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Landing;
