import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login/index';
import SignUp from '../pages/SignUp/index';

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
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
