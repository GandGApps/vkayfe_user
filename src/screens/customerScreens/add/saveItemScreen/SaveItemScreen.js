import React from 'react';
import {View} from 'react-native';
import {SaveItemData, WaitingForm} from '../../../../components';
import {AddScreenName} from '../../../../constants';
import axiosInstance from '../../../../networking/axiosInstance';

export const SaveItemScreen = ({navigation, route}) => {
  const deleteFunc = async () => {
    const obj = {
      good_id: route.params.id,
      deleteAll: true,
      cartId: route.params.cartId,
    };
    try {
      const response = await axiosInstance.post('/carts/delete', obj);
      navigation.navigate(AddScreenName, {st: true});
    } catch (e) {
      // console.log(e);
    }
  };

  const data = {
    ...SaveItemData,
    deleteFunc,
    navigation,
  };

  return (
    <View style={{flex: 1}}>
      <WaitingForm data={data} />
    </View>
  );
};
