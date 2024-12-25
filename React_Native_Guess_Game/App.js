import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import StartGameScreen from './pages/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './pages/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  const pickedNumber = (pickNumber) => {
    setUserNumber(pickNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumber} />;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}>
        {/* <StartGameScreen /> */}
        {screen}

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backgroundImage: {
    opacity: 0.15,
  }
});
