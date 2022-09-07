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
import firestore from '@react-native-firebase/firestore';

const reviewSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Enter an email'),
});

export default function Login({navigation}) {
  const {resetPassword} = useContext(AuthContext);

  return (
    <View style={styles.container1}>
      <ScrollView>
        <Text style={styles.header}>
          Enter your email, and we will send you a link to reset your password.
        </Text>
        <Formik
          initialValues={{email: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            resetPassword(values.email);
          }}>
          {props => (
            <View style={styles.container2}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
              <Text style={styles.errorText}>
                {props.touched.email && props.errors.email}
              </Text>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={props.handleSubmit}>
                <Text style={styles.loginButtonText}>Send email</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
