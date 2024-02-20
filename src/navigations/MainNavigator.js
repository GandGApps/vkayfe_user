import * as React from 'react';
import {Colors} from '../constants';
import StackNavigation from './StackNavigation';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const MainNavigator = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: Colors.white,
        },
      }}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigator;
