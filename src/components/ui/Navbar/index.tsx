import React from 'react';
import {View, TextInput} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

import styles from './styles';

interface Props {
  onSearch: () => void;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<Props> = ({onSearch, setSearchTerm}) => {
  return (
    <View style={styles.container}>
      <MagnifyingGlassIcon color="black" size={18} />
      <TextInput
        placeholder="Search by category"
        keyboardType="default"
        placeholderTextColor="#000"
        style={{
          width: '80%',
          color: '#000',
        }}
        onChangeText={text => setSearchTerm(text)}
        onSubmitEditing={onSearch}
      />
    </View>
  );
};

export default Navbar;
