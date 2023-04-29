import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main, Product } from '../screens';
import { RouteStackParams, MainNavigatorScreens } from './MainNavigator.types';

const Stack = createNativeStackNavigator<RouteStackParams>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MainNavigatorScreens.MAIN}>
      <Stack.Screen
        name={MainNavigatorScreens.MAIN}
        options={{ headerShown: false }}
        component={Main}
      />
      <Stack.Screen name={MainNavigatorScreens.PRODUCT} component={Product} />
    </Stack.Navigator>
  );
};
