import React, {useCallback, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {ArrowLeftCircleIcon, HeartIcon} from 'react-native-heroicons/outline';
import {HeartIcon as HeartIconSolid} from 'react-native-heroicons/solid';

import {RootState} from '../../features/store';
import {toggleFavourite} from '../../features/favourtiesSlice';
import {Article} from '../../interfaces';
import styles from './styles';

interface RouteParams {
  article: Article;
}

const ArticleDetailsScreen: React.FC = () => {
  const {favourites} = useSelector((state: RootState) => state.favourites);
  const navigation = useNavigation();
  const route = useRoute();
  const {article} = route.params as RouteParams;
  const dispatch = useDispatch();
  const isFavorite = favourites.some(
    favArticle => favArticle.source.name === article.source.name,
  );

  const handleURLPress = useCallback(() => {
    Linking.openURL(article?.url);
  }, [article]);

  const handleToggle = () => {
    dispatch(toggleFavourite(article));
  };

  useEffect(() => {
    console.log({isFavorite});
  }, [favourites]);

  return (
    <ScrollView style={styles.container}>
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
        <ArrowLeftCircleIcon color="black" size={45} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
        <View style={{marginTop: 10}}>
          <Text style={[styles.readMoreText]} numberOfLines={2}>
            Read more at:{' '}
            <Text style={styles.link} onPress={handleURLPress}>
              {article?.url}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addToFavourites}
          activeOpacity={0.7}
          onPress={handleToggle}>
          {isFavorite ? (
            <>
              <HeartIconSolid color="red" size={30} />
              <Text style={{color: 'black', marginLeft: 10}}>
                Remove from favourites{' '}
              </Text>
            </>
          ) : (
            <>
              <HeartIcon color="black" size={30} />
              <Text style={{color: 'black', marginLeft: 10}}>
                Add to Favourites{' '}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ArticleDetailsScreen;
