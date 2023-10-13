import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsService from '../data/api/NewsService';
import {getNews} from '../context/newsSlice';
import {RootState} from '../context/store';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {news} = useSelector((state: RootState) => state.news);

  const fetchData = async () => {
    try {
      const fetchedNews = await NewsService.getNews();
      dispatch(getNews(fetchedNews));
      console.log(fetchedNews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
