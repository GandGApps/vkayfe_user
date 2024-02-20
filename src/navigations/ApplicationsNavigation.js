import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ApplicationsDataName,
  ApplicationsScreenName,
  GoodsDataName,
  ShopName,
} from '../constants';
import {
  AplicationsScreen,
  ApplicationsDataScreen,
  GoodsDataScreen,
  ShopScreen,
} from '../screens';

const Stack = createStackNavigator();

function ApplicationsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ApplicationsScreenName}
        component={AplicationsScreen}
      />
      <Stack.Screen name={ShopName} component={ShopScreen} />
      <Stack.Screen name={GoodsDataName} component={GoodsDataScreen} />
    </Stack.Navigator>
  );
}

export default ApplicationsNavigation;
