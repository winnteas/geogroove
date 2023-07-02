import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ListGenres = (props) => {
  const genresList = [];
  props.genres &&
    props.genres.map((g, id) => {
      genresList.push(
        <ScrollView
          key={id}
          style={{
            width: "100%",
            borderTopColor: "black",
            borderTopWidth: StyleSheet.hairlineWidth,
            backgroundColor: props.selectedGenres.includes(g) ? '#e5e5e5' : 'white',
            borderRadius: 10,
            width: 300,
          }}
        >
          <Text id={id} style={styles.listItem} onPress={() => {
            if (props.selectedGenres.includes(g)) {
              props.setSelectedGenres(props.selectedGenres.filter((genre) => genre !== g));
            } else {
              props.setSelectedGenres([...props.selectedGenres, g]);
            }
          }}>
            {g}
          </Text>
        </ScrollView>
      );
    });
  return <View style={styles.container}>{genresList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  listItem: {
    fontSize: 17,
    textAlign: "left",
    marginBottom: 5,
    padding: 14,
    paddingLeft: 50,
    width: "70%",
  },
});

export default ListGenres;
