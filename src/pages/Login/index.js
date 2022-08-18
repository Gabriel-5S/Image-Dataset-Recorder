import React, {useState, useContext} from 'react';

import 'react-native-gesture-handler';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import {Formik} from 'formik';
import * as yup from 'yup';
import firestore from '@react-native-firebase/firestore';

const reviewSchema = yup.object({
  password: yup
    .string()
    .min(6, 'The password must have at least 6 characters')
    .required('Enter a password'),
  email: yup.string().email('Enter a valid email').required('Enter an email'),
});

export default function Login({navigation}) {
  const {user, login} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container1}>
      <ScrollView>
        <Text style={styles.header}>Welcome!</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={reviewSchema}
          onSubmit={async (values, actions) => {
            setIsLoading(true);
            actions.resetForm();
            await login(values.email, values.password);
          }}>
          {props => (
            <View style={styles.container2}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
              <Text style={styles.errorText}>
                {props.touched.email && props.errors.email}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
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
                  <Text style={styles.signupButtonText}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.forgotButton}
                  onPress={() => navigation.navigate('ResetPassword')}>
                  <Text style={styles.forgotButtonText}>Forgot password?</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={props.handleSubmit}>
                {isLoading ? (
                  <>
                    <ActivityIndicator size={35} color="#FFF" />
                  </>
                ) : (
                  <>
                    <Text style={styles.loginButtonText}>Log in</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
