import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import NewsService from '../data/api/NewsService';
import {getNews, setSearchResults} from '../features/newsSlice';
import {RootState} from '../features/store';
import {NewsArticle} from '../components/NewsArticle';
import Navbar from '../components/ui/Navbar';

const ITEMS_PER_PAGE = 10;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {news, filteredNews, isLoading} = useSelector(
    (state: RootState) => state.news,
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);

  // Function to get news
  const fetchData = async () => {
    try {
      const fetchedNews = await NewsService.getNews({
        page: currentPage,
        itemsPerPage: ITEMS_PER_PAGE,
      });
      dispatch(getNews([...news, ...fetchedNews]));
      setIsEndReached(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setIsEndReached(false);
    }
  };

  // Get news when app is first loaded
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  // useEffect to filter news by query
  useEffect(() => {
    const delay = setTimeout(() => {
      const results = news.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      dispatch(setSearchResults(results));
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, dispatch, news]);

  // Fetch news when bottom is reached to create pagination
  const handleEndReached = () => {
    if (!isLoading && !isEndReached) {
      setIsEndReached(true);
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Navbar onSearch={() => {}} setSearchTerm={setSearchTerm} />
      {isLoading && currentPage === 1 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <FlatList
          data={filteredNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <NewsArticle article={item} />}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
