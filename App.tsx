import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './src/Homescreen';
import initializeAdMob from 'react-native-google-mobile-ads';
import { useAppOpenAd, TestIds } from 'react-native-google-mobile-ads';


const Stack = createNativeStackNavigator();

export default function App() {
  const { isLoaded, isClosed, load, show } = useAppOpenAd(TestIds.APP_OPEN, {
    requestNonPersonalizedAdsOnly: true,
  });

  useEffect(() => {
    // Load ad when component mounts
    load();
  }, []);

  useEffect(() => {
    // Show ad when it's loaded
    if (isLoaded) {
      show();
    }
  }, [isLoaded]);

  useEffect(() => {
    // Reload ad when ad is closed
    if (isClosed) {
      load();
    }
  }, [isClosed]);
  // useEffect(() => {
  //   initializeAdMob();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'homescreen'} screenOptions={{ headerShown: false, }}>
        <Stack.Screen name={'homescreen'} component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})