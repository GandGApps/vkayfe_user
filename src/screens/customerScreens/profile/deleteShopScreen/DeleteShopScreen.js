import React, {useState} from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {DeleteShopData, Loading, WaitingForm} from '../../../../components';
import {ProfileScreenName} from '../../../../constants';
import axiosInstance from '../../../../networking/axiosInstance';

export const DeleteShopScreen = ({navigation, route}) => {
  const item = route.params.item;
  const [visible, setVisible] = useState(false);
  const deleteFunc = async () => {
    setVisible(true);
    try {
      const response = await axiosInstance.delete(`/promocodes?id=${item._id}`);
      navigation.replace(ProfileScreenName);
      setVisible(false);
    } catch (e) {
      console.log(e);
      setVisible(false);
    }
  };

  const data = {
    ...DeleteShopData,
    navigation,
    deleteFunc,
  };

  return (
    <View style={styles.container}>
      <WaitingForm data={data} />
      <Loading visible={visible} />
    </View>
  );
};
