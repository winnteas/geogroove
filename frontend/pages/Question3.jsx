import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar3.png';

const Question2 = ({navigation}) => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.container}>
                <View style={styles.barContainer}>
                    <Image source={ProgressBar} style={styles.progress}></Image>
                </View> 
                <StatusBar style="auto" />
                <Text>Pick your favourite genres</Text>
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
      alignItems: 'center'
    }
});

export default Question2