import * as React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { View, Image } from 'react-native';


const SearchBar = (props) => {
  const [text, setText] = React.useState("");
  const theme = useTheme();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 15, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 100 }}>
      <TextInput
        label={props.label}
        value={text}
        onChangeText={text => setText(text)}
        textColor={theme.colors.darkGrey}
        underlineColor='black'
        activeUnderlineColor={theme.colors.darkGrey}
        contentStyle={{ backgroundColor: theme.colors.background }}
        style={{ paddingLeft: 5, width: '95%' }}
      // right={<TextInput.Icon icon="search" />}
      />
    </View>

  );
};

export default SearchBar;