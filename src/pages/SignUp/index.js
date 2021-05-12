import React, {useState, useContext} from 'react';

import 'react-native-gesture-handler';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';

export default function SignUp({navigation}) {
  const {name, setName, email, setEmail, password, setPassword, register} =
    useContext(AuthContext);

  return (
    <View style={styles.container1}>
      <ScrollView>
        <Text style={styles.header}>Crie sua conta</Text>
        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={name => setName(name)}
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={email => setEmail(email)}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={password => setPassword(password)}
          />

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => register(email, password)}>
            <Text style={styles.signUpButtonText}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backToLoginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.backToLoginButtonText}>
              Já possui uma conta? Fazer login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
