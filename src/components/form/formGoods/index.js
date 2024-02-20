import React, {useState} from 'react';
import {styles} from './styles';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {BaseUrl, globalStyles, GoodsDataName} from '../../../constants';
import dntLike from '../../../assets/images/dntLike.png';
import like from '../../../assets/images/likeTifany.png';
import {globalHeight, globalWidth} from '../../dimensions';

export function FormGoods({item, addFavoriteFunc, navigation, index}) {
  const img = Array.isArray(item.photo_list[0])
    ? item.photo_list[0][0]
    : item.photo_list[0];
  const [loading, setLoading] = useState(false);
  return (
    <TouchableOpacity
      style={styles.containerForm}
      onPress={() => {
        if (!loading) {
          let a = item.photo_list.map(item => {
            return {
              uri: BaseUrl + '/' + item,
            };
          });
          navigation.navigate(GoodsDataName, {
            item: {
              ...item,
              photo_list: a,
            },
          });
        }
      }}>
      <View style={styles.imgFormCont}>
        {loading ? (
          <ActivityIndicator
            size={40}
            color={'#569690'}
            style={{
              position: 'absolute',
              zIndex: 10,
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
            }}
          />
        ) : null}
        <Image
          onLoadStart={e => {
            setLoading(true);
          }}
          onLoad={e => {
            setLoading(false);
          }}
          onLoadEnd={e => setLoading(false)}
          source={{uri: BaseUrl + '/' + img}}
          style={styles.imgForm}
        />
      </View>
      <View style={styles.formContent}>
        <View style={styles.goodsText}>
          <View>
            <View style={styles.rowLikesContainer}>
              <Text
                style={[
                  globalStyles.titleText,
                  globalStyles.weightLight,
                  globalStyles.titleTextSmall,
                  globalStyles.textAlignLeft,
                ]}>
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  addFavoriteFunc(item, index);
                }}>
                <Image
                  source={item.is_favorite ? like : dntLike}
                  style={styles.likeIc}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          numberOfLines={1}
          style={[
            globalStyles.titleText,
            globalStyles.weightBold,
            globalStyles.titleTextSmall,
            globalStyles.textAlignLeft,
            styles.goodsText,
          ]}>
          {item.price.$numberDecimal ? item.price.$numberDecimal : item.price} р
        </Text>
      </View>
    </TouchableOpacity>
  );
}
