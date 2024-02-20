import React, {useState} from 'react';
import {styles} from './styles';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  AppButton,
  BackButton,
  ChangePasswordModal,
  Loading,
} from '../../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  ChooseName,
  EditMyDetailsName,
  globalStyles,
  SET_CUSTOMER_DELETE,
  SET_SHOP,
  SET_SHOP_DELETE,
} from '../../../../constants';
import {removeTokens} from '../../../../utils';
import AsyncStorage from '@react-native-community/async-storage';

export const MyDetailsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const store = useSelector(st => st.customer);
  const [modalState, setModalState] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadingFunc = val => setLoading(val);
  const modalFunc = state => setModalState(state);

  const onPressFunc = name => {
    navigation.navigate(name);
  };

  const logOutFunc = async () => {
    await removeTokens();
    await AsyncStorage.removeItem('fcmToken');
    dispatch({
      type: SET_CUSTOMER_DELETE,
    });
    dispatch({
      type: SET_SHOP_DELETE,
    });
    navigation.replace('AuthNavigation');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <View style={[styles.contentMyDetailsAll]}>
        <View>
          <BackButton
            text={'Мои данные'}
            navigation={navigation}
            stylesBack={styles.stylesBack}
          />
          <View style={styles.contentMyDetails}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.textAlignLeft,
                styles.contentMyDetailsText,
              ]}>
              {store.name}
            </Text>
          </View>
          <View>
            <View
              style={[styles.contentMyDetails, styles.contentMyDetailsPass]}>
              <Text
                style={[
                  globalStyles.titleText,
                  globalStyles.weightLight,
                  globalStyles.textAlignLeft,
                  styles.contentMyDetailsText,
                ]}>
                {store.email}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.btnPassword}
              onPress={() => modalFunc(true)}>
              <Text style={[globalStyles.weightBold, styles.btnPasswordText]}>
                Изменить пароль
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentMyDetails}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.textAlignLeft,
                styles.contentMyDetailsText,
              ]}>
              {store.phone_number}
            </Text>
          </View>
          <View style={styles.contentMyDetails}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.textAlignLeft,
                styles.contentMyDetailsText,
              ]}>
              {store.ip}
            </Text>
          </View>
          <View style={styles.contentMyDetails}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.textAlignLeft,
                styles.contentMyDetailsText,
              ]}>
              {store.legal_name}
            </Text>
          </View>
          <View style={styles.contentMyDetails}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.textAlignLeft,
                styles.contentMyDetailsText,
              ]}>
              {store.inn}
            </Text>
          </View>
          <View style={styles.contentMyDetails}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.textAlignLeft,
                styles.contentMyDetailsText,
              ]}>
              {store.ogrn}
            </Text>
          </View>
          <View style={styles.contentMyDetails}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                globalStyles.textAlignLeft,
                styles.contentMyDetailsText,
              ]}>
              {store.bill_number}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.accountStateChange}
            onPress={logOutFunc}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                styles.textUnderline,
              ]}>
              Выйти из профиля
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountStateChange}>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.weightLight,
                styles.textUnderline,
              ]}>
              Удалить профиль
            </Text>
          </TouchableOpacity>
          <View style={styles.appBtnView}>
            <AppButton
              text={'Редактировать'}
              stylesContainer={styles.appBtnContainer}
              stylesText={styles.appBtnText}
              onPress={() => onPressFunc(EditMyDetailsName)}
            />
          </View>
        </View>
      </View>
      <ChangePasswordModal
        visible={modalState}
        modalFunc={modalFunc}
        loadingFunc={loadingFunc}
        propsNavigation={navigation}
      />
      <Loading loading={loading} />
    </ScrollView>
  );
};
