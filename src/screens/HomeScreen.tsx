import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getNews, setSearchResults} from '../features/newsSlice';
import {RootState} from '../features/store';
import NewsService from '../data/api/NewsService';
import {NewsArticle} from '../components/NewsArticle/NewsArticle';
import Navbar from '../components/ui/Navbar/Navbar';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {news, filteredNews} = useSelector((state: RootState) => state.news);

  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const fetchedNews = await NewsService.getNews();
      dispatch(getNews(fetchedNews));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Debounce the search term with a delay of 500 milliseconds
    const delay = setTimeout(() => {
      // Filter news based on the search term
      const results = news.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      console.log(results);

      dispatch(setSearchResults(results));
    }, 500);

    // Clear the timeout on each keystroke to reset the delay
    return () => clearTimeout(delay);
  }, [searchTerm, dispatch, news]);

  return (
    <View style={{flex: 1}}>
      <Navbar onSearch={() => {}} setSearchTerm={setSearchTerm} />
      <FlatList
        data={filteredNews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NewsArticle article={item} />}
      />
    </View>
  );
};

export default HomeScreen;
