import React from 'react';
import {styles} from './styles';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../../constants';
import {globalWidth} from '../../dimensions';

export const FilterForm = ({item, index, check}) => {
  return (
    <TouchableOpacity
      style={[
        styles.filterCategoryContainer,
        index === 0 && {marginLeft: globalWidth(20)},
        item.check ? {backgroundColor: '#0BC5BA'} : null,
      ]}
      onPress={() => check(index)}>
      <Text
        style={[
          globalStyles.titleText,
          globalStyles.titleTextSmall,
          globalStyles.weightLight,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
