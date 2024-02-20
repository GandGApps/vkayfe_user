import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddScreenName, SaveItemName} from '../constants';
import {AddScreen, SaveItemScreen} from '../screens';

const Stack = createStackNavigator();

function AddNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AddScreenName} component={AddScreen} />
      <Stack.Screen name={SaveItemName} component={SaveItemScreen} />
    </Stack.Navigator>
  );
}

export default AddNavigation;
