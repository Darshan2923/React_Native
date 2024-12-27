import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
// import CategoriesPage from './pages/CategoriesPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesPage from './pages/CategoriesPage';
import MealsOverviewPage from './pages/MealsOverviewPage';
import MealsDetails from './pages/MealsDetails';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351410' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}>
          <Stack.Screen name='MealsCategories' component={CategoriesPage} options={{ title: 'All Categories' }} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewPage}
          // options={({route,navigation})=>{
          //   const catId=route.params.categoryId;
          //   return {
          //     title:catId,
          //   };
          // }}
          />
          <Stack.Screen name='MealsDetails' component={MealsDetails}
          // options={{
          //   headerRight:()=>{
          //     return <Button title='Tap me' onPress={()=>{console.log('Pressed')}}/>
          //   }
          // }}
          />
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
