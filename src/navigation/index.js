import React from 'react';
import {StyleSheet} from 'react-native';
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
  TopUpScreen,
  ContactList,
  Splash
} from '../screens';

const Stack = createStackNavigator();

const Navigation = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
          initialRouteName="Splash"
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
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
      <Stack.Screen name="Reset" component={ResetPassScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Topup"
        component={TopUpScreen}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: '#6379F4'},
        }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactList}
        options={{
          headerShown: true,
          title: 'Find Receiver',
          headerStyle: {backgroundColor: '#6379F4', elevation: 0},
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
