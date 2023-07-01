import * as React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import App from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    fontColour: '#6f6f6f',
    darkGrey: '#1A1A1A',
    lightGrey: '#F2F2F2',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}