import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

import DatePicker from 'react-native-date-picker';
import {
  AppButton,
  AppInput,
  ChooseImage,
  FormCategory,
  globalHeight,
  globalWidth,
  Loading,
  MultipleImage,
  TrushForm,
} from '../../../../components';
import {
  AddScreenName,
  BaseUrl,
  Colors,
  globalStyles,
  HomeName,
  HomeScreenName,
  imageUrl,
  SaveItemName,
} from '../../../../constants';
import axiosInstance from '../../../../networking/axiosInstance';
import {useSelector} from 'react-redux';
import korz from '../../../../assets/images/korz.png';
import {Marker, Polyline, YaMap} from 'react-native-yamap';
import wing from '../../../../assets/images/wing.png';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getStatusBarHeight} from 'react-native-status-bar-height';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const AddScreen = ({navigation, route}) => {
  const [isCanCancelContentTouches, setCanCancelContentTouches] =
    React.useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [promoFlag, setPromoFlag] = useState(false);
  const [promoText, setPromoText] = useState('');
  const [banner, setBanner] = useState('');
  const [location, setLocation] = useState(null);
  const [locationEnd, setLocationEnd] = useState(null);
  const [points, setPoints] = useState([]);
  const [delivery, setDelivery] = useState(0);
  const store = useSelector(st => st.customer);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateNum, setDateNum] = useState(null);
  const [dateDate, setDateDate] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [address, setAddress] = useState(null);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState('');
  const [km, setKm] = useState('');
  const [error, setError] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [addressAll, setAddressAll] = useState('');
  const storePlace = data[0]?.user.city + ' ' + data[0]?.user.address;
  const [userPlace, setUserPlace] = useState(storePlace);
  const [url, setUrl] = useState('');
  const [ref, setRef] = useState(null);
  const [value, setValue] = useState('');
  const [postcard, setPostCard] = useState('');
  const [allCount, setAllCount] = useState(0);
  const [fullCount, setFullCount] = useState(0);
  const [timeToGetReady, setTimeToGetReady] = useState('');
  const [promoCodeNumber, setPromoCodeNumber] = useState();
  const [workDay, setWorkDay] = useState();
  const newDate = new Date();
  newDate.setFullYear(newDate.getFullYear() + 1);
  const stateLoad = route?.params?.st;
  const [currentTime, setCurrentTime] = useState('');
  const [userTimeZone, setUserTimeZone] = useState('');

  useEffect(() => {
    const getCurrentTime = () => {
      const date = new Date();
      setCurrentTime(date.toISOString());
    };

    getCurrentTime();

    const getUserTimeZone = () => {
      const offsetInMinutes = new Date().getTimezoneOffset();
      console.log('offsetInMinutes', offsetInMinutes);

      const sign = offsetInMinutes < 0 ? '+' : '-';
      const offsetInHours = Math.abs(offsetInMinutes) / 60;
      console.log('offsetInHours', offsetInHours);

      setUserTimeZone(`GMT${sign}${offsetInHours}:00`);
    };

    getUserTimeZone();
  }, []);

  useEffect(() => {
    if (data[0]?.user.address) {
      setAddressAll(data[0].user.address);
    }
  }, [data[0]?.user.address]);

  const onPressFunc = () => {
    if (Object.keys(data).length) {
      if (name && phone && dateDate && dateTime && addressAll && km) {
        axiosFunc();
      } else if (!name) {
        setError('Укажите Имя');
      } else if (!phone) {
        setError('Укажите номер получателя');
      } else if (!dateDate) {
        setError('Укажите дата');
      } else if (!dateTime) {
        setError('Укажите время');
      } else if (!addressAll) {
        setError('Укажите адрес');
      } else if (!km) {
        setError('Укажите адрес');
      }
    }
  };
  const countryChangeFunc = it => {
    var str = it.GeoObject.Point.pos;
    var stringArray = str.split(/(\s+)/);
    setLocation({
      lat: +stringArray[2],
      lon: +stringArray[0],
      zoom: 9,
      name: it.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[2]
        .name,
      address:
        it.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[3]
          .name +
        ' ' +
        it.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[4]
          .name,
    });
  };

  let components = dateDate.split('-');

  let year = components[0];
  let month = components[1];
  let day = components[2];
  let formattedDate = [day, month, year].join('.');

  const startDataYandex = () => {
    axios
      .get(
        `https://geocode-maps.yandex.ru/1.x?apikey=da4e12cb-3403-409e-948c-c34e4dfaafaa&geocode=${userPlace}&format=json`,
      )
      .then(res => {
        countryChangeFunc(
          res.data.response.GeoObjectCollection.featureMember[0],
        );
      })
      .catch(e => {
        // console.log(e, "ff,'fffff");
      });
  };

  useEffect(() => {
    if (userPlace) {
      startDataYandex();
    }
  }, [userPlace]);

  useEffect(() => {
    if (addressAll.length > 4) {
      let timer = setTimeout(() => {
        searchDataYandex(store.city + ' ' + addressAll);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [addressAll]);

  const searchDataYandex = st => {
    axios
      .get(
        `https://geocode-maps.yandex.ru/1.x?apikey=da4e12cb-3403-409e-948c-c34e4dfaafaa&geocode=${st}&format=json`,
      )
      .then(res => {
        let loc =
          res.data.response.GeoObjectCollection.featureMember.length === 1
            ? res.data.response.GeoObjectCollection.featureMember[0].GeoObject
                .description +
              ' ' +
              res.data.response.GeoObjectCollection.featureMember[0].GeoObject
                .name
            : res.data.response.GeoObjectCollection.featureMember[1].GeoObject
                .description +
              ' ' +
              res.data.response.GeoObjectCollection.featureMember[1].GeoObject
                .name;

        const cityFromAddress =
          res.data.response.GeoObjectCollection.featureMember.length === 1
            ? res.data.response.GeoObjectCollection.featureMember[0].GeoObject
                .description
            : res.data.response.GeoObjectCollection.featureMember[1].GeoObject
                .description;

        if (!cityFromAddress.includes(store.city)) {
          Alert.alert('', 'Выбранный адрес находится в другом городе');
          return;
        }

        axios
          .get(
            `https://maps.googleapis.com/maps/api/directions/json?destination=${loc}&origin=${userPlace}&key=AIzaSyDGnTNMKk7nklAM7Z3dWTV5_JV_auarQVs`,
          )
          .then(res => {
            let data = res.data.routes[0].legs[0];

            const k = Math.ceil(data.distance.value / 1000);
            setKm(k);
            let polylineRes = [
              {
                lat: data.start_location.lat,
                lon: data.start_location.lng,
              },
            ];
            setLocationEnd({
              lat: data.end_location.lat,
              lon: data.end_location.lng,
              zoom: 10,
            });
            for (let i = 0; i < data.steps.length; i++) {
              polylineRes.push({
                lat: data.steps[i].end_location.lat,
                lon: data.steps[i].end_location.lng,
              });
            }

            setPoints([...polylineRes]);
          })
          .catch(e => {
            Alert.alert('', 'не найдено');
          });
      })
      .catch(e => {
        Alert.alert('', 'не найдено');
      });
  };

  const getValue = async () => {
    try {
      const response = await axiosInstance.post('/orders/for_payment');
      console.log('orders for payment', response.data)

      setValue(response.data.full_amount.$numberDecimal);
      return response.data.full_amount.$numberDecimal;
    } catch (e) {
      console.log(e);
    }
  };
  const axiosFunc = async () => {
    setLoading(true);

    try {
      const data = {
        address: `${address ? `${address}п.` : ''} ${
          address1 ? `${address1}э.` : ''
        } ${address2 ? `${address2}кв.` : ''}`,
        name,
        phone_number: phone,
        city: store.city,
        day: dateDate,
        time: dateTime,
        comment,
        addressAll: addressAll,
        delivery: km <= 5 ? 0 : km,
        localTime: currentTime,
        timeZone: userTimeZone,
      };
      console.log('localTime', data.localTime);
      console.log('time zone ', data.timeZone);

      if (promoFlag) {
        data.promocode = promoCode;
      }
      if (postcard) {
        data.postcard = postcard;
      }

      const response = await axiosInstance.post('/orders', data);
      console.log('orders', response.data)

      const value = await getValue();
      paymentFunc(value);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (e?.response?.data?.message) {
        setError(e?.response?.data?.message);
        console.log('axios func error');
      }
    }
  };

  const paymentFunc = async value => {
    try {
      const response = await axiosInstance.post('/orders/payment', {
        value: value,
      });
      console.log('orders payment', response.data)

      setUrl(response.data.data);
    } catch (e) {
      console.log('payment func', e);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      if (stateLoad) {
        setLoading(false);
      }
      getFav();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getBanner();
    getFav();
  }, []);

  const getBanner = async () => {
    try {
      const response = await axiosInstance.get('/goods/banner');
      setBanner(response.data.banner);
    } catch (e) {
      // console.log(e, 'banner');
    }
  };

  const activeFunc = async () => {
    try {
      const response = await axiosInstance.post('/promocodes/check', {
        text: promoCode,
      });
      console.log('response', response.data)
      setPromoFlag(response.data);
      setPromoCodeNumber(response.data.promoCom)
      if (!response.data) {
        setPromoText('Неверный промокод');
      }
    } catch (e) {
      console.log('promocodes check',e);
    }
  };

  const onChangeFunc = (e, set) => {
    setError('');
    set(e);
  };
  const localTime = new Date();
  const dayOfWeek = localTime.getDay();
  const hours = localTime.getHours();

  const getFav = async () => {
    try {
      const response = await axiosInstance.get('/carts');
      if (Object.keys(response.data).length) {
        setFullCount(response.data[0].items[0].good_id.count);
        setTimeToGetReady(response.data[0].items[0].good_id.time_to_get_ready);
        setWorkDay({
          weekdays: response.data[0].items[0].store_id.weekdays,
          weekends: response.data[0].items[0].store_id.weekends,
        });

        setData(response.data);
        setUserPlace(
          response.data[0]?.items[0]?.store_id.city +
            ' ' +
            response.data[0]?.items[0]?.store_id.address,
        );
        let sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          sum +=
            response.data[i].items[0].good_id?.price *
            response.data[i].items[0].count;
        }
        setAllCount(sum);
        setLoading(false);
        setDelivery(
          +response.data[0].items[0].store_id?.distance.$numberDecimal,
        );
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e, 'fff');
    }
  };

  const setOpenFunc = num => {
    setDateNum(num);
    setOpen(true);
  };
  const successFunc = event => {
    // console.log('successFunc event', event.nativeEvent.url)
    if (event?.nativeEvent?.url?.includes('success')) {
      try {
        const response = axiosInstance.post('/orders/confirm');
        console.log('orders confirm', response)
      } catch (e) {
        console.log('successFuncч func error', e);
        // console.log(e);
      }
      navigation.goBack();
    } else if (
      event?.nativeEvent?.code === -6 ||
      event?.nativeEvent?.code === -1004
    ) {
      navigation.goBack();
    }
  };

  const [deliveryPrice, setDeliveryPrice] = useState();
  useEffect(() => {
    if (km > 5 && km && delivery) {
      setDeliveryPrice(km * delivery);
    }
  }, [km, delivery]);

  const discountedTotal = promoFlag
    ? (allCount + (km > 5 ? deliveryPrice : 0)) * 0.95
    : allCount + (km > 5 ? deliveryPrice : 0);

    const subtotal = allCount;
const deliveryTotal = km > 5 ? deliveryPrice : 0; 

const discountPercentage = promoFlag ? (promoCodeNumber === 15 ? 0.15 : 0.05) : 0;

const discount = subtotal * discountPercentage;

const discountedSubtotal = subtotal - discount;

const total = discountedSubtotal + deliveryTotal;


  return (
    <View
      style={[
        globalStyles.container,
        Platform.OS === 'ios' &&
          !url && {marginTop: -(getStatusBarHeight(true) + 6)},
      ]}>
      {Object.keys(data).length ? (
        url ? (
          <WebView
            ref={setRef}
            source={{uri: url}}
            style={{flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 0}}
            onError={event => {
              successFunc(event);
            }}
            goBack={() => {
              navigation.goBack();
            }}
            onLoadEnd={event => {
              successFunc(event);
            }}
          />
        ) : (
          <View style={[globalStyles.container]}>
            <ScrollView
              bounces={false}
              contentContainerStyle={globalStyles.scrollContainer}
              canCancelContentTouches={isCanCancelContentTouches}
              scrollEnabled={isCanCancelContentTouches}>
              <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor={[Colors.blueBackground]}
              />
              <View
                style={[
                  styles.headerContainer,
                  Platform.OS === 'ios' &&
                    !url && {
                      paddingTop: getStatusBarHeight(true) + globalHeight(30),
                    },
                ]}>
                <Text style={styles.addText}>Корзина</Text>
                <View style={styles.cameraContainer}>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.textAlignLeft,
                      globalStyles.titleTextSmall,
                      globalStyles.weightLight,
                      styles.titleForm,
                    ]}>
                    Сделать заказ можно только выбрав товары одного магазина
                  </Text>
                </View>
                <>
                  <View style={styles.shopContAll}>
                    <View>
                      <View style={styles.shopCont}>
                        <Image
                          source={{
                            uri:
                              imageUrl +
                              '/' +
                              data[0]?.items[0]?.store_id?.logo_url,
                          }}
                          style={styles.imgShop}
                        />
                        <View style={styles.contShp}>
                          <Text
                            style={[
                              globalStyles.titleText,
                              globalStyles.textAlignLeft,
                              globalStyles.titleTextSmall,
                              globalStyles.weightLight,
                            ]}>
                            Магазин
                          </Text>
                          <Text
                            style={[
                              globalStyles.titleText,
                              globalStyles.textAlignLeft,
                              styles.ops,
                            ]}>
                            {data[0]?.items[0]?.store_id?.title}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {data.map((item, index) => {
                    return (
                      <TrushForm
                        item={item}
                        key={index}
                        index={index}
                        navigation={navigation}
                        setAllCount={setAllCount}
                        setLoading={setLoading}
                        allCount={allCount}
                        fullCount={fullCount}
                        // plusMinus={getFav}
                      />
                    );
                  })}
                  <View style={styles.applicationsContainer}>
                    <View style={styles.changeContent}>
                      <View style={[globalStyles.row]}>
                        <Image
                          source={{uri: BaseUrl + '/' + banner}}
                          style={styles.imgForm2}
                        />
                        <View style={styles.OpenerCont}>
                          <Text
                            style={[
                              globalStyles.titleText,
                              globalStyles.weightLight,
                              globalStyles.titleTextSmall,
                              globalStyles.textAlignLeft,
                            ]}>
                            Текст на открытке:
                          </Text>
                          <AppInput
                            placeholder={'Введите текст для открытки'}
                            style={styles.otkritka}
                            onChangeText={e => {
                              setPromoText('');
                              onChangeFunc(e, setPostCard);
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </>
              </View>
              <View style={styles.headerContainer}>
                <View style={[globalStyles.row, styles.footHead]}>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.weightLight,
                      globalStyles.titleTextSmall,
                      globalStyles.textAlignLeft,
                    ]}>
                    Сумма:{' '}
                    <Text style={[globalStyles.weightBold]}>{allCount} р</Text>
                  </Text>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.weightLight,
                      globalStyles.titleTextSmall,
                      globalStyles.textAlignLeft,
                    ]}>
                    Доставка:{' '}
                    <Text style={[globalStyles.weightBold]}>
                      {km > 5 ? deliveryPrice : 0} р
                    </Text>{' '}
                  </Text>
                </View>
                <View style={styles.cont}>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.weightLight,
                      globalStyles.titleTextSmall,
                      globalStyles.textAlignLeft,
                      styles.proText,
                    ]}>
                    Промокод
                  </Text>
                  <View style={styles.proCont}>
                    {promoFlag ? (
                      <Text
                        style={[
                          globalStyles.titleText,
                          globalStyles.weightLight,
                          styles.proTextActive,
                        ]}>
                        Промокод Активирован
                      </Text>
                    ) : (
                      <>
                        <AppInput
                          placeholder={'Промокод'}
                          style={styles.inp}
                          autoCapitalize={'characters'}
                          value={promoCode}
                          onChangeText={e => {
                            setPromoText('');
                            onChangeFunc(e.toUpperCase(), setPromoCode);
                          }}
                        />
                        <AppButton
                          text={'Активировать'}
                          stylesText={styles.textBtn}
                          stylesContainer={styles.contBtn}
                          onPress={() => {
                            activeFunc();
                          }}
                        />
                      </>
                    )}
                  </View>
                  {promoText && (
                    <Text style={[globalStyles.error, styles.promoErr]}>
                      {promoText}
                    </Text>
                  )}
                </View>
                <View style={[globalStyles.row, styles.footHead]}>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.weightLight,
                      globalStyles.titleTextSmall,
                      globalStyles.textAlignLeft,
                    ]}>
                    Итоговая сумма:{' '}
                    <Text style={[globalStyles.weightBold]}>
                      {total} р
                    </Text>
                  </Text>
                  <Text
                    style={[
                      globalStyles.titleText,
                      globalStyles.weightLight,
                      globalStyles.titleTextSmall,
                      globalStyles.textAlignLeft,
                    ]}></Text>
                </View>
                <View>
                  <View style={styles.contAdd}>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.weightLight,
                        globalStyles.titleTextSmall,
                        globalStyles.textAlignLeft,
                      ]}>
                      Город
                    </Text>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.weightLight,
                        globalStyles.titleTextSmall,
                        globalStyles.textAlignLeft,
                        styles.text,
                      ]}>
                      {store.city}
                    </Text>
                  </View>
                  <View style={styles.contAdd}>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.weightLight,
                        globalStyles.titleTextSmall,
                        globalStyles.textAlignLeft,
                      ]}>
                      Адрес
                    </Text>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.weightLight,
                        globalStyles.titleTextSmall,
                        globalStyles.textAlignLeft,
                        styles.text,
                      ]}>
                      {store.address}
                    </Text>
                  </View>
                  <View style={styles.flatmateCont}>
                    <View>
                      <Text
                        style={[
                          globalStyles.titleText,
                          globalStyles.weightLight,
                          globalStyles.titleTextSmall,
                          globalStyles.textAlignLeft,
                        ]}>
                        Подъезд
                      </Text>
                      <AppInput
                        placeholder={''}
                        style={styles.inpSmall}
                        keyboardType={'numeric'}
                        onChangeText={e => onChangeFunc(e, setAddress)}
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          globalStyles.titleText,
                          globalStyles.weightLight,
                          globalStyles.titleTextSmall,
                          globalStyles.textAlignLeft,
                        ]}>
                        Этаж
                      </Text>
                      <AppInput
                        placeholder={''}
                        style={styles.inpSmall}
                        keyboardType={'numeric'}
                        onChangeText={e => onChangeFunc(e, setAddress1)}
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          globalStyles.titleText,
                          globalStyles.weightLight,
                          globalStyles.titleTextSmall,
                          globalStyles.textAlignLeft,
                        ]}>
                        Квартира
                      </Text>
                      <AppInput
                        placeholder={''}
                        style={styles.inpSmall}
                        keyboardType={'numeric'}
                        onChangeText={e => onChangeFunc(e, setAddress2)}
                      />
                    </View>
                  </View>
                  <View>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.weightLight,
                        globalStyles.titleTextSmall,
                        globalStyles.textAlignLeft,
                        styles.textCont,
                      ]}>
                      Имя получателя
                    </Text>
                    <AppInput
                      placeholder={'Имя получателя'}
                      onChangeText={e => onChangeFunc(e, setName)}
                    />
                  </View>
                  <View style={styles.flatmateContCont}>
                    <View style={styles.date}>
                      <Text
                        style={[
                          globalStyles.titleText,
                          globalStyles.weightLight,
                          globalStyles.titleTextSmall,
                          globalStyles.textAlignLeft,
                        ]}>
                        На когда
                      </Text>
                      <TouchableOpacity
                        style={[globalStyles.row, styles.graphicContent]}
                        onPress={() => setOpenFunc(false)}>
                        <Text
                          style={[
                            globalStyles.titleText,
                            globalStyles.textAlignLeft,
                            globalStyles.titleTextSmall,
                          ]}>
                          {dateDate ? formattedDate : '00-00-00'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text
                        style={[
                          globalStyles.titleText,
                          globalStyles.weightLight,
                          globalStyles.titleTextSmall,
                          globalStyles.textAlignLeft,
                        ]}>
                        Время
                      </Text>
                      <TouchableOpacity
                        style={[globalStyles.row, styles.graphicContent]}
                        onPress={() => setOpenFunc(true)}>
                        <Text
                          style={[
                            globalStyles.titleText,
                            globalStyles.textAlignLeft,
                            globalStyles.titleTextSmall,
                          ]}>
                          {dateTime ? dateTime : '00-00'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.weightLight,
                        globalStyles.titleTextSmall,
                        globalStyles.textAlignLeft,
                        styles.textCont,
                      ]}>
                      Телефон получателя
                    </Text>
                    <AppInput
                      placeholder={'Телефон'}
                      keyboardType={'numeric'}
                      onChangeText={e => onChangeFunc(e, setPhone)}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        globalStyles.titleText,
                        globalStyles.weightLight,
                        globalStyles.titleTextSmall,
                        globalStyles.textAlignLeft,
                        styles.textCont,
                      ]}>
                      Комментарий
                    </Text>
                    <AppInput
                      style={styles.inputBig}
                      editable
                      numberOfLines={5}
                      multiline
                      onChangeText={e => onChangeFunc(e, setComment)}
                    />
                  </View>
                </View>
                {error && <Text style={globalStyles.error}>{error}</Text>}
                <AppButton
                  text={'Заказать'}
                  stylesContainer={styles.contButton}
                  onPress={onPressFunc}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#F4FCFF',
                }}>
                {location && (
                  <YaMap
                    initialRegion={location}
                    zoomGesturesEnabled={false}
                    scrollGesturesEnabled={false}
                    nightMode={false}
                    mapType={'vector'}
                    style={{
                      marginHorizontal: globalWidth(20),
                      height: height / 2.5,
                    }}>
                    {points.length ? (
                      <Polyline points={points} strokeColor={'black'} />
                    ) : null}
                    <Marker point={location} scale={0.06} source={wing} />
                    {locationEnd ? (
                      <Marker point={locationEnd} scale={0.06} source={wing} />
                    ) : null}
                  </YaMap>
                )}
              </View>
            </ScrollView>
            <DatePicker
              modal
              open={open}
              locale={'ru'}
              is24hourSource={'locale'}
              mode={dateNum ? 'time' : 'date'}
              title={dateNum ? 'Выберите время' : 'Выберите дату'}
              confirmText="OK" // Set your confirm button text here
              cancelText="Отмена" // Set your cancel button text here
              format={'MMM'}
              showIcon={false} // Disable the calendar icon
              minimumDate={dateNum ? null : new Date()}
              maximumDate={dateNum ? null : newDate}
              date={date}
              onConfirm={date => {
                if (dateNum) {
                  const hours = date.getHours();
                  const minutes = date.getMinutes();
                  const m = '' + minutes;
                  const min = m.length === 1 ? `0${minutes}` : minutes;
                  const h = '' + hours;
                  const ho = h.length === 1 ? `0${hours}` : hours;
                  setDateTime(`${ho}:${min}`);
                  setDate(date);
                } else {
                  const result = date.toLocaleDateString('en-GB');
                  let mm = date.getMonth() + 1;
                  const m = '' + mm;
                  const mmm = m.length === 1 ? `0${m}` : m;
                  let dd = date.getDate();
                  const d = '' + dd;
                  const ddd = d.length === 1 ? `0${d}` : d;
                  let yy = new Date().getFullYear();
                  let myDateString = yy + '-' + mmm + '-' + ddd; //(US)
                  setDateDate(myDateString);
                }
                setError('');
                setOpen(false);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        )
      ) : (
        <View
          style={[
            styles.contNoData,
            {opacity: loading ? 0 : 1},
            Platform.OS === 'ios' && {
              paddingTop: getStatusBarHeight(true) + globalHeight(30),
            },
          ]}>
          <Text
            style={[
              globalStyles.titleText,
              globalStyles.textAlignLeft,
              globalStyles.titleTextBig,
              styles.pustaText,
            ]}>
            Корзина
          </Text>
          <View>
            <View style={styles.korzCont}>
              <Image source={korz} style={styles.korz} />
            </View>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.titleTextBig,
                globalStyles.weightLight,
                styles.korzContText,
              ]}>
              Ваша корзина пуста
            </Text>
            <AppButton
              text={'Выбрать товары'}
              stylesContainer={styles.pustCont}
              onPress={() => navigation.navigate(HomeScreenName)}
            />
          </View>
          <View />
        </View>
      )}
      <Loading loading={loading} />
    </View>
  );
};
