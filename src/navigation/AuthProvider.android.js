import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            if (error.code === 'auth/user-not-found') {
              Alert.alert('Ops!', 'There is no user matching this email.', [
                {text: 'OK', onPress: () => {}},
              ]);
            } else if (error.code === 'auth/wrong-password') {
              Alert.alert('Ops!', 'Wrong password!', [
                {text: 'OK', onPress: () => {}},
              ]);
            } else {
              Alert.alert('Ops!', 'An error has occurred! Please try again', [
                {text: 'OK', onPress: () => {}},
              ]);
            }
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
                if (error.code === 'auth/email-already-in-use') {
                  Alert.alert(
                    'Ops!',
                    'This email is already in use. Please use another email.',
                    [{text: 'OK', onPress: () => {}}],
                  );
                } else if (error.code === 'auth/invalid-email') {
                  Alert.alert(
                    'Ops!',
                    'This email is invalid! Please try again.',
                    [{text: 'OK', onPress: () => {}}],
                  );
                } else {
                  Alert.alert(
                    'Ops!',
                    'An error has occurred! Please try again',
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
        resetPassword: async email => {
          try {
            await auth().sendPasswordResetEmail(email);
          } catch (error) {
            if (error.code === 'auth/user-not-found') {
              Alert.alert('Ops!', 'There is no user matching this email.', [
                {text: 'OK', onPress: () => {}},
              ]);
            } else if (error.code === 'auth/invalid-email') {
              Alert.alert('Ops!', 'This email is invalid! Please try again.', [
                {text: 'OK', onPress: () => {}},
              ]);
            } else {
              Alert.alert('Ops!', 'An error has occurred! Please try again', [
                {text: 'OK', onPress: () => {}},
              ]);
            }
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
