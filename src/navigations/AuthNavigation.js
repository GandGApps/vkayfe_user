import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ChooseScreen,
  SignIn,
  SignupScreen,
  SplashScreen,
  CreateShopScreen,
  VerifyPhoneScreen,
  MapsScreen,
  LoremScreen,
} from '../screens';
import {
  ChooseName,
  SignInName,
  SignupName,
  SplashName,
  VerifyPhoneName,
  CreateShopName,
  MapsScreenName,
  LoremName,
} from '../constants';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SplashName} component={SplashScreen} />
      <Stack.Screen name={ChooseName} component={ChooseScreen} />
      <Stack.Screen name={SignupName} component={SignupScreen} />
      <Stack.Screen name={SignInName} component={SignIn} />
      <Stack.Screen name={VerifyPhoneName} component={VerifyPhoneScreen} />
      <Stack.Screen name={CreateShopName} component={CreateShopScreen} />
      <Stack.Screen name={MapsScreenName} component={MapsScreen} />
      <Stack.Screen name={LoremName} component={LoremScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
