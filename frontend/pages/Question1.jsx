import { StatusBar } from "expo-status-bar";
import React from "react";
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
import { Context, useContext } from "../context";

const Question1 = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");

  const context = useContext(Context);
  const setters = context.setters;

  const handlePress = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };
  const isBoxSelected = (index) => {
    return selected === index ? styles.selectedBorder : styles.defaultBorder;
  };
  return (
    <View style={styles.pageContainer}>
      <View style={styles.barContainer}>
        <Image source={ProgressBar} style={styles.progress}></Image>
      </View>
      <Text style={styles.title}>What are you up to?</Text>
      <View style={styles.container}>
        <View style={styles.selectBox}>
          <View style={styles.activityContainer}>
            <TouchableOpacity
              style={styles.pressableContainer}
              onPress={() => handlePress('Walking')}
            >
              <View style={[styles.imageContainer, isBoxSelected('Walking')]}>
                <Image source={Walking} style={styles.activity1} />
                <Text>Walking</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.activityContainer}>
            <TouchableOpacity
              style={styles.pressableContainer}
              onPress={() => handlePress('Driving')}
            >
              <View style={[styles.imageContainer, isBoxSelected('Driving')]}>
                <Image source={Driving} style={styles.activity2} />
                <Text>Driving</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.activityContainer}>
            <TouchableOpacity
              style={styles.pressableContainer}
              onPress={() => handlePress('Hiking')}
            >
              <View style={[styles.imageContainer, isBoxSelected('Hiking')]}>
                <Image source={Hiking} style={styles.activity3} />
                <Text>Hiking</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.activityContainer}>
            <TouchableOpacity
              style={styles.pressableContainer}
              onPress={() => handlePress('Partying')}
            >
              <View style={[styles.imageContainer, isBoxSelected('Partying')]}>
                <Image source={Partying} style={styles.activity4} />
                <Text>Partying</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <PrimaryButton
          title="Continue"
          disabled={selected === ""}
          onPress={() => {
            setters.setActivity(selected);
            navigation.navigate("Question2");
          }}
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
  selectBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    height: "60%",
    gap: 20,
  },
  activityContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    aspectRatio: "1 / 1",
  },
  pressableContainer: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 10,
  },
  activity1: {
    width: "60%",
    height: "60%",
    tintColor: "#DDB6B6",
  },
  activity2: {
    width: "60%",
    height: "60%",
    tintColor: "#AAD8E7",
  },
  activity3: {
    width: "60%",
    height: "60%",
    tintColor: "#EAAC89",
  },
  activity4: {
    width: "60%",
    height: "60%",
    tintColor: "#A59BE7",
  },
  defaultBorder: {
    borderWidth: 2,
    borderColor: "#e5e5e5",
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: "#e5e5e5",
    backgroundColor: "#e5e5e5",
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
