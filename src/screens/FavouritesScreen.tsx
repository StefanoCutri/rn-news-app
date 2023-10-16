import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../features/store';
import {NewsArticle} from '../components/NewsArticle/NewsArticle';
import FavouriteArticle from '../components/FavouriteArticle';

const FavouritesScreen = () => {
  const {favourites} = useSelector((state: RootState) => state.favourites);
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginVertical: 12,
          paddingLeft: 30,
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
          }}>
          Favourites News
        </Text>
      </View>
      <FlatList
        data={favourites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <FavouriteArticle article={item} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: 'gray',
              height: 0.5,
            }}
          />
        )}
      />
    </>
  );
};

export default FavouritesScreen;
