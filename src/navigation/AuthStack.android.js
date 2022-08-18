import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login/index';
import SignUp from '../pages/SignUp/index';
import ResetPassword from '../pages/ResetPassword/index';

const Stack = createStackNavigator();

const AuthStack: () => React$Node = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 24},
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: 'SignUp',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 24},
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerTitle: 'Forgot password?',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 24},
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
