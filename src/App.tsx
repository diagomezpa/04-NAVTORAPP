/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
