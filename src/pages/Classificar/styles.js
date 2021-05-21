import {Dimensions, StyleSheet} from 'react-native';

const centralButton = {
  width: 160,
  height: 100,
  borderRadius: 20,
  position: 'absolute',
  left: '50%',
  marginLeft: -80,
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#E9F5F5',
    alignItems: 'center',
  },
  imageContainer: {
    width: '90%',
    height: (Dimensions.get('window').width * 3) / 4,
    backgroundColor: '#E9F5F5',
    marginTop: 20,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'center',
  },
  header: {
    margin: 30,
    marginBottom: 100,
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default styles;
