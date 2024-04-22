import React from 'react';
import {styles} from './styles';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  BaseUrl,
  globalStyles,
  GoodsDataName,
  imageUrl,
  ShopName,
} from '../../../constants';
import dntLike from '../../../assets/images/dntLike.png';
import like from '../../../assets/images/likeTifany.png';

export function ShopDataForm({item, addFavoriteFunc, navigation, shop}) {
  return (
    // item.delivery && (
    <TouchableOpacity
      style={styles.applicationsContainer}
      onPress={() => {
        navigation.navigate(ShopName, {shop});
      }}>
      <View style={[globalStyles.row, styles.rowCont]}>
        <Image
          source={{uri: imageUrl + '/' + item.store_id.logo_url}}
          style={styles.imgForm}
        />
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
              globalStyles.weightBold,
              styles.name,
            ]}>
            {item.store_id.title}
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
              {item.store_id.city} / {item.store_id.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // )
  );
}
