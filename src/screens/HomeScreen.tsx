import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsService from '../data/api/NewsService';
import {getNews} from '../context/newsSlice';
import {RootState} from '../context/store';
import {NewsArticle} from '../components/NewsArticle/NewsArticle';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {news} = useSelector((state: RootState) => state.news);

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

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={news}
        keyExtractor={item => item.url}
        renderItem={({item}) => <NewsArticle article={item} />}
      />
    </View>
  );
};

export default HomeScreen;
