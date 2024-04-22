import React, {useState} from 'react';
import {styles} from './styles';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {DeleteShopData, Loading, WaitingForm} from '../../../../components';
import {
  MapsScreenName,
  ProfileScreenName,
  SET_CUSTOMER,
} from '../../../../constants';
import axiosInstance from '../../../../networking/axiosInstance';
import {
  globalStyles,
  Colors,
  DeleteShopName,
  AddPromoCodeName,
  OkayPromoName,
} from '../../../../constants';
import {
  AppButton,
  BackButton,
  PromoCodeForm,
  PromoCodeData,
  AppInput,
} from '../../../../components';
import calendar from '../../../../assets/images/calendar.png';
import DatePicker from 'react-native-date-picker';
import {setTokens} from '../../../../utils';

export const AddPromoCodeScreen = ({navigation, route}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [event, setEvent] = useState('');
  const [DateState, setDateState] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChangeFunc = (e, set) => {
    set(e);
    setError('');
  };
  const navigationFunc = () => {
    if (text && event && DateState) {
      axiosFunc();
    } else if (!text) {
      setError('Введите название события');
    } else if (!event) {
      setError('Введите название вашего промокода');
    } else if (!DateState) {
      setError('Укажите дату');
    }
  };
  const axiosFunc = async () => {
    setLoading(true);
    try {
      const data = {
        event_name: text,
        text: event,
        date: DateState,
      };
      const response = await axiosInstance.post('/promocodes', data);
      navigation.navigate(OkayPromoName);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      bounces={false}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.blueBackground}
      />
      <View style={[styles.content]}>
        <View style={styles.cont}>
          <BackButton navigation={navigation} />
          <View>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.textAlignLeft,
                globalStyles.titleTextSmall4,
                styles.headerText,
              ]}>
              Событие
            </Text>
            <AppInput
              placeholder={'Напишите название события'}
              value={text}
              onChangeText={e => {
                onChangeFunc(e, setText);
              }}
            />
            <View style={[globalStyles.row, styles.contentCont]}>
              <View>
                <Text
                  style={[
                    globalStyles.titleText,
                    globalStyles.textAlignLeft,
                    globalStyles.titleTextSmall4,
                    ,
                    styles.headerTextData,
                  ]}>
                  Дата
                </Text>
                <TouchableOpacity
                  style={[globalStyles.row, styles.calCont]}
                  onPress={() => setOpen(true)}>
                  <Text>{date.toLocaleDateString('en-GB')}</Text>
                  <Image source={calendar} style={styles.calendarIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.inpStyle}>
                <Text
                  style={[
                    globalStyles.titleText,
                    globalStyles.textAlignLeft,
                    globalStyles.titleTextSmall4,
                    ,
                    styles.headerTextPromoCode,
                  ]}>
                  Промокод
                </Text>
                <AppInput
                  placeholder={'Придумайте промокод'}
                  value={event}
                  style={styles.input}
                  onChangeText={e => {
                    onChangeFunc(e.toUpperCase(), setEvent);
                  }}
                />
              </View>
            </View>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.textAlignLeft,
                globalStyles.weightLight,
                ,
                styles.sale,
              ]}>
              Скидка 5%
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          {error && <Text style={styles.error}>{error}</Text>}
          <AppButton
            text={'Сохранить'}
            stylesContainer={styles.containerBtn}
            onPress={() => navigationFunc()}
          />
        </View>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        locale={'ru'}
        confirmText="OK" 
        cancelText="Отмена" 
        is24hourSource={'locale'}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          const yyyy = date.getFullYear();
          let mm = date.getMonth() + 1;
          let dd = date.getDate();
          const formattedToday = dd + '/' + mm + '/' + yyyy;
          setError('');
          setDateState(formattedToday);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Loading loading={loading} />
    </ScrollView>
  );
};
