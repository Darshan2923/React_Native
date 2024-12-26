import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './pages/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { useState } from 'react';
import GameScreen from './pages/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './pages/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumber = (pickNumber) => {
    setUserNumber(pickNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumber} />;

  if (userNumber) {
    screen = <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.safeArea}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  safeArea: {
    paddingTop: 50,
    flex: 1,
  },
});
