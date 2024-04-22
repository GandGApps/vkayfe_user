import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  BaseUrl,
  globalStyles,
  GoodsImgName,
  imageUrl,
  SaveItemName,
} from '../../../constants';
import {AppInput} from '../../core';
import plusC from '../../../assets/images/plusC.png';
import minusC from '../../../assets/images/minusC.png';
import deleteIcon from '../../../assets/images/delete.png';
import axiosInstance from '../../../networking/axiosInstance';

export function TrushForm({
  item,
  index,
  navigation,
  setAllCount,
  allCount,
  fullCount,
}) {
  const [count, setCount] = useState(item.items[0].count);
  // console.log('trush form item', item)
  const addNumFunc = pr => {
    axiosFunc(false, pr);
  };
  const minNumFunc = pr => {
    if (count !== `${0}`) {
      axiosFunc(true, pr);
    }
  };
  const axiosFunc = async (st, price) => {
    const dat = {
      count: 1,
      good_id: item.items[0].good_id?._id,
      cartId: item._id,
    };
    if (st) {
      try {
        if (+count !== 1) {
          const response = await axiosInstance.post('/carts/delete', dat);
          setCount(`${+count - 1}`);
          setAllCount(allCount - price);
        }
      } catch (e) {
        if (e?.response?.data?.error) {
          Alert.alert('', e?.response?.data?.error);
        }
      }
    } else {
       if (count >= fullCount) {
          Alert.alert('Превышено максимальное количество товара');
        }
        else {
          const response = await axiosInstance.post('/carts/add', dat);
        setCount(`${+count + 1}`);
        setAllCount(allCount + price);
     
        }
        
    }
  };

  const img = Array.isArray(item.items[0].good_id.photo_list[0])
    ? item.items[0].good_id.photo_list[0][0]
    : item.items[0].good_id.photo_list[0];
  return (
    <View style={styles.applicationsContainer}>
      <TouchableOpacity
        style={styles.deleteCont}
        onPress={() =>
          navigation.replace(SaveItemName, {
            id: item.items[0].good_id._id,
            cartId: item._id,
          })
        }>
        <Image source={deleteIcon} style={styles.deleteIcon} />
      </TouchableOpacity>
      <View style={styles.changeContent}>
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.titleTextSmall,
            globalStyles.weightLight,
            globalStyles.textAlignLeft,
          ]}>
          Товар {index + 1}
        </Text>
        <View style={[globalStyles.row]}>
          <Image source={{uri: imageUrl + '/' + img}} style={styles.imgForm} />
          <View style={styles.textCont}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.titleTextSmall,
                globalStyles.textAlignLeft,
              ]}>
              {item.items[0].good_id?.title}
            </Text>
            <View style={styles.foot}>
              <Text
                style={[
                  globalStyles.titleText,
                  globalStyles.weightBold,
                  globalStyles.titleTextSmall,
                  globalStyles.textAlignLeft,
                  styles.priceText,
                ]}>
                {item.items[0].good_id?.price} р
              </Text>
              <View style={styles.rowView}>
                <TouchableOpacity
                  style={[styles.btnAdd, styles.abslleft]}
                  onPress={() =>
                    minNumFunc(item.items[0].good_id?.price, true)
                  }>
                  <Image source={minusC} style={styles.imgPlusMinus} />
                </TouchableOpacity>
                <Text
                  style={[
                    globalStyles.titleText,
                    globalStyles.weightBold,
                    globalStyles.titleTextSmall,
                    globalStyles.textAlignLeft,
                    styles.textCount,
                  ]}>
                  {count}
                </Text>
                <TouchableOpacity
                  style={[styles.btnAdd, styles.absl]}
                  onPress={() => addNumFunc(item.items[0].good_id?.price)}>
                  <Image source={plusC} style={styles.imgPlusMinus} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
