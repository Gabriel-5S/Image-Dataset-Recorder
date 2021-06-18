import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    marginTop: 20,
    marginLeft: 25,
    width: Dimensions.get('window').width,
    fontSize: 24,
    color: '#363636',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  button: {
    borderRadius: 20,
    width: 200,
    height: 35,
    backgroundColor: '#2F4D90',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSave: {
    borderRadius: 20,
    width: windowWidth * 0.8,
    height: windowWidth * 0.8 * 0.15,
    backgroundColor: '#2F4D90',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'center',
  },
  image: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  statusText: {
    fontSize: 15,
    color: '#2F4D90',
  },
  uploadContainer: {
    flex: 1,
    // marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
