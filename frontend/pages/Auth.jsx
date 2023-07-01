import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {StyleSheet, Text, View, Button, Image } from 'react-native';
import SecondaryButton from '../ui-kit/secondary-btn'; 
import logo from '../assets/geogroove-transparent.gif';
import spotify from '../assets/spotify.png';
import PrimaryButton from '../ui-kit/primary-btn';

const Landing = ({navigation}) => {
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
            <Image source={logo} style={styles.image}></Image>

            <Image source={spotify} style={styles.spotifyLogo}/>

            <Text style={styles.title}>Connect to Spotify</Text>

            <Text style={styles.subheading}>
              Connect to your Spotify to get personalised recommendations.
            </Text>

            <View style={styles.buttonContainer}>
              <SecondaryButton
                  title="No Thanks"
                  onPress={() =>
                      navigation.navigate('Question1')
                  }
              />
              <PrimaryButton
                  title="Accept"
                  onPress={() =>
                      navigation.navigate('Question1')
                  }
              />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 25,
      marginTop: 10,
    },
    subheading: {
      color: '#808080',
    },
    subheading: {
      color: '#808080',
      width: '75%',
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 30
    },
    image: {
      width: 150,
      height: 150, 
    },
    spotifyLogo: {
      width: "50%",
      height: '8%',
      marginBottom: 20
    },
    buttonContainer: {
      flex: 0,
      flexDirection: 'row'
    }
  });
export default Landing