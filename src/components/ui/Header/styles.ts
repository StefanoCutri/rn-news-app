import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  favLink: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: width - 320,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
