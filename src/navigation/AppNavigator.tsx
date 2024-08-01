// src/navigation/AppNavigator.tsx

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

import Login from '../screens/Login/LoginScreen';
import Home from '../screens/Home/HomeScreen';
import Write_Host from '../screens/Write/WriteHostScreen';
import Write_Hero from '../screens/Write/WriteHeroScreen';
import Alarm_Host from '../screens/Alarm/AlarmHostScreen';
import Alarm_Hero from '../screens/Alarm/AlarmHeroScreen';
import MY_Host from '../screens/MY/MYHostScreen';
import MY_Hero from '../screens/MY/MYHeroScreen';
import Matching_Host from '../screens/Matching/MatchingHostScreen';
import Matching_Hero from '../screens/Matching/MatchingHeroScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen
            name="Login"
            component={props => (
              <Login {...props} onLoginSuccess={handleLoginSuccess} />
            )}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={BottomTabNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={Home} />
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
            <Stack.Screen name="Alarm_Hero" component={Alarm_Hero} />
            <Stack.Screen name="Alarm_Host" component={Alarm_Host} />
            <Stack.Screen name="MY_Hero" component={MY_Hero} />
            <Stack.Screen name="MY_Host" component={MY_Host} />
            <Stack.Screen
              name="Matching_Hero"
              component={Matching_Hero}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Matching_Host"
              component={Matching_Host}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
