import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TopupScreen from '../screens/TopupScreen';

import {
  RegisterScreen,
  LoginScreen,
  PinScreen,
  ActiveScreen,
  PinSuccessScreen,
  ForgotScreen,
  ResetPassScreen,
  HomeScreen,
  TopupScreen
} from '../screens';

const Stack = createStackNavigator();

const Navigation  = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Active"
        component={ActiveScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pin"
        component={PinScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PinSuccess"
        component={PinSuccessScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reset"
        component={ResetPassScreen}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="Topup"
          component={TopupScreen}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: '#6379F4'},
          }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

