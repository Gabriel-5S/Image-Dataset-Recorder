import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: 250,
    // height: (Dimensions.get('window').width * 3) / 4,
    height: 250,
    marginTop: 50,
    // padding: 15,
    backgroundColor: '#E9F5F5',
    justifyContent: 'center',
  },
  image: {
    // width: Dimensions.get('window').width,
    width: 250,
    // height: (Dimensions.get('window').width * 3) / 4,
    height: 250,
    borderRadius: 15,
    resizeMode: 'cover',
  },
});

export default styles;
