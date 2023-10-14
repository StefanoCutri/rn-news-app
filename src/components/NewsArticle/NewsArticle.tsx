import moment from 'moment';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Article} from '../../interfaces';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';

type RootStackParamList = {
  Article: {} | undefined;
};

export const NewsArticle: React.FC<{article: Article}> = ({article}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => navigation.navigate('Article')}>
      <Image
        source={{
          uri: article?.urlToImage ?? 'https://picsum.photos/800',
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      />
      <LinearGradient
        colors={['#0000', '#000A', '#000']}
        style={styles.titleContainer}>
        <Text style={styles.text}>{article?.title}</Text>
        <Text style={styles.timestamp}>
          {moment(article?.publishedAt).format('DD/MM/YY')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
