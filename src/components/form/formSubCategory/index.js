import React from 'react';
import {styles} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../../../constants';

export function FormSubCategory({item, index}) {
  return (
    <TouchableOpacity style={styles.containerForm}>
      <Text
        style={[
          styles.title,
          globalStyles.titleText,
          globalStyles.textAlignLeft,
          globalStyles.weightLight,
          globalStyles.titleTextSmall,
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}
