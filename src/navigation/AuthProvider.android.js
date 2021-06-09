import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // name,
        // setName,
        // email,
        // setEmail,
        // password,
        // setPassword,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (name, email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    email: email,
                    name: name,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
                console.log(error.code);
                if (error.code === 'auth/email-already-in-use') {
                  Alert.alert(
                    'Ops!',
                    'Esse email já está sendo usado. Por favor, utilize outro email.',
                    [{text: 'OK', onPress: () => {}}],
                  );
                } else if (error.code === 'auth/invalid-email') {
                  Alert.alert(
                    'Ops!',
                    'Esse email é inválido! Por favor, tente novamente.',
                    [{text: 'OK', onPress: () => {}}],
                  );
                } else {
                  Alert.alert(
                    'Ops!',
                    'Ocorreu um erro! Por favor, tente novamente',
                    [{text: 'OK', onPress: () => {}}],
                  );
                }
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
