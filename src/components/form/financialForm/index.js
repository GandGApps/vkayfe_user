import React from 'react';
import {styles} from './styles';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import winIcon from '../../../assets/images/winIcon.png';
import {ApplicationsDataName, globalStyles} from '../../../constants';

export function FinancialForm({item, index, navigation, banner}) {
  return (
    <TouchableOpacity
      style={styles.containerForm}
      onPress={() => {
        if (item.store_id) {
          navigation.navigate(ApplicationsDataName, {item, banner});
        } else {
          Alert.alert(
            '',
            'Магазин удалён, последующая доставка невозможна. Свяжитесь с тех. поддержкой',
          );
        }
      }}>
      <View style={styles.contentView}>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.weightLight,
            globalStyles.titleTextSmall,
          ]}>
          № {item._id.substring(0, 10)}
        </Text>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.weightLight,
            globalStyles.titleTextSmall4,
            {color: item.status_id.name === 'approved' ? '#138F2E' : '#E79800'},
          ]}>
          {item.status_id.title}
        </Text>
      </View>
      <View style={[styles.contentView, styles.centerView]}>
        <Text style={[globalStyles.titleText, globalStyles.textAlignLeft]}>
          {item.title}
        </Text>
      </View>
      <View style={styles.contentView}>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.weightLight,
            globalStyles.titleTextSmall,
          ]}>
          {item.delivery_date}
        </Text>
        {/*<TouchableOpacity onPress={()=>navigation.navigate(FinancialReportDataName,{item})}>*/}
        <Text style={[globalStyles.titleText]}>
          {item.full_amount ? item.full_amount : 500} р
        </Text>
      </View>
    </TouchableOpacity>
  );
}
