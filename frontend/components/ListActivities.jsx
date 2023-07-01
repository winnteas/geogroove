import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ListActivities = ({ activities, selectedActivity, handlePress }) => {
  const activitiesList = [];
  activities &&
    activities.map((activityObj, id) => {
      activitiesList.push(
        <View key={id} style={styles.activityContainer}>
          <TouchableOpacity
            style={styles.pressableContainer}
            onPress={() => handlePress(activityObj.activity)}
          >
            <View
              style={[
                styles.imageContainer,
                selectedActivity === activityObj.activity
                  ? styles.selectedBorder
                  : null,
              ]}
            >
              <Image
                source={activityObj.image}
                style={[styles.activity, { tintColor: activityObj.tintColor }]}
              />
              <Text>{activityObj.activity}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  return <View style={styles.selectBox}>{activitiesList}</View>;
};

const styles = StyleSheet.create({
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
    borderWidth: 2,
    borderColor: "#e5e5e5",
  },
  activity: {
    width: "60%",
    height: "60%",
  },
  selectedBorder: {
    borderColor: "#e5e5e5",
    backgroundColor: "#e5e5e5",
  },
});

export default ListActivities;
