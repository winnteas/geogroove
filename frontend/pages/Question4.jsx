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

const Question4 = ({navigation}) => {

    const context = useContext(Context);
    const setters = context.setters;
    const [text, setText] = React.useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [duration, setDuration] = useState("");
    const durationList = [
      {
        label: "1 hour",
        value: "1 hour",
      },
      {
        label: "2 hours",
        value: "2 hours",
      },
      {
        label: "3 hours",
        value: "3 hours",
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
                    <Image  style={styles.playlistPicture}></Image>
                </View> 

                <FormInput
                  label="Playlist name"
                  value={text}
                  style={styles.textInput}
                  onChangeText={text => setText(text)}
                />
                <FormInput
                  label="Playlist Description"
                  value={text}
                  style={styles.textInput}
                  onChangeText={text => setText(text)}
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
                      navigation.navigate('Home')
                      setters.setPlaylistDuration(duration);
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
      marginTop: 10,
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
      width: 300
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