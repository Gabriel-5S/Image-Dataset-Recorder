import 'react-native-gesture-handler';
import React, {useContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {launchCamera} from 'react-native-image-picker';
import Registers from './registers';

export default function Home({navigation}) {
  const {user, logout} = useContext(AuthContext);

  const [name, setName] = useState('');

  const fetchUser = async () => {
    try {
      const subscriber = firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
          try {
            if (!documentSnapshot.exists) {
              console.log('No such document!');
            } else {
              const {name} = documentSnapshot.data();
              setName(name);
            }
          } catch (e) {
            console.log(e);
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
        saveToPhotos: false,
      },
      res => {
        if (!res.didCancel) {
          navigation.navigate('Classificar', {
            image: {
              uri: res.uri,
              fileName: res.fileName,
              height: res.height,
              width: res.width,
            },
            name: name,
          });
        }
      },
    );
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container1}>
        <View style={styles.containerText}>
          <Text style={styles.header}>Olá, {name}!</Text>
        </View>
        <Registers />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Icon name="camera" size={25} color={'#FFFFFF'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
