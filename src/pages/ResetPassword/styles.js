import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  header: {
    marginTop: 80,
    marginHorizontal: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  container2: {
    flex: 1,
    marginTop: 15,
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
  logo: {
    width: 150,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 60,
  },
});

export default styles;
