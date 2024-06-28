// src/navigation/AppNavigator.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

import Home from '../screens/Home/homescreen';
import Alarm from '../screens/Alarm/alarmscreen';
import My from '../screens/MY/myscreen';
import Write from '../screens/Write/writescreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alarm" component={Alarm} />
        <Stack.Screen name="My" component={My} />
        <Stack.Screen name="Write" component={Write} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
