import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CategoriesPage from './pages/CategoriesPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesPage from './pages/CategoriesPage';
import MealsOverviewPage from './pages/MealsOverviewPage';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesPage} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewPage} />
        </Stack.Navigator>
        {/* <CategoriesPage/> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
