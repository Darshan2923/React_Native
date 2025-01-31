import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';  // Import useFonts hook
import * as SplashScreen from 'expo-splash-screen';  // Import the SplashScreen API
import Home from './screens/Home';
import Error from './screens/Error';
import Welcome from './components/auth/Onboarding';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    "Jakarta-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("./assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("./assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("./assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  // Once fonts are loaded, hide the splash screen
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();  // Hide the splash screen when fonts are ready
    }
  }, [fontsLoaded]);

  // While fonts are loading, show splash image
  if (!fontsLoaded) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require('./assets/images/_splash.png')} style={styles.splashImage} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name='not-found' component={Error} />
        <Stack.Screen name='signin' component={Signin} />
        <Stack.Screen name='signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
