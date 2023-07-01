import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ProgressBar from '../components/ProgressBar1.png';

const Question1 = ({navigation}) => {
    return (
        <View style={styles.pageContainer}>
            <View style={styles.barContainer}>
            <Image source={ProgressBar} style={styles.progress}></Image>
            </View> 
            <View style={styles.container}>
                <Text>What are you up to?</Text>
                <Button
                    title="Continue"
                    onPress={() =>
                        navigation.navigate('Question2')
                    }
                />
                <StatusBar style="auto" />
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

export default Question1