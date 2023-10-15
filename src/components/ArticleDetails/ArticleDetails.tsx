// ArticleDetailsScreen.tsx

import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import {Article} from '../../interfaces';

interface RouteParams {
  article: Article;
}

const ArticleDetailsScreen: React.FC = () => {
  const route = useRoute();
  const {article} = route.params as RouteParams;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: article.urlToImage ?? 'https://picsum.photos/800',
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </View>
  );
};

export default ArticleDetailsScreen;
