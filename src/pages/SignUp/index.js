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
  name: yup.string().required('Preencha o campo do nome'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Preencha o campo de senha'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Preencha o campo de e-mail'),
});

export default function SignUp({navigation}) {
  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container1}>
      <ScrollView>
        <Text style={styles.header}>Crie sua conta</Text>
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            register(values.name, values.email, values.password);
          }}>
          {props => (
            <View style={styles.container2}>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                onBlur={props.handleBlur('name')}
              />
              <Text style={styles.errorText}>
                {props.touched.name && props.errors.name}
              </Text>

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

              <TouchableOpacity
                style={styles.signUpButton}
                onPress={props.handleSubmit}>
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
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
