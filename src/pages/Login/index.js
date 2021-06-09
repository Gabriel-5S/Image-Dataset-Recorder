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
import {Formik} from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Preencha o campo de senha'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Preencha o campo de e-mail'),
});

export default function Login({navigation}) {
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container1}>
      <ScrollView>
        <Text style={styles.header}>Bem-vindo!</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            login(values.email, values.password);
          }}>
          {props => (
            <View style={styles.container2}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
              <Text style={styles.errorText}>
                {props.touched.email && props.errors.email}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
              />
              <Text style={styles.errorText}>
                {props.touched.password && props.errors.password}
              </Text>

              <View style={styles.buttonTextContainer}>
                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signupButtonText}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.forgotButton}
                  onPress={() => {}}>
                  <Text style={styles.forgotButtonText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={props.handleSubmit}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
