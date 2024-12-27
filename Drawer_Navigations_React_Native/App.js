import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './components/WelcomeScreen';
import UserScreen from './components/UserScreen';
import { Ionicons } from '@expo/vector-icons'

// Bottom Tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        {/* <Drawer.Navigator initialRouteName='User' screenOptions={{
        drawerActiveBackgroundColor: '#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
        // drawerStyle: { backgroundColor: '#ccc' },
        headerStyle: { backgroundColor: "#3c0a6b" },
        headerTintColor: 'white',
      }}>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
          drawerLabel: 'Welcome Screen',
          drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }} />
        <Drawer.Screen name='User' component={UserScreen}
          options={{

            drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
          }}
        />
      </Drawer.Navigator> */}
        <BottomTab.Navigator screenOptions={{
          tabBarActiveBackgroundColor: '#f0e1ff',
          tabBarActiveTintColor: '#3c0a6b',
          // drawerStyle: { backgroundColor: '#ccc' },
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: 'white',
        }}>
          <BottomTab.Screen name='User' component={UserScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
          }} />
          <BottomTab.Screen name='Welcome' component={WelcomeScreen} options={{

            tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
          }} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}