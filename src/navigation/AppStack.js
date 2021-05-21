import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home/index';
import Classificar from '../pages/Classificar/index';

import {AuthContext} from './AuthProvider';

const Stack = createStackNavigator();

const AppStack: () => React$Node = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 24},
        }}
      />
      <Stack.Screen
        name="Classificar"
        component={Classificar}
        options={{
          headerTitle: 'Classificar',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 24},
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
