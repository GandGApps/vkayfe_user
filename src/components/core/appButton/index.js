import React from 'react';
import {styles} from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../../constants';

export function AppButton({text, stylesContainer, stylesText, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.containerButton, {...stylesContainer},{marginBottom: 20}]}
      onPress={onPress}>
      <Text
        style={[
          globalStyles.titleText,
          globalStyles.titleTextSmall,
          globalStyles.weightBold,
          styles.text,
          {...stylesText},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
