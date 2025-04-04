import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, useInterstitialAd } from 'react-native-google-mobile-ads';

const adUnitId = TestIds.BANNER;


export default function Homescreen() {

    const { isLoaded, load, show } = useInterstitialAd(TestIds.INTERSTITIAL, {
        requestNonPersonalizedAdsOnly: true,
      });
    
      // Load the ad when the component mounts
      useEffect(() => {
        load();
      }, [load]);
    
      const handleAdPress = () => {
        if (isLoaded) {
          show(); // Show the ad
        } else {
          console.log('Ad is not loaded yet');
          load(); // Try loading again if not ready
        }
      };    

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity          onPress={handleAdPress}
 style={{ backgroundColor: 'blue', padding: 10 }}>
                <Text style={{ color: 'white' }}>Click on button</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.FULL_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({})