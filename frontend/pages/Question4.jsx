import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar3.png';
import FormInput from '../components/FormInput';
import DropDown from "react-native-paper-dropdown";
import { useState } from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';
import PrimaryButton from '../ui-kit/primary-btn';
import { Context, useContext } from "../context";

import SeoulStrolls from '../assets/SeoulStrolls.png';
import SwitzerlandHike from '../assets/SwitzerlandHike.png';
import ItalyParty from '../assets/ItalyParty.png';
import AucklandDrive from '../assets/AucklandDrive.png';



const Question4 = ({navigation}) => {
  
  
  const names = {
    "walking": "Seoul Strolls",
    "hiking": "Alpine Serenity",
    "party": "Fiesta Frenzy",
    "driving": "Urban Driftscape"
  }

  const images = {
    "walking": SeoulStrolls,
    "hiking": SwitzerlandHike,
    "party": ItalyParty,
    "driving": AucklandDrive
  }

  const descriptions = {
    "walking":"Take a rhythmic journey through the bustling streets of Seoul with the \"Seoul Strolls\" playlist. Immerse yourself in the vibrant energy of South Korea's capital city as you explore its historic landmarks, modern neighbourhoods, and hidden gems on foot.",
    "hiking": "Embark on an awe-inspiring hiking expedition through the breathtaking landscapes of Switzerland with the \"Alpine Serenity\" playlist. This carefully crafted collection of harmonious melodies captures the essence of the Swiss Alps, immersing you in the tranquility and grandeur of nature as you conquer majestic peaks and traverse picturesque trails.",
    "party": "Get ready to ignite the dance floor and experience the true essence of partying in Italy with the \"Dolce Vita Fiesta\" playlist. From the vibrant streets of Rome to the buzzing clubs of Milan, this curated collection of infectious beats and irresistible rhythms will transport you to the heart of Italy's legendary nightlife.",
    "driving": "Embark on an exhilarating driving adventure through the vibrant cityscape of Auckland with the \"Urban Driftscape\" playlist. This curated collection of eclectic tunes is tailor-made to accompany your journey as you cruise along the city's scenic highways, soak in panoramic views, and immerse yourself in the urban rhythm."
  }
  
  
  const context = useContext(Context);
  const setters = context.setters;
  
  const authEndPoint = 'https://accounts.spotify.com/authorize';

  const [playlistTitle, setPlaylistTitle] = React.useState(names[context.getters.activity]);
  const [playlistDesc, setPlaylistDesc] = React.useState(descriptions[context.getters.activity]);

  const [showDropDown, setShowDropDown] = useState(false);
  const [duration, setDuration] = useState("");
    const durationList = [
      {
        label: "1 hour",
        value: 1,
      },
      {
        label: "2 hours",
        value: 2,
      },
      {
        label: "3 hours",
        value: 3,
      },
    ];
    return (
      <Provider theme={DefaultTheme}>
        <View style={styles.pageContainer}>
            <View style={styles.container}>
                <View style={styles.barContainer}>
                    <Image source={ProgressBar} style={styles.progress}></Image>
                </View> 
                <StatusBar style="auto" />
                <Text style={styles.title}>Playlist Details</Text>
                <View style={styles.playlistContainer}>
                    <Image source={images[context.getters.activity]} style={styles.playlistPicture}></Image>
                </View> 

                <FormInput
                  label="Playlist name"
                  value={playlistTitle}
                  style={styles.textInput}
                  onChangeText={setPlaylistTitle}
                />
                <FormInput
                  label="Playlist Description"
                  value={playlistDesc}
                  style={styles.textInput}
                  onChangeText={setPlaylistDesc}
                />
                <View
                  style={{
                    width: 270,
                    marginBottom: 10
                  }}
                >
                  <DropDown
                    label={"Duration"}
                    mode={"outlined"}
                    visible={showDropDown}
                    sx={styles.dropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={duration}
                    setValue={setDuration}
                    list={durationList}
                  />
                </View>

                <PrimaryButton
                    title="Continue"
                    onPress={() => {
                      setters.setPlaylistDesc(playlistDesc);
                      setters.setPlaylistName(playlistTitle);
                      setters.setPlaylistDuration(duration);
                      // navigation.navigate('Home');
                        fetch(`https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg`, {
                          method: 'GET',
                          headers: {
                            'Authorization': `Bearer ${context.getters.token}`,
                            'Content-Type': 'application/json'
                          }
                        })
                        .then(response => response.json())
                        .then(data => {
                          // Handle the response data
                          console.log(data);
                          console.log('the token is', context.getters.token);

                        })
                        .catch(error => {
                          // Handle any errors
                          console.error('Error:', error);
                        });
                      }}
                />
            </View>
        </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: '#fff',
      height: '100%'
    },
    title: {
      fontSize: 25,
      marginBottom: 10
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    progress: {
      width: 330,
      height: 120,
      objectFit: 'contain',
    },
    dropDownStyle: {
      width: 330,
      height: 120
    },
    barContainer: {
      top: -15,
      width: '100%',
      alignItems: 'center'
    },
    playlistContainer: {
      width: 250,
      height: 250,
      backgroundColor: "#D9D9D9"
    },
    playlistPicture: {
      width: 250,
      height: 250
    },
    textInput: {
      width: 200
    }
});

export default Question4