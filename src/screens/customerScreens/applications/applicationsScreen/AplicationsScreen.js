import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  FlatList,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, globalStyles} from '../../../../constants';
import {
  ApplicationsData_,
  ApplicationsForm,
  BackButton,
  FilterData,
  FilterForm,
  FormSubCategory,
  globalWidth,
  ShopDataForm,
  ShopFavorite,
} from '../../../../components';
import axiosInstance from '../../../../networking/axiosInstance';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const AplicationsScreen = ({navigation}) => {
  const [active, setActive] = useState('Товары');
  const [store, setStore] = useState([]);
  const [good, setGood] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStore();
      getShop();
    });
    return unsubscribe;
  }, [navigation]);

  const getStore = async () => {
    try {
      const response = await axiosInstance.get('/favorites');
      console.log(response.data, 'f            console.log(response.data)\n');
      setGood(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getShop = async () => {
    try {
      const response = await axiosInstance.get('/favorites/stores');
      console.log(response.data);
      setStore(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={[
        globalStyles.container,
        Platform.OS === 'ios' && {marginTop: -(getStatusBarHeight(true) + 6)},
      ]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.blueBackground}
      />
      <View style={[styles.container]}>
        <View
          style={[
            styles.headerContainer,
            Platform.OS === 'ios' && {
              paddingTop: getStatusBarHeight(true) + globalWidth(50),
            },
          ]}>
          {/*<Text*/}
          {/*    style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.weightBold, globalStyles.titleTextBig, styles.textZakaz]}>Избранное</Text>*/}
          <BackButton text={'Избранное'} navigation={navigation} />
          <View style={[globalStyles.row, styles.headerFooter]}>
            <TouchableOpacity
              style={active === 'Товары' && styles.activeText}
              onPress={() => setActive('Товары')}>
              <Text
                style={[
                  globalStyles.titleText,
                  globalStyles.weightLight,
                  globalStyles.titleTextSmall,
                  styles.headerFooterText,
                  active === 'Товары' && styles.activeTextContent,
                ]}>
                Товары
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={active === 'Магазины' && styles.activeText}
              onPress={() => setActive('Магазины')}>
              <Text
                style={[
                  globalStyles.titleText,
                  globalStyles.weightLight,
                  globalStyles.titleTextSmall,
                  styles.headerFooterText,
                  active === 'Магазины' && styles.activeTextContent,
                ]}>
                Магазины
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {active === 'Товары' ? (
        <FlatList
          data={good}
          renderItem={({item, index}) => {
            return (
              <ApplicationsForm
                item={item}
                key={index}
                navigation={navigation}
              />
            );
          }}
        />
      ) : (
        <FlatList
          data={store}
          renderItem={({item, index}) => {
            if (item?.store_id) {
              return (
                <ShopDataForm
                  item={item}
                  key={index}
                  navigation={navigation}
                  shop={item?.store_id}
                />
              );
            }
          }}
        />
      )}
    </View>
  );
};
