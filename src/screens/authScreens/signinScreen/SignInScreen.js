import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {checkUser, setTokens} from '../../../utils';
import axiosInstance from '../../../networking/axiosInstance';
import {
  Colors,
  globalStyles,
  LoremName,
  SET_CUSTOMER,
  SET_SHOP,
  SignupName,
  VerifyPhoneName,
} from '../../../constants';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {
  AppButton,
  AppForm,
  AppInput,
  BackButton,
  globalWidth,
  Loading,
  passwordValidate,
  validateEmail,
} from '../../../components';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import line from '../../../assets/images/line.png';
import pinkMonster from '../../../assets/images/pinkMonster.png';
import giftIconPink from '../../../assets/images/giftIconPink.png';
import SwitchToggle from 'react-native-switch-toggle';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

export const SignIn = ({navigation}) => {
  const [phone, setPhone] = useState('+7');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [jwtToken, setJwtToken] = useState('');

  const getFcmToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      if (!!fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
      return fcmToken;
    } catch (error) {
      alert(error?.message);
    }
  };

  const onChangeTextFunc = (e, set) => {
    setError('');
    set(e);
  };
  const navigationFunc = async () => {
    setLoading(true);
    try {
      const data = {phone_number: phone};
      const response = await axiosInstance.post(
        '/users/register/buyer/call',
        data,
      );
      console.log('navigationFunc ', response.data);
      setJwtToken(response.data.token);
      await postFcmToken(response.data.token);
      await axiosFunc();
      
      navigation.navigate(VerifyPhoneName, {phone});
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // console.log(e);
    }
  };
  const onPressFunc = () => {
    if (phone.length > 8 && status) {
      navigationFunc();
    } else if (phone.length <= 8) {
      setError('Неверный номер телефона');
    } else if (!status) {
      setError(
        'Для продолжения необходимо согласиться с правилами и условиями',
      );
    }
  };
  const axiosFunc = async response => {
    try {
      if (Object.keys(response?.storesList).length) {
        navigation.replace('TabNavigation');

      } else {
        checkUser(response?.user_data, navigation);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const postFcmToken = async (token) => {
    let checkToken = await getFcmToken();
    console.log(' await Fcm Token:', checkToken); 

    try {
      const res = await axios.post(
        'https://podariadminkavsem.online/api/users/fcm',
        {
          is_seller: "false",
          token: checkToken,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log('res of users/fcm', res.data);
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        console.log('Error message:', e.response.data.message);
      } else {
        console.log('Error:', e);
      }    }
  };

  return (
    <ScrollView
      style={[
        globalStyles.container,
        Platform.OS === 'ios' && {paddingTop: -(getStatusBarHeight(true) + 6)},
      ]}
      bounces={false}>
      <View style={[styles.container]}>
        <View style={styles.headerContainer}>
          <View style={styles.backContainer}>
            <BackButton navigation={navigation} />
          </View>
          <Image source={pinkMonster} style={styles.pinkMonster} />
          <Image source={line} style={styles.lineImg} />
        </View>
        <View style={styles.formContainer}>
          <AppForm>
            <View style={styles.formHeader}>
              <Image source={giftIconPink} style={styles.giftIconPink} />
              <Text style={[styles.titleForm, globalStyles.titleText]}>
                Войти в учетную запись
              </Text>
            </View>
            <View>
              <View style={styles.inputContainer}>
                <AppInput
                  placeholder={'Телефон'}
                  keyboardType={'phone-pad'}
                  value={phone}
                  defaultValue={phone}
                  onChangeText={e => {
                    if (e.length <= 12) {
                      onChangeTextFunc(e, setPhone);
                    }
                  }}
                  style={styles.input}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.error}>{error}</Text>
              </View>
              <AppButton text={'Войти'} onPress={() => onPressFunc()} />
              <View style={styles.switchContainer}>
                <CheckBox
                  onClick={() => {
                    setStatus(!status);
                    setError('');
                  }}
                  isChecked={status}
                />
                <View style={styles.switchContainerText}>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.titleTextSmall,
                      styles.checkStyle,
                    ]}>
                    Я соглашаюсь с{' '}
                  </Text>
                  <TouchableOpacity
                    style={styles.touchCont}
                    onPress={() => {
                      navigation.navigate(LoremName, {
                        name: 'Политикой \nконфиденциальности',
                        text:
                          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                          '\n' +
                          'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                      });
                    }}>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.titleTextSmall,
                        styles.SignInTextBold,
                      ]}>
                      Политикой конфиденциальности
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.titleTextSmall,
                      styles.checkStyle,
                    ]}>
                    {' '}
                    и{' '}
                  </Text>
                  <TouchableOpacity
                    style={styles.touchCont}
                    onPress={() => {
                      navigation.navigate(LoremName, {
                        name: 'Соглашение об обработке\nперсональных данных',
                        text:
                          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                          '\n' +
                          'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                      });
                    }}>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.titleTextSmall,
                        styles.SignInTextBold,
                      ]}>
                      Условиями использования приложения
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </AppForm>
        </View>
      </View>
      <Loading loading={loading} />
    </ScrollView>
  );
};
