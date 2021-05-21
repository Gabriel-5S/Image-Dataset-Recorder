import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#E9F5F5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    marginTop: 20,
    width: Dimensions.get('window').width,
    fontSize: 24,
    color: '#363636',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: '90%',
    height: (Dimensions.get('window').width * 3) / 4,
    backgroundColor: '#E9F5F5',
    marginTop: 20,
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'center',
  },
  button: {
    borderRadius: 20,
    width: 200,
    height: 40,
    backgroundColor: '#2F4D90',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    borderRadius: 20,
    width: 300,
    height: 50,
    backgroundColor: '#2F4D90',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: '#E9F5F5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
