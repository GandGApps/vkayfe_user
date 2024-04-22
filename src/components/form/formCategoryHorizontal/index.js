import React from 'react';
import {styles} from './styles';
import {
  BaseUrl,
  CategoryDataName,
  globalStyles,
  imageUrl,
  SubCategoryName,
} from '../../../constants';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import rightIcn from '../../../assets/images/rightIcon.png';

export function FormCategoryHorizontal({
  item,
  index,
  navigation,
  ChangePageCategory,
}) {
  return (
    <TouchableOpacity
      style={[styles.containerFormCat]}
      onPress={() => ChangePageCategory(item)}>
      <Image
        source={{uri: imageUrl + '/' + item.photo_url}}
        style={styles.catImg}
      />
      <Text
        style={[
          styles.title,
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}
