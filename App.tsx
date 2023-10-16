import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/features/store';
import HomeScreen from './src/screens/HomeScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import Header from './src/components/ui/Header/Header';
import FavouritesScreen from './src/screens/FavouritesScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{ headerTitle: (props) => <Header /> }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Article" component={ArticleScreen} />
          <Stack.Screen name="Favourites" component={FavouritesScreen} options={{
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
