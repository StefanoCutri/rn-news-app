import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import styles from './styles';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <MagnifyingGlassIcon color="black" size={18} />
      <TextInput
        placeholder="Search"
        keyboardType="default"
        placeholderTextColor="#000"
        style={{
          width: '80%',
          color: '#000'
        }}
      />
    </View>
  );
};

export default Navbar;
