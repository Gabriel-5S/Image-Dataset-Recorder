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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 330,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonModalView: {
    marginTop: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonModal: {
    minHeight: 60,
    minWidth: 80,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    justifyContent: 'center',
  },
  buttonOk: {
    backgroundColor: '#2F4D90',
  },
  buttonCancel: {
    backgroundColor: '#D10E0E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
  input: {
    fontSize: 16,
    height: 65,
    backgroundColor: '#E9F5F5',
    alignSelf: 'stretch',
    borderColor: '#21376F',
    borderRadius: 15,
    borderWidth: 2,
    paddingHorizontal: 20,
    marginBottom: 5,
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
