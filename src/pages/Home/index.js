import 'react-native-gesture-handler';
import React, {useContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import {Alert, View, Image, Text, TouchableOpacity} from 'react-native';

import {launchCamera} from 'react-native-image-picker';

export default function Home({navigation}) {
  const {user, logout} = useContext(AuthContext);

  const [name, setName] = useState('');

  const fetchUser = async () => {
    try {
      const subscriber = firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
          if (!documentSnapshot.exists) {
            console.log('No such document!');
          } else {
            const {name} = documentSnapshot.data();
            setName(name);
          }
        });
      return () => subscriber();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  });

  const pickImage = () => {
    launchCamera(
      {
        title: 'Escolha a imagem',
      },
      res => {
        if (!res.didCancel) {
          console.warn(navigation != null);
        }
      },
    );
  };

  return (
    <View style={styles.container1}>
      <View style={styles.containerText}>
        <Text style={styles.header}>Olá, {name}!</Text>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Tirar foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
