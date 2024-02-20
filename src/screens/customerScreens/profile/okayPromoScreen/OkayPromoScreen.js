import React from 'react';
import {styles} from './styles';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  CategoryData,
  FormCategory,
  BackButton,
  OkayPromoData,
  WaitingForm,
} from '../../../../components';

import Goods from '../../../../assets/images/allGoodsIcon.png';
import {globalStyles} from '../../../../constants';

export const OkayPromoScreen = ({navigation}) => {
  const data = {
    ...OkayPromoData,
    navigation,
  };
  return (
    <View style={globalStyles.container}>
      <WaitingForm data={data} />
    </View>
  );
};
