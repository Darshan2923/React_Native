import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView>
      <StatusBar style='light' />
      <View><Text className='text-green-700'>Hello world</Text></View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Homescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}