import React from 'react';
// import styled from "styled-components/native";
import { StyleSheet, Button, Pressable, TouchableOpacity, Text } from 'react-native';

// const PrimaryBtnStyled = styled.button`
//     width: 175px;
//     height: 45px;
//     margin: 5px;

//     display: flex;
//     justify-content: center;
//     border-radius: 10px;

//     backgroundColor: #BBCEA8

//     &:hover {
//         background: #efeef3;
//         color: black;
//         transform: scale(1.04);
//     }

//     cursor: pointer;
// `

export default function PrimaryButton(props) {
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


        backgroundColor: "#BBCEA8"
    },

    text: {
        textAlign: "center",
        fontSize: 15
    }

});
