import React from 'react';
// import styled from "styled-components/native";
import { StyleSheet, Button, Pressable, TouchableOpacity, Text } from 'react-native';

export default function SecondaryButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 160,
        height: 50,
        margin: 5,
        padding: 5,

        display: "flex",
        justifyContent: "center",
        borderRadius: 10,


        backgroundColor: "#D9D9D9"
    },

    text: {
        textAlign: "center",
        fontSize: 15
    }

});
