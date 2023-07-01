import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const ListFriends = () => {
  // call api
  const friendsList = []
  const resFriends = ['Derek', 'Josh', 'Brian', 'Winnie', 'James', 'Laura']
  resFriends && resFriends.map((f, id) => {
    friendsList.push(
      <View style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: 'black',
        borderTopWidth: StyleSheet.hairlineWidth,
        padding: 14,
      }}>
        <Image id={`friend-image-${id}`} source={require('../assets/image-icon.png')}
          style={{ width: 60, height: 60 }} />
        <Text id={`friend-name-${id}`} style={styles.listItem}>{f}</Text>
        <Image id={`friend-image-${id}`} source={require('../assets/trash-icon.png')}
          style={{ width: 20, height: 20 }} />
      </View>
    )
  })
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {friendsList}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 10,
    paddingBottom: 50,
  },
  listItem: {
    fontSize: 17,
    textAlign: 'left',
    marginBottom: 5,
    padding: 14,
    paddingLeft: 25,
    width: '70%',
  },
});

export default ListFriends;