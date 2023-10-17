import React from 'react';
import {View, Text, Image} from 'react-native';

import {Article} from '../../interfaces';
import styles from './styles';

interface Props {
  article: Article;
}

const FavouriteArticle = ({article}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{article.title}</Text>
      <Image
        source={{
          uri: article.urlToImage ?? 'https://picsum.photos/800',
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      />
    </View>
  );
};

export default FavouriteArticle;
