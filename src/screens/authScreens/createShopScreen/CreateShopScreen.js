import {styles} from './styles';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axiosInstance from '../../../networking/axiosInstance';
import cameraIcon from '../../../assets/images/cameraIcon.png';
import {
  AppButton,
  AppInput,
  BackButton,
  ChooseImage,
  Loading,
} from '../../../components';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import closeIcon from '../../../assets/images/closeIcon.png';
import {BaseUrl, globalStyles, imageUrl, SET_SHOP} from '../../../constants';
import SelectDropdown from 'react-native-select-dropdown';

export const CreateShopScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const store = useSelector(st => st.customer);
  const shop = useSelector(st => st.activeStore);
  const routeShop = route?.params?.shop;
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState([]);
  const [street, setStreet] = useState('');
  const [proShop, setProShop] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    countryFetch();
  }, []);
  useEffect(() => {
    if (routeShop) {
      setPhoto(imageUrl + '/' + routeShop.logo_url);
      setName(routeShop.title);
      setStreet(routeShop.address);
      setSelectedCountry(route.city_id);
      setProShop(routeShop.about_store);
    }
  }, []);
  const countryFetch = async () => {
    try {
      const response = await axiosInstance.get('/cities/active');
      setCountry(response?.data?.cities);
    } catch (e) {
    }
  };

  const onChangeTextFunc = (e, set) => {
    set(e);
  };

  const requestCameraPermission = () => {
    try {
      ChooseImage(async imageRes => {
        if (!imageRes.didCancel) {
          setPhoto(imageRes.assets[0]);
        }
      });
    } catch (err) {}
  };
  const onPressFunc = async () => {
    if (photo && name && selectedCountry && street) {
      setLoading(true);
      if (!routeShop) {
        try {
          const formData = new FormData();
          formData.append('city_id', selectedCountry._id);
          formData.append('address', street);
          formData.append('title', name);
          formData.append('about_store', proShop);
          formData.append('logo', {
            uri: photo.uri,
            name: 'avatar.jpg',
            type: 'image/jpg',
          });
          const response = await axiosInstance.post('/stores/my', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          if (!Object.keys(shop).length) {
            await activeShopFunc();
          }
          navigation.replace('TabNavigation');
          setLoading(false);
        } catch (e) {
          setLoading(false);
        }
      } else {
        try {
          const formData = new FormData();
          formData.append('city_id', selectedCountry._id);
          formData.append('id', routeShop._id);
          formData.append('address', street);
          formData.append('title', name);
          formData.append('about_store', proShop);
          if (photo?.uri) {
            formData.append('logo_img', {
              uri: photo.uri,
              name: 'avatar.jpg',
              type: 'image/jpg',
            });
          }
          const response = await axiosInstance.put('/stores/my', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          navigation.replace('TabNavigation');
          setLoading(false);
        } catch (e) {
          setLoading(false);
        }
      }
    }
  };

  const activeShopFunc = async () => {
    try {
      const response = await axiosInstance.get('/users/profile/seller');
      const arr = response.data.storesList[0];
      dispatch({
        type: SET_SHOP,
        payload: arr,
      });
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollContainer}
      bounces={false}>
      <View>
        {route?.params?.state && (
          <BackButton navigation={navigation} stylesBack={styles.backBtn} />
        )}
        <View style={styles.cameraContainer}>
          {photo ? (
            <Image
              source={{uri: typeof photo === 'object' ? photo.uri : photo}}
              style={styles.containerImg}
            />
          ) : (
            <View style={styles.cameraContent}>
              <Image source={cameraIcon} style={styles.cameraImg} />
              <Text
                style={[
                  globalStyles.titleText,
                  styles.cameraText,
                  globalStyles.titleTextSmall4,
                  globalStyles.weightLight,
                ]}>
                Добавьте фотографию или логотип магазина
              </Text>
            </View>
          )}
          <AppButton
            text={'Загрузить'}
            stylesContainer={styles.buttonContainer}
            onPress={() => requestCameraPermission()}
          />
          <View style={styles.imageNameContainer}>
            {photo && (
              <>
                <Text style={styles.logoText}>{photo.type}</Text>
                <TouchableOpacity
                  style={styles.closeContainer}
                  onPress={() => setPhoto('')}>
                  <Image source={closeIcon} style={styles.closeIcon} />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
        <View style={styles.contentContainer}>
          <AppInput
            placeholder={'Название магазина'}
            style={styles.inputContainer}
            onChangeText={e => onChangeTextFunc(e, setName)}
            value={name}
          />
          <View style={styles.dropCont}>
            <SelectDropdown
              data={country}
              buttonStyle={styles.btnStyleDrop}
              dropdownStyle={styles.categoryInput}
              defaultButtonText={'Город'}
              rowTextStyle={styles.choosePhotoText}
              onSelect={selectedItem => {
                setSelectedCountry(selectedItem);
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.city_name;
              }}
              rowTextForSelection={selectedItem => {
                return selectedItem.city_name;
              }}
            />
          </View>
          <AppInput
            placeholder={'Адрес'}
            value={street}
            style={styles.inputContainer}
            onChangeText={e => onChangeTextFunc(e, setStreet)}
          />
          <View>
            <Text
              style={[
                globalStyles.titleText,
                globalStyles.titleTextSmall4,
                styles.inputBigText,
              ]}>
              Про магазин
            </Text>
            <AppInput
              style={styles.inputBig}
              onChangeText={e => onChangeTextFunc(e, setProShop)}
              value={proShop}
              editable
              numberOfLines={5}
              multiline
            />
          </View>
        </View>
        <AppButton
          text={'Сохранить'}
          stylesContainer={styles.btnStyle}
          onPress={onPressFunc}
        />
      </View>
      <Loading loading={loading} />
    </ScrollView>
  );
};
