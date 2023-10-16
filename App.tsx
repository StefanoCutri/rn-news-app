import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/features/store';
import HomeScreen from './src/screens/HomeScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, HeartIcon} from 'react-native-heroicons/outline';
import ArticleScreen from './src/screens/ArticleScreen';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Article" component={ArticleScreen} />
  </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{
              tabBarActiveTintColor: '#000',
              tabBarIcon: () => <HomeIcon color="#363062" />,
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={FavouritesScreen}
            options={{
              tabBarActiveTintColor: '#000',
              tabBarIcon: () => <HeartIcon color="#363062" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
