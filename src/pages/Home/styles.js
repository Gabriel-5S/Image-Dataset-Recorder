import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    justifyContent: 'flex-start',
    padding: 0,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 70,
    marginLeft: 25,
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    color: '#363636',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
  subTitle: {
    fontSize: 18,
    color: '#858282',
    justifyContent: 'flex-end',
  },
  containerMenuExt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 30,
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: '#2F4D90',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    margin: 15,
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
