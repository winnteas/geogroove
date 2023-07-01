import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import logo from '../assets/geogroove-transparent.gif'; // 
import PrimaryButton from '../ui-kit/primary-btn';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const fetchFonts = async () =>
  await Font.loadAsync({
    'PoetsenOne-Regular': require('../assets/fonts/PoetsenOne-Regular.ttf'),
});


const Landing = ({navigation}) => {

  const [dataLoaded, setDataLoaded] = React.useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={logo} style={styles.image}></Image>
        <Text style = {styles.title}>GeoGroove</Text>
        <Text style={styles.subheading}>Your passport to Musical Adventures</Text>
        <PrimaryButton
            title="Let's Groove!"
            onPress={() =>
                navigation.navigate('Auth')
            }
        />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontSize: 35,
      fontStyle: 'italic',
      marginTop: 10,
      fontFamily: 'PoetsenOne-Regular'
    },

    subheading: {
      color: '#808080',
      fontSize: '20pt',
      marginTop: 10,
      marginBottom: 30
    },
    image: {
      width: 200,
      height: 200, 
    }
  });

export default Landing