import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-vector-icons'

const FormInput = (props) => {
  const [text, setText] = React.useState("");

  return (
    <View style={{ width: '100%', padding: 15 }}>
      <TextInput
        label={props.label}
        value={text}
        onChangeText={text => setText(text)}
      />
      {/* <Icon style={{padding:10}} name="edit" size={20} color="#000"/> */}
    </View>
  );
};

export default FormInput;