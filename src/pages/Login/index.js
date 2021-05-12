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

export default function Login({navigation}) {
  const {email, setEmail, password, setPassword, login} =
    useContext(AuthContext);

  return (
    <View style={styles.container1}>
      <ScrollView>
        <Text style={styles.header}>Bem-vindo!</Text>
        <View style={styles.container2}>
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

          <View style={styles.buttonTextContainer}>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signupButtonText}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
              <Text style={styles.forgotButtonText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => login(email, password)}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
