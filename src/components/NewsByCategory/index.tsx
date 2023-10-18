import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '../../features/store';
import {NewsArticle} from '../NewsArticle';
import CategoryCard from '../CategoryCard';

interface Props {
  searchTerm: string;
  handleEndReached: () => void;
}

const NewsByCategory = ({searchTerm, handleEndReached}: Props) => {
  const {news, newsByCategory, isLoading} = useSelector(
    (state: RootState) => state.news,
  );

  // If user hasn't typed anything, show previous results
  if (searchTerm === '') {
    return (
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NewsArticle article={item} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
    );
  }

  // Else, you search results
  return (
    <View style={{paddingBottom: 100}}>
      {isLoading ? (
        <View style={{flex: 1}}>
          <ActivityIndicator size={40} color="#000" />
        </View>
      ) : (
        <FlatList
          data={newsByCategory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CategoryCard article={item} />}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: 'gray',
                height: 0.5,
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default NewsByCategory;
