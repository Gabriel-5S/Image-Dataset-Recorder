import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
          headerRight: ({tintColor}) => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity onPress={logout}>
                <Icon name="sign-out" size={28} color={'#FFF'} />
              </TouchableOpacity>
            </View>
          ),
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
