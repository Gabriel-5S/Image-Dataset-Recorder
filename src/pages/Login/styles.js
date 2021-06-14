import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  header: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 28,
    fontWeight: 'bold',
  },
  container2: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    fontSize: 16,
    height: 65,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  loginButton: {
    borderRadius: 20,
    width: 200,
    height: 75,
    backgroundColor: '#2F4D90',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 55,
    alignSelf: 'stretch',
  },
  signupButton: {
    marginRight: 35,
    marginVertical: 5,
  },
  forgotButton: {
    marginLeft: 35,
    marginVertical: 5,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Lato-Regular',
    justifyContent: 'center',
  },
  forgotButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Lato-Regular',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 60,
  },
});

export default styles;
