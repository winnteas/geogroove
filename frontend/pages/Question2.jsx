import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import ProgressBar from '../components/ProgressBar2.png';
import PrimaryButton from '../ui-kit/primary-btn';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
// import * as Location from 'expo-location';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_API_KEY = "AIzaSyCZLH-hzaS2XL-lBu8FR6D2I5Tgv1N37s8";

const Question2 = ({navigation}) => {
  const [location, setLocation] = React.useState({ latitude: -33.917348, longitude: 151.231262 })
  return (
      <View style={styles.pageContainer}>
          <View style={styles.container}>
              <View style={styles.barContainer}>
                  <Image source={ProgressBar} style={styles.progress}></Image>
              </View> 
              <StatusBar style="auto" />
              <Text style={styles.title}>Where are you?</Text>
                <View style={{
                  height: 50,
                  width: 300
                }}>
                  <ScrollView
                    keyboardShouldPersistTaps="handled"
                  >
                    <GooglePlacesAutocomplete
                      style={styles.searchBar}
                      placeholder='Search Places'
                      query={{
                        key: GOOGLE_API_KEY,
                        language:'en'
                      }}
                      GooglePlacesDetailsQuery={{
                        fields:'geometry'
                      }}

                      onPress={(data, details = null) => {
                        const loc = details?.geometry?.location
                        if (loc !== undefined) {

                          setLocation({
                            latitude: loc.lat, 
                            longitude: loc.lng
                          });
                        }
                      }}

                      fetchDetails={true}
                    />
                  </ScrollView>
                </View>
      
              <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: location.latitude,
                  longitude: location.longitude
                }}
                region={{
                  latitude: location.latitude,
                  longitude: location.longitude
                }}
                maxZoomLevel={14}
                style={styles.map}
              >
                <Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude
                  }}
                />
              </MapView>

              <PrimaryButton
                title="Continue"
                onPress={() =>
                    navigation.navigate('Question3')
                }
              />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: '#fff',
      height: '100%'
    },
    title: {
      fontSize: 25,
      marginTop: 10,
      marginBottom: 10
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    progress: {
      width: 330,
      height: 120,
      objectFit: 'contain',
    },
    barContainer: {
      top: -15,
      alignItems: 'center'
    },
    map: {
      height: 300,
      width: 300,
      borderRadius: 20,
      marginBottom: 10
    },

    searchBar: {
      minHeight: 50,
      minWidth: "100%",
    }
});

export default Question2;
