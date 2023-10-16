
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   paddingHorizontal: 16,
    //   paddingTop: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#333',
    },
    readMoreText: {
      fontSize: 13,
      fontWeight: '300',
      lineHeight: 22,
      color: '#000'
    },
    link: {
      color: '#00beff',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: '#00beff',
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 16,
    },
    content: {
      fontSize: 16,
      lineHeight: 24,
      color: '#444',
    },
    info: {
        paddingHorizontal: 20
    }
  });
  
  export default styles;