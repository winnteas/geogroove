import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar3.png';
import FormInput from '../components/FormInput';
import DropDown from "react-native-paper-dropdown";
import { useState } from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';

const Question4 = ({navigation}) => {
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
                <Text>Playlist Details</Text>
                <View style={styles.playlistContainer}>
                    <Image source={ProgressBar} style={styles.playlistPicture}></Image>
                </View> 

                <FormInput
                  label="Playlist name"
                  value={text}
                  onChangeText={text => setText(text)}
                />
                <FormInput
                  label="Playlist Description"
                  value={text}
                  onChangeText={text => setText(text)}
                />

                <DropDown
                  label={"Duration"}
                  mode={"outlined"}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  value={duration}
                  setValue={setDuration}
                  list={durationList}
                />

                <Button
                    title="Continue"
                    onPress={() =>
                        navigation.navigate('Home')
                    }
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
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    progress: {
      width: 330,
      height: 120,
      objectFit: 'contain',
    },
    barContainer: {
      top: -15,
      width: '100%',
      alignItems: 'center'
    },
    playlistContainer: {
      width: 250,
      height: 250
    },
    playlistPicture: {
      width: 250,
      height: 250
    }
});

export default Question4