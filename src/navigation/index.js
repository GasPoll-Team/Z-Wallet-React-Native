import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TopupScreen from '../screens/TopupScreen';

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
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
