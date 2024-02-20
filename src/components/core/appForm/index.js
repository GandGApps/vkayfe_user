import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';

export function AppForm({children}) {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formLine} />
      {children}
    </View>
  );
}
