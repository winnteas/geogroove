import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ListGenres = (props) => {
  const genresList = []
  props.genres && props.genres.map((g, id) => {
    genresList.push(
      <ScrollView style={{
        width: '100%',
        borderTopColor: 'black',
        borderTopWidth: StyleSheet.hairlineWidth,
      }}>
        <Text id={id} style={styles.listItem}>{g}</Text>
      </ScrollView>
    )
  })
  return (
    <View style={styles.container}>
      {genresList}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  listItem: {
    fontSize: 17,
    textAlign: 'left',
    marginBottom: 5,
    padding: 14,
    paddingLeft: 50,
    width: '70%',
  },
});

export default ListGenres;