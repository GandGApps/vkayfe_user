import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatScreenName, MessagesName} from '../constants';
import {ChatScreen, MessagesScreen} from '../screens';

const Stack = createStackNavigator();

function ChatNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ChatScreenName} component={ChatScreen} />
      <Stack.Screen name={MessagesName} component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default ChatNavigation;
