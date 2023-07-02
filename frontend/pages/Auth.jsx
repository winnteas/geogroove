import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native';
import SecondaryButton from '../ui-kit/secondary-btn';
import logo from '../assets/geogroove-transparent.gif';
import spotify from '../assets/spotify.png';
import PrimaryButton from '../ui-kit/primary-btn';
import { getToken } from '../api/endpoints'


import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@env';
import { responsiveFontSizes } from '@mui/material';

const CLIENT_ID = SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = SPOTIFY_CLIENT_SECRET;

const Landing = ({ navigation }) => {
  const [auth_token, setAuthToken] = useState(undefined);
  const authEndPoint = 'https://accounts.spotify.com/authorize';
  // NEEDS TO BE CHANGED ACCORDING TO YOUR RUN OF NPX EXPO START --TUNNEL
  const redirectUri = 'exp://su_kz5g.anonymous.19000.exp.direct';
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

  const loginUrl = `${authEndPoint}?client_id=${spotifyCredentials.clientId
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
            const params = new URLSearchParams();
            params.append('client_id', CLIENT_ID);
            params.append('grant_type', 'client_credentials');
            params.append('code', spotifyCode);
            params.append('redirect_uri', redirectUri);
            params.append('client_secret', CLIENT_SECRET);
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

            const headers = {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              }
            };

            let data = {
              grant_type: "client_credentials",
              code: spotifyCode,
              redirectUri: redirectUri,
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
            };
            getToken(data, headers);
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
    width: '75%',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30
  },
  image: {
    width: 150,
    height: 150,
  },
  spotifyLogo: {
    width: "50%",
    height: '8%',
    marginBottom: 20
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
  },
});
export default Landing;
