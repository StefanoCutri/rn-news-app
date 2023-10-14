import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsService from '../data/api/NewsService';
import {getNews} from '../context/newsSlice';
import {RootState} from '../context/store';
import {NewsArticle} from '../components/NewsArticle/NewsArticle';
import Navbar from '../components/ui/Navbar/Navbar';

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
      <Navbar/>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NewsArticle article={item} />}
      />
    </View>
  );
};

export default HomeScreen;
