import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {View, Text, Image, ScrollView, StatusBar, Platform} from 'react-native';
import {
  AppButton,
  BackButton,
  PromoCodeForm,
  PromoCodeData,
  globalHeight,
} from '../../../../components';
import promotionServicesMonster from '../../../../assets/images/promotionServicesMonster.png';
import line from '../../../../assets/images/line.png';
import podarok from '../../../../assets/images/podarok.png';

import {
  globalStyles,
  Colors,
  DeleteShopName,
  AddPromoCodeName,
} from '../../../../constants';
import axiosInstance from '../../../../networking/axiosInstance';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const PromotionServicesScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axiosFunc();
    });
    return unsubscribe;
  }, [navigation]);

  const axiosFunc = async () => {
    try {
      const response = await axiosInstance.get('/promocodes');
      // console.log(response.data.promocodes,new Date().toLocaleDateString('en-GB'))
      setData(response.data.promocodes);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        globalStyles.scrollContainer,
        Platform.OS === 'ios' && {marginTop: -(getStatusBarHeight(true) + 5)},
      ]}
      bounces={false}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.blueBackground}
      />

      <View style={[styles.content]}>
        <View>
          <View
            style={[
              styles.headerCont,
              Platform.OS === 'ios' && {
                paddingTop: getStatusBarHeight(true) + globalHeight(45),
              },
            ]}>
            <BackButton navigation={navigation} text={'Значимые даты'} />
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.textAlignLeft,
                globalStyles.titleTextSmall,
                styles.headerText,
              ]}>
              Здесь Вы можете ввести значимые даты и получить промокод на скидку
            </Text>
          </View>
          {Object.keys(data).length ? (
            <ScrollView bounces={false}>
              {data.map((item, index) => {
                return (
                  <PromoCodeForm
                    item={item}
                    key={index}
                    navigation={navigation}
                    DeleteShopName={DeleteShopName}
                  />
                );
              })}
            </ScrollView>
          ) : (
            <View style={styles.contCont}>
              <Image source={podarok} style={styles.podImg} />
              <Text
                style={[
                  globalStyles.titleText,
                  globalStyles.titleTextSmall,
                  globalStyles.weightLight,
                  styles.contText,
                ]}>
                Добавьте значимую дату (день рождения, новый год, рождество и
                т.д.)
              </Text>
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <AppButton
            text={'Добавить значимую дату'}
            stylesContainer={styles.containerBtn}
            onPress={() => navigation.navigate(AddPromoCodeName)}
          />
        </View>
      </View>
    </ScrollView>
  );
};
