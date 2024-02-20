import React from 'react';
import {styles} from './styles';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import place from '../../../../assets/images/wing.png';
import {AppButton, BackButton} from '../../../../components';
import {
  Colors,
  CreateShopName,
  DeleteShopName,
  globalStyles,
} from '../../../../constants';

export const ShopDataScreen = ({navigation, route}) => {
  const shop = route.params.shop;

  const navigationDeleteFunc = (nav, id) => {
    navigation.navigate(nav, {id});
  };

  return (
    <View style={[styles.container, globalStyles.container]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.blueBackground}
      />
      <View>
        <View style={styles.headerContainer}>
          <BackButton navigation={navigation} />
          <View style={styles.shopDataContainer}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightBold,
                globalStyles.textAlignLeft,
                styles.shopNameText,
                globalStyles.titleTextSmall,
              ]}>
              {shop?.title?.toUpperCase()}
            </Text>
            <View style={styles.placeContainer}>
              <Image source={place} style={styles.placeIcon} />
              <Text style={[globalStyles.titleText, globalStyles.weightLight]}>
                {shop?.city_id?.city_name}
              </Text>
            </View>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.textAlignLeft,
                globalStyles.weightLight,
                globalStyles.titleTextSmall,
                styles.IdText,
              ]}>
              ID: {shop._id}
            </Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.titleTextSmall,
              styles.inputBigText,
              styles.proText,
              globalStyles.textAlignLeft,
            ]}>
            Про нас
          </Text>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.weightLight,
              globalStyles.titleTextSmall,
              globalStyles.textAlignLeft,
              styles.dataText,
            ]}>
            {shop?.about_store}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <AppButton
          stylesContainer={styles.buttonRedContainer}
          text={'Удалить'}
          onPress={() => navigationDeleteFunc(DeleteShopName, shop._id)}
        />
        <AppButton
          stylesContainer={styles.buttonWhiteContainer}
          stylesText={styles.buttonWhiteText}
          text={'Редактировать'}
          onPress={() =>
            navigation.navigate(CreateShopName, {shop, state: true})
          }
        />
      </View>
    </View>
  );
};
