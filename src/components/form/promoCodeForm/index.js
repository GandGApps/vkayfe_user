import React from 'react';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles, GoodsImgName, Colors} from '../../../constants';
import deleteIcon from '../../../assets/images/deleteIcon.png';

export function PromoCodeForm({item, navigation, DeleteShopName}) {
  const nowDate = new Date().toLocaleDateString('en-GB');
  return (
    <View
      style={[
        styles.cont,
        {backgroundColor: nowDate > item.date ? '#FFEAEA' : null},
      ]}>
      <View
        style={[
          styles.line,
          {backgroundColor: nowDate > item.date ? '#F37171' : Colors.pink},
        ]}
      />
      <View style={[styles.content]}>
        <View style={[globalStyles.row, styles.headerCont]}>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.textAlignLeft,
              globalStyles.titleTextSmall,
              globalStyles.weightLight,
            ]}>
            {item.date}
            <Text style={styles.state}> {item.state ? item.state : null}</Text>
          </Text>
          <View style={[globalStyles.row]}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.textAlignLeft,
                globalStyles.titleTextSmall,
                globalStyles.weightLight,
                styles.sale,
              ]}>
              Скидка {item.percentage} %
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(DeleteShopName, {item})}>
              <Image source={deleteIcon} style={styles.deleteIconStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.textAlignLeft,
            globalStyles.titleTextSmall,
            globalStyles.weightLight,
          ]}>
          Повод: {item.event_name}
        </Text>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.textAlignLeft,
            globalStyles.titleTextSmall,
            globalStyles.weightBold,
            styles.promoText,
          ]}>
          Промокод: {item.text}
        </Text>
      </View>
    </View>
  );
}
