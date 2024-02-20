import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CategoryData,
  FormCategory,
  BackButton,
  chooseData,
  WaitingForm,
  AddTrushData,
  globalHeight,
} from '../../../../components';
import {
  AddName,
  AddScreenName,
  globalStyles,
  HomeScreenName,
  SignInName,
} from '../../../../constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const LoremScreen = ({navigation, route}) => {
  return (
    <ScrollView
      contentContainerStyle={[
        globalStyles.scrollContainer,

        Platform.OS === 'ios' && {
          paddingTop: getStatusBarHeight(true) + globalHeight(35),
        },
      ]}
      bounces={false}>
      <BackButton navigation={navigation} text={route.params.name} textStyle />
      <Text
        style={[globalStyles.titleText, globalStyles.weightLight, styles.text]}>
        {route.params.text}
      </Text>
    </ScrollView>
  );
};
