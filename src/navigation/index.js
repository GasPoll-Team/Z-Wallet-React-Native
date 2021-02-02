import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TopupScreen from '../screens/TopupScreen';
import TransferScreen from '../screens/TransferScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Topup"
        component={TopupScreen}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: '#6379F4'},
        }}
        screenOp
      />
      <Stack.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: '#6379F4'},
        }}
        screenOp
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
