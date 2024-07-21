// src/navigation/AppNavigator.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

import Home from '../screens/Home/HomeScreen';
import Alarm_Host from '../screens/Alarm/AlarmHostScreen';
import Alarm_Hero from '../screens/Alarm/AlarmHeroScreen';
import Write_Host from '../screens/Write/WriteHostScreen';
import Write_Hero from '../screens/Write/WriteHeroScreen';
import My from '../screens/MY/myscreen';

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
        <Stack.Screen name="Alarm_Hero" component={Alarm_Hero} />
        <Stack.Screen name="Alarm_Host" component={Alarm_Host} />
        <Stack.Screen name="My" component={My} />
        <Stack.Screen
          name="Write_Host"
          component={Write_Host}
          options={{headerShown: false, tabBarStyle: {display: 'none'}}}
        />
        <Stack.Screen
          name="Write_Hero"
          component={Write_Hero}
          options={{headerShown: false, tabBarStyle: {display: 'none'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
