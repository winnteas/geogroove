import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar3.png';
import FormInput from '../components/FormInput';

const Question4 = ({navigation}) => {
    const [text, setText] = React.useState("");
    return (
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
                <Button
                    title="Continue"
                    onPress={() =>
                        navigation.navigate('Home')
                    }
                />
            </View>
        </View>
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