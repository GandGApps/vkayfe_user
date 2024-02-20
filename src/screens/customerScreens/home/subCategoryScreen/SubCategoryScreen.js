import React from 'react';
import {styles} from './styles';
import {View, Text, Image, FlatList} from 'react-native';
import {
  BackButton,
  FormCategory,
  FormSubCategory,
} from '../../../../components';
import {globalStyles} from '../../../../constants';

export const SubCategoryScreen = ({navigation, route}) => {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <BackButton text={'Подкатегории'} navigation={navigation} />
      <View style={[styles.containerForm, {backgroundColor: item.color}]}>
        <View style={[globalStyles.row]}>
          <View>
            <Image source={item.img} style={styles.img} />
          </View>
          <View>
            <Text style={[globalStyles.titleText]}>{item.title}</Text>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.titleTextSmall4,
                globalStyles.textAlignLeft,
              ]}>
              {item.pcs} товаров
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        data={item.subCategory}
        renderItem={({item, index}) => {
          return (
            <FormSubCategory item={item} key={index} navigation={navigation} />
          );
        }}
      />
    </View>
  );
};
