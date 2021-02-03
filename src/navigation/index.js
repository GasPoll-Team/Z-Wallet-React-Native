import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  RegisterScreen,
  LoginScreen,
  PinScreen,
  ActiveScreen,
  PinSuccessScreen,
  ForgotScreen,
  OtpScreen,
  ResetPassScreen,
  HomeScreen,
  TopUpScreen,
  ContactList,
  Splash,
  ProfileScreen,
  PersonalInformation,
  ChangePassword,
  ChangePIN,
  NewPIN,
  AddNumber,
  ManageNumber,
  ConfirmScreen,
  Notification
} from '../screens';

const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="Splash"
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Active"
        component={ActiveScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pin"
        component={PinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PinSuccess"
        component={PinSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Reset" component={ResetPassScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Topup"
        component={TopUpScreen}
        options={{
          headerShown: true,
          title: 'Topup Balance',
          headerStyle: { backgroundColor: '#6379F4', elevation: 0 },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactList}
        options={{
          headerShown: true,
          title: 'Find Receiver',
          headerStyle: { backgroundColor: '#6379F4', elevation: 0 },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Personal"
        component={PersonalInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Change"
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePIN"
        component={ChangePIN}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPIN"
        component={NewPIN}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNumber"
        component={AddNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Manage"
        component={ManageNumber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          title: 'Notification',
          headerStyle: { backgroundColor: '#6379F4', elevation: 0 },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={ConfirmScreen}
        options={{
          headerShown: true,
          title: 'Confirmation',
          headerStyle: { backgroundColor: '#6379F4', elevation: 0 },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;