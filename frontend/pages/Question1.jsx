import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {StyleSheet, Text, View, Button } from 'react-native';

const Question1 = ({navigation}) => {
    return (
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
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Question1