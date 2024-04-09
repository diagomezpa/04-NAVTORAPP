/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Productos"
        onPress={() =>
          navigation.navigate('Products' as never)
        }></PrimaryButton>
      <PrimaryButton
        label="Settings"
        onPress={() =>
          navigation.navigate('Settings' as never)
        }></PrimaryButton>
    </View>
  );
};
