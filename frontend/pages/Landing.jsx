import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import logo from "../assets/geogroove-transparent.gif"; //

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={logo} style={styles.image}></Image>
      <Text>GeoGroove</Text>
      <Text style={styles.subheading}>Your passport to Musical Adventures</Text>
      <Button
        title="Let's Groove"
        onPress={() => navigation.navigate("Auth")}
      />
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
