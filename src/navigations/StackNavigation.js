import * as React from "react";
import TabNavigation from "./TabNavigation";
import AuthNavigation from "./AuthNavigation";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthNavigation" component={AuthNavigation}/>
      <Stack.Screen name="TabNavigation" component={TabNavigation}/>
    </Stack.Navigator>
  );
}

export default StackNavigation;
