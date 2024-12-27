import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
// import CategoriesPage from './pages/CategoriesPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesPage from './pages/CategoriesPage';
import MealsOverviewPage from './pages/MealsOverviewPage';
import MealsDetails from './pages/MealsDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourites from './pages/Favourites';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351410' },
    headerTintColor: 'white',
    sceneStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1'
  }}>
    <Drawer.Screen name='Categories' component={CategoriesPage} options={{ title: 'All Categories', drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='list' /> }} />
    <Drawer.Screen name='Favourites' component={Favourites} options={{ title: 'Favourites', drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='star' /> }} />
  </Drawer.Navigator>
}


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
          <Stack.Screen name='Drawer' component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name='MealsCategories' component={CategoriesPage} options={{ title: 'All Categories' }} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewPage}
          // options={({route,navigation})=>{
          //   const catId=route.params.categoryId;
          //   return {
          //     title:catId,
          //   };
          // }}
          />
          <Stack.Screen name='MealsDetails' component={MealsDetails} options={{ title: 'About the meal' }}
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
