import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
  },

  author: {
    fontSize: 14,
    color: 'blue',
    margin: 10,
    textDecorationLine: 'underline'
  },

  title: {
    fontSize: 18,
    margin: 10,
    maxHeight: 100,
    color: 'black'
  },

  text: {
    fontSize: 14,
    color: '#888',
    margin: 10,
  },

  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
