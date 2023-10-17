import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#000',
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
    paddingHorizontal: 20,
  },
  addToFavourites: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginTop: 35,
    marginBottom: 40,
  },
});

export default styles;
