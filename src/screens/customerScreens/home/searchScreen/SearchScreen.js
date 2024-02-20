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
} from '../../../../components';
import {FormGoods} from '../../../../components';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import mask from '../../../../assets/images/mask.png';
import {useDispatch, useSelector} from 'react-redux';
import axiosInstance from '../../../../networking/axiosInstance';
import place from '../../../../assets/images/place.png';
import FilterIcon from '../../../../assets/images/filter.png';
import topBottom from '../../../../assets/images/topBottom.png';
export const SearchScreen = ({navigation}) => {
  const store = useSelector(st => st.customer);

  return (
    <View style={[globalStyles.container, styles.cont]}>
      <View style={styles.headerSearch}>
        <BackButton navigation={navigation} />
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.filterContainer}
            onPress={() => navigation.navigate(FilterName, {state: true})}>
            <Text
              style={[
                styles.filterTextStyle,
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.titleTextSmall,
              ]}>
              Фильтры
            </Text>
            <Image source={FilterIcon} style={styles.filterIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.HeaderFooter}>
            <Image source={place} style={styles.winIconStyle} />
            <Text
              style={[
                styles.headerFooterText,
                globalStyles.titleText,
                globalStyles.titleTextSmall,
              ]}>
              Адрес {store.city}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contView}>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.titleTextSmall,
              globalStyles.weightBold,
              globalStyles.textAlignLeft,
              styles.recText,
            ]}>
            Мы нашли 20 товаров
          </Text>
          <Image source={topBottom} style={styles.iconTopBottom} />
        </View>
      </View>
    </View>
  );
};
