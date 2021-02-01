import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  RegisterScreen,
  LoginScreen,
  PinScreen,
  ActiveScreen,
  PinSuccessScreen,
  ForgotScreen,
  ResetPassScreen,
  HomeScreen,
} from '../screens';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => {
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
    </Stack.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};
