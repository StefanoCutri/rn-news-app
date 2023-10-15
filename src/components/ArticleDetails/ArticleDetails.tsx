import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ArrowLeftCircleIcon} from 'react-native-heroicons/outline';
import {Article} from '../../interfaces';
import styles from './styles';

interface RouteParams {
  article: Article;
}

const ArticleDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
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
      <TouchableOpacity
        activeOpacity={0.4}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
        }}
        onPress={() => navigation.goBack()}>
        <ArrowLeftCircleIcon color="white" size={45} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </View>
    </View>
  );
};

export default ArticleDetailsScreen;