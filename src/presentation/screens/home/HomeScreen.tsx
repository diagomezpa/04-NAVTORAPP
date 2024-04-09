/* eslint-disable prettier/prettier */
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import type {RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Productos"
        onPress={() => navigation.navigate('Products')}></PrimaryButton>
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}></PrimaryButton>
    </View>
  );
};
