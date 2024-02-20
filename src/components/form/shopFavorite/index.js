import React from 'react';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BaseUrl, globalStyles, GoodsDataName} from '../../../constants';
import dntLike from '../../../assets/images/dntLike.png';
import like from '../../../assets/images/likeTifany.png';

export function ShopFavorite({item, addFavoriteFunc, navigation, index}) {
  // const img  = Array.isArray(item.photo_list[0]) ? item.photo_list[0][0] : item.photo_list[0]
  return (
    // item.delivery && (
    <TouchableOpacity
      style={styles.applicationsContainer}
      onPress={() => navigation.navigate(GoodsDataName, {item})}>
      <View style={[globalStyles.row, styles.rowCont]}>
        <Image source={like} style={styles.imgForm} />
      </View>
      <Image source={like} style={styles.likeIc} />
      <View style={styles.foot}>
        <View style={styles.applContent}>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.titleTextSmall4,
              globalStyles.textAlignLeft,
              globalStyles.weightLight,
              styles.magazine,
            ]}>
            Магазин
          </Text>

          <Text
            style={[
              globalStyles.titleText,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.name,
            ]}>
            {item.title}
          </Text>
        </View>
        <View style={styles.applicationsContent}>
          <View style={styles.shopCont}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.titleTextSmall4,
                globalStyles.textAlignLeft,
                globalStyles.weightLight,
                styles.name1,
              ]}>
              {item.city}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // )
  );
}
