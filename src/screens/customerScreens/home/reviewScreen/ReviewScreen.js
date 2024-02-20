import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  Colors,
  FilterName,
  globalStyles,
  MapsScreenName,
  ShopName,
} from '../../../../constants';
import {
  CategoryData,
  FormCategory,
  FormCategoryHorizontal,
  HomeFormData,
  Loading,
  AppInput,
  BackButton,
  AppButton,
  globalHeight,
} from '../../../../components';
import {FormGoods} from '../../../../components';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import mask from '../../../../assets/images/mask.png';
import axiosInstance from '../../../../networking/axiosInstance';
import place from '../../../../assets/images/place.png';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const ReviewScreen = ({navigation, route}) => {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const onChangeTextFunc = (e, set) => {
    setError('');
    set(e);
  };
  const onPressFunc = () => {
    if (review && name) {
      axiosFunc();
    } else {
      setError('Заполните все поля');
    }
  };

  const axiosFunc = async () => {
    setLoading(true);
    try {
      const obj = {
        user_name: name,
        text: review,
      };
      const response = await axiosInstance.post(
        `/stores/reviews?store_id=${route.params.shop._id}`,
        obj,
      );
      navigation.navigate(ShopName, {shop: route.params.shop});
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <View
      style={[
        globalStyles.container,
        styles.cont,
        Platform.OS === 'ios' && {
          paddingTop: getStatusBarHeight(true) + globalHeight(30),
        },
      ]}>
      <View>
        <BackButton text={'Отзыв'} navigation={navigation} />
        <View>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.textAlignLeft,
              globalStyles.titleTextSmall,
              globalStyles.weightBold,
              styles.priceText,
            ]}>
            Ваше имя
          </Text>
          <AppInput
            placeholder={'Укажите ваше имя'}
            onChangeText={e => onChangeTextFunc(e, setName)}
            value={name}
          />
        </View>
        <View>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.textAlignLeft,
              globalStyles.titleTextSmall,
              globalStyles.weightBold,
              styles.priceText,
            ]}>
            Мой отзыв
          </Text>
          <AppInput
            style={styles.inputBig}
            placeholder={'Оставьте отзыв'}
            onChangeText={e => onChangeTextFunc(e, setReview)}
            value={review}
            editable
            numberOfLines={5}
            multiline
          />
        </View>
        {error && <Text style={globalStyles.error}>{error}</Text>}
      </View>
      <View style={styles.footCont}>
        <AppButton text={'Оставьте отзыв'} onPress={onPressFunc} />
        <Loading loading={loading} />
      </View>
    </View>
  );
};
