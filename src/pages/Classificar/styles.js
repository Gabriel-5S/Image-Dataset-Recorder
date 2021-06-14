import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5F5',
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
  imageContainer: {
    flex: 1,
    // width: '100%',
    // height: (Dimensions.get('window').width * 3) / 4,
    height: 450,
    marginTop: 50,
    padding: 35,
    backgroundColor: '#E9F5F5',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    // height: 450,
    resizeMode: 'center',
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
    marginTop: 35,
    padding: 10,
    backgroundColor: '#E9F5F5',
    alignItems: 'center',
  },
});

export default styles;
