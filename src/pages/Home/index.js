import 'react-native-gesture-handler';
import React, {useContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import {Alert, View, Image, Text, TouchableOpacity} from 'react-native';

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

  return (
    <View style={styles.container1}>
      <View style={styles.containerText}>
        <Text style={styles.header}>Olá, {name}!</Text>
        <Text style={styles.subTitle}>O que deseja fazer?</Text>
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
