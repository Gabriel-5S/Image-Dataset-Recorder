import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  header: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 28,
    fontWeight: 'bold',
  },
  container2: {
    flex: 1,
    marginTop: 0,
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
  },
  errorText: {
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#f10303',
  },
  signUpButton: {
    borderRadius: 20,
    width: 200,
    height: 75,
    marginTop: 20,
    backgroundColor: '#2F4D90',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  backToLoginButton: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  backToLoginButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    fontFamily: 'Lato-Regular',
    justifyContent: 'center',
  },
});

export default styles;
