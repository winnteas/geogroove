import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";;
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import Walking from "../assets/walking.png";
import Driving from "../assets/driving.png";
import Hiking from "../assets/hiking.png";
import Partying from "../assets/partying.png";
import ProgressBar from "../components/ProgressBar1.png";
import PrimaryButton from "../ui-kit/primary-btn";
import ListActivities from "../components/ListActivities";

const Question1 = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");

  const handlePress = (Activity) => {
    if (selected === Activity) {
      setSelected(null);
    } else {
      setSelected(Activity);
    }
  };

  activities = [
    {
      activity: "Walking",
      image: Walking,
      tintColor: "#DDB6B6",
    },
    {
      activity: "Driving",
      image: Driving,
      tintColor: "#AAD8E7",
    },
    {
      activity: "Hiking",
      image: Hiking,
      tintColor: "#EAAC89",
    },
    {
      activity: "Partying",
      image: Partying,
      tintColor: "#A59BE7",
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <View style={styles.barContainer}>
        <Image source={ProgressBar} style={styles.progress}></Image>
      </View>
      <Text style={styles.title}>What are you up to?</Text>
      <View style={styles.container}>
        <ListActivities
          activities={activities}
          selectedActivity={selected}
          handlePress={handlePress}
        />
        <PrimaryButton
          title="Continue"
          onPress={() => navigation.navigate("Question2")}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    paddingHorizontal: 20,
  },
  progress: {
    width: 330,
    height: 120,
    objectFit: "contain",
  },
  barContainer: {
    top: -15,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginTop: 10,
  },
});

export default Question1;
