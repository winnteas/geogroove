import * as React from 'react';
import { TextInput, useTheme, Menu } from 'react-native-paper';
import { View, Image, Button } from 'react-native';

const SearchBar = (props) => {
  const [text, setText] = React.useState("");
  const theme = useTheme();
  const [filteredData, setFilteredData] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flexDirection: 'column', alignItems: 'center', width: 300, paddingTop: 15, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 100 }}>
        <TextInput
          mode="outlined"
          label={props.label}
          value={text}
          onChangeText={text => {
            if (text && text.length > 0) {
              setFilteredData(filterData(text));
            } else if (text && text.length === 0) {
              setFilteredData(props.data);
            }
            setText(text)
          }}
          textColor={theme.colors.darkGrey}
          underlineColor='grey'
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
    </View >

  );
};

export default SearchBar;
// {/* <View
//           style={{ flex: 1 }}
//         // visible={true}
//         // onDismiss={() => { }}
//         // anchor={<Button onPress={() => { }}>Show menu</Button>}
//         >
//           <Menu.Item onPress={() => { }} title="Item 1" />
//           <Menu.Item onPress={() => { }} title="Item 2" />
//           {/* <Divider /> */}
//           <Menu.Item onPress={() => { }} title="Item 3" />
//         </View> */}