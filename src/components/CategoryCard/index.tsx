import React, { useCallback } from 'react';
import {Linking, Text, View} from 'react-native';

import {FilteredSource} from '../../interfaces';
import styles from './styles';

const CategoryCard: React.FC<{article: FilteredSource}> = ({article}) => {
    // Navigate to article website
    const handleURLPress = useCallback(() => {
        Linking.openURL(article?.url);
      }, [article]);
    
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{article.description}</Text>
    <View style={{marginTop: 10}}>
          <Text style={[styles.readMoreText]} numberOfLines={2}>
            Read more at:{' '}
            <Text style={styles.link} onPress={handleURLPress}>
              {article?.url}
            </Text>
          </Text>
        </View>
  </View>
  );
};

export default CategoryCard;
