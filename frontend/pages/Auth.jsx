import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native';
import SecondaryButton from '../ui-kit/secondary-btn';
import logo from '../assets/geogroove-transparent.gif';
import spotify from '../assets/spotify.png';
import PrimaryButton from '../ui-kit/primary-btn';

import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@env';
import { responsiveFontSizes } from '@mui/material';

const CLIENT_ID = SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = SPOTIFY_CLIENT_SECRET;

const Landing = ({ navigation }) => {
  const authEndPoint = 'https://accounts.spotify.com/authorize';
  const redirectUri = 'exp://noenmik.anonymous.19000.exp.direct';
  const scopes = [
    'user-library-read',
    'playlist-modify-private',
    'playlist-modify-public',
    'user-top-read',
    'user-read-recently-played',
    'user-library-read',
    'user-library-modify',
    'playlist-read-private',
    'playlist-read-collaborative',
  ];

  const spotifyCredentials = {
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: redirectUri,
  };

  // Endpoint
  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: scopes,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        native: redirectUri,
      }),
    },
    discovery
  );

  const loginUrl = `${authEndPoint}?client_id=${
    spotifyCredentials.clientId
  }&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={logo} style={styles.image}></Image>

      <Image source={spotify} style={styles.spotifyLogo} />

      <Text style={styles.title}>Connect to Spotify</Text>

      <Text style={styles.subheading}>
        Connect to your Spotify to get personalised recommendations.
      </Text>

      <View style={styles.buttonContainer}>
        <SecondaryButton
          title="No Thanks"
          onPress={() => navigation.navigate('Question1')}
        />
        <PrimaryButton
          title="Accept"
          onPress={async () => {
            const result = await request.promptAsync(discovery);
            const spotifyCode = result['params']['code'];
            console.log(spotifyCode); // pass this spotifyCode into the backend route get_access_token_from_code to get access token for spotify
            // const params = new URLSearchParams();
            // params.append('grant_type', 'authorization_code');
            // params.append('code', spotifyCode);
            // params.append('redirect_uri', redirectUri);
            // params.append('client_id', CLIENT_ID);
            // params.append('client_secret', CLIENT_SECRET);

            // const response = await fetch(
            //   'https://accounts.spotify.com/api/token',
            //   {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     body: params,
            //   }
            // );
            // console.log(response['headers']['map']['setcookie']);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginTop: 10,
  },
  subheading: {
    color: '#808080',
  },
  subheading: {
    color: '#808080',
    width: '75%',
    fontSize: '15pt',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  spotifyLogo: {
    width: '50%',
    height: '8%',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
  },
});
export default Landing;
