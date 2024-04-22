import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import {
  BackButton,
  CategoryData,
  FinancialData_,
  FinancialForm,
  FormCategory,
  globalHeight,
} from '../../../../components';
import {
  Colors,
  FilterName,
  FinancialFilterName,
  globalStyles,
} from '../../../../constants';
import FilterIcon from '../../../../assets/images/filter.png';
import axiosInstance from '../../../../networking/axiosInstance';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const FinancialReportScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState('');
  useEffect(() => {
    getBuyer();
    getBanner();
  }, []);
  const getBanner = async () => {
    try {
      const response = await axiosInstance.get('/goods/banner');
      console.log('get banner', response.data)
      setBanner(response.data.banner);
    } catch (e) {
      console.log(e);
    }
  };
  const getBuyer = async () => {
    try {
      const response = await axiosInstance.get('/orders/buyer');
      console.log('get buyer', response.data)

      const arr = response.data;
      if (Object.keys(arr).length) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].status_id.name === 'approved') {
            arr[i].status_id.title = 'Заказ принят';
          } else if (arr[i].status_id.name === 'assembling') {
            arr[i].status_id.title = 'Заказ в сборке';
          } else if (arr[i].status_id.name === 'accepted') {
            arr[i].status_id.title = 'Ожидает подтверждения';
          } else if (arr[i].status_id.name === 'pending') {
            arr[i].status_id.title = 'Ожидают подтверждения';
          } else if (arr[i].status_id.name === 'in_transit') {
            arr[i].status_id.title = 'Заказ в пути';
          } else if (arr[i].status_id.name === 'completed') {
            arr[i].status_id.title = 'Заказ завершен';
          } else if (arr[i].status_id.name === 'cancelled') {
            arr[i].status_id.title = 'Заказ отменен';
          }
        }
      }
      setData([...arr]);
    } catch (e) {
      console.log("getBuyer ",e);
    }
  };

  return (
    <View
      style={[
        globalStyles.container,
        Platform.OS === 'ios' && {marginTop: -(getStatusBarHeight(true) + 5)},
      ]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.blueBackground}
      />
      <View
        style={[
          styles.headerContainer,
          Platform.OS === 'ios' && {
            paddingTop: getStatusBarHeight(true) + globalHeight(45),
          },
        ]}>
        <BackButton navigation={navigation} text={'Мои покупки'} />
        <View style={[styles.headerContent]} />
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <FinancialForm
              item={item}
              key={item._id}
              navigation={navigation}
              banner={banner}
            />
          );
        }}
      />
    </View>
  );
};
