import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';

import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/router';
import { Text, View } from 'react-native';
export default function App() {
 let [fontsLoaded] = useFonts({
  Anton_400Regular,
  
});


const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
    await SplashScreen.hideAsync();
  }
}, [fontsLoaded]);

if (!fontsLoaded) {
  return null;
}


  return (
  
  
  <View style={{flex:1}} onLayout={onLayoutRootView}>

<StatusBar style="light" backgroundColor="#000" translucent={false}/> 
<Routes/>   
</View>

           
  );
}
