// src/navigation/BottomTabNavigator.tsx

import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/homescreen';
import Alarm from '../screens/Alarm/alarmscreen';
import My from '../screens/MY/myscreen';
import Write from '../screens/Write/writescreen';

const homeIcon = require('../img/home.png');
const alarmIcon = require('../img/alarm.png');
const myIcon = require('../img/my.png');
const writeIcon = require('../img/write.png');

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Alarm') {
            iconSource = alarmIcon;
          } else if (route.name === 'My') {
            iconSource = myIcon;
          } else if (route.name === 'Write') {
            iconSource = writeIcon;
          }

          return (
            <Image
              source={iconSource}
              style={{width: size, height: size, tintColor: color}}
            />
          );
        },
        tabBarActiveTintColor: '#FE4F18',
        tabBarInactiveTintColor: 'gray',
        headerTitle: '우리집 히어로즈',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'black',
          fontSize: 20,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Write" component={Write} />
      <Tab.Screen name="Alarm" component={Alarm} />
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
