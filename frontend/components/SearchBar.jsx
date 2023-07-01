import * as React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { View, Image } from 'react-native';

const SearchBar = (props) => {
  const [text, setText] = React.useState("");
  const theme = useTheme();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 15, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 100 }}>
      {/* <View style={{
        position: "absolute",
        zIndex: 1,
        backgroundColor: theme.colors.background
      }}>
        <Image style={{ backgroundColor: theme.colors.background }} source={require('../assets/search-icon.png')} />
      </View> */}
      <TextInput
        label={props.label}
        value={text}
        onChangeText={text => setText(text)}
        textColor={theme.colors.darkGrey}
        underlineColor='black'
        activeUnderlineColor={theme.colors.darkGrey}
        style={{ width: '100%' }}
        left={<TextInput.Icon icon={() => (
          <Image
            source={require('../assets/search-icon.png')}
            style={{ width: 16, height: 16, tintColor: theme.colors.darkGrey }}
          />
        )} />}
      />
    </View>

  );
};

export default SearchBar;