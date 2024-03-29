import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Icon } from 'react-native-vector-icons'

const FormInput = (props) => {
  // const [text, setText] = React.useState(props.value);

  return (
    <View style={{ width: 300, padding: 15 }}>
      <TextInput
        mode='outlined'
        label={props.label}
        value={props.value}
        onChangeText={text => props.onChangeText(text)}
      />
      {/* <Icon style={{padding:10}} name="edit" size={20} color="#000"/> */}
    </View>
  );
};

export default FormInput;