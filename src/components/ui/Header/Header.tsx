import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
type RootStackParamList = {
  Favourites: {} | undefined;
};
const Header = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <TouchableOpacity
        style={styles.favLink}
        onPress={() => navigation.navigate('Favourites')}>
        <Text style={styles.text}>Favourites</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
