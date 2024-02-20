import React from 'react';
import {styles} from './styles';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BackButton} from '../../../../components';
import {globalStyles} from '../../../../constants';

export const FinancialReportDataScreen = ({navigation, route}) => {
  const item = route.params.item;

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <BackButton navigation={navigation} />
      <View style={styles.content}>
        <View>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.textContainer,
            ]}>
            Заказ № <Text>{item.orderNo}</Text>
          </Text>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.textContainer,
            ]}>
            Число: <Text style={[globalStyles.weightLight]}>{item.date}</Text>
          </Text>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.textContainer,
            ]}>
            Время: <Text style={[globalStyles.weightLight]}>{item.time}</Text>
          </Text>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.textContainer,
            ]}>
            Общая:{' '}
            <Text style={[globalStyles.weightLight]}>
              {item.allPrice} рублей
            </Text>
          </Text>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.textContainer,
            ]}>
            Комиссия:{' '}
            <Text style={[globalStyles.weightLight]}>{item.commission} %</Text>
          </Text>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.textContainer,
            ]}>
            Выручка магазина:{' '}
            <Text style={[globalStyles.weightLight]}>{item.price} рублей</Text>
          </Text>
        </View>
      </View>
      <View style={styles.footerDataStatus}>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.weightBold,
            globalStyles.titleTextSmall,
            globalStyles.textAlignLeft,
            styles.textContainer,
          ]}>
          СТАТУС:{' '}
          <Text
            style={[
              styles.textContentData,
              {color: item.state ? '#138F2E' : '#E79800'},
            ]}>
            {item.text}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};
