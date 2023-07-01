import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const SearchBar = (props) => {
  const [text, setText] = React.useState("");
  const theme = useTheme();

  return (
    <TextInput
      label={props.label}
      value={text}
      onChangeText={text => setText(text)}
      contentStyle={{ backgroundColor: theme.colors.lightGrey }}
      textColor={theme.colors.fontColour}
      cursorColor={theme.colors.fontColour}
    // outlineStyle={borderRadius: 10}
    // activeUnderlineColor={theme.colors.darkGrey}
    // style={{ flex: 1, padding: 0 }}
    />
  );
};

export default SearchBar;