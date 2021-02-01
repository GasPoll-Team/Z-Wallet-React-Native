import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RegisterScreen} from '../screens';
import {HomeScreen} from '../screens';
import {ContactList} from '../screens';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
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

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};
