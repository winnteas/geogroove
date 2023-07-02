import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar3.png';
import SearchBar from '../components/SearchBar.jsx';
import ListGenres from '../components/ListGenres.jsx';
import ListFriends from '../components/ListFriends.jsx';
import PrimaryButton from '../ui-kit/primary-btn';
import { Context, useContext } from "../context";

const Question3 = ({ navigation }) => {
  const context = useContext(Context);
  const setters = context.setters;

  const [selectedGenres, setSelectedGenres] = React.useState([]);

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.container}>
        <View style={styles.barContainer}>
          <Image source={ProgressBar} style={styles.progress}></Image>
        </View>
        <StatusBar style="auto" />
        <Text style={styles.title}>Pick your favourite genres</Text>
        <SearchBar label='Find a genre' />
        <ListGenres genres={['Pop', 'Jazz', 'K-pop', 'Rock', 'Classical']} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        <Text style={styles.title}>Add your friends</Text>
        <SearchBar label='Add username' />
        <ListFriends />
        <PrimaryButton
          title="Continue"
          onPress={() => {
            setters.setGenres(selectedGenres);
            navigation.navigate('Question4')
          }}
        />
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#fff',
    height: '100%'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  progress: {
    width: 330,
    height: 120,
    objectFit: 'contain',
  },
  barContainer: {
    top: -15,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    padding: 10
  },
});

export default Question3
