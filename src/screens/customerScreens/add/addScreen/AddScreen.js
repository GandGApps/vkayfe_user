import React, {useEffect, useState} from "react";
import {styles} from "./styles";
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
    View
} from "react-native";
import WebView from "react-native-webview";

import DatePicker from "react-native-date-picker";
import {
    AppButton,
    AppInput,
    ChooseImage,
    FormCategory, globalHeight,
    Loading,
    MultipleImage,
    TrushForm
} from "../../../../components";
import {
    AddScreenName,
    BaseUrl,
    Colors,
    globalStyles,
    HomeName,
    HomeScreenName,
    SaveItemName
} from "../../../../constants";
import axiosInstance from "../../../../networking/axiosInstance";
import {useSelector} from "react-redux";
import korz from "../../../../assets/images/korz.png";
import {Marker, Polyline, YaMap} from "react-native-yamap";
import wing from "../../../../assets/images/wing.png";
import axios from "axios";
import {SafeAreaView} from "react-native-safe-area-context";
import {getStatusBarHeight} from "react-native-status-bar-height";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

export const AddScreen = ({navigation, route}) => {
    const [isCanCancelContentTouches, setCanCancelContentTouches] = React.useState(true);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [price, setPrice] = useState(0)
    const [promoFlag, setPromoFlag] = useState(false)
    const [promoText, setPromoText] = useState('')
    const [banner, setBanner] = useState('')
    const [location, setLocation] = useState({
        lat: 55.751244,
        lon: 37.618423,
        zoom: 7,
    });
    const [locationEnd, setLocationEnd] = useState(null);
    const [points, setPoints] = useState([]);
    const [delivery, setDelivery] = useState(0)
    const store = useSelector((st) => st.customer);
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateNum, setDateNum] = useState(null);
    const [dateDate, setDateDate] = useState('')
    const [promoCode, setPromoCode] = useState('');
    const [address, setAddress] = useState(null);
    const [address1, setAddress1] = useState(null);
    const [address2, setAddress2] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [comment, setComment] = useState('')
    const [km, setKm] = useState('')
    const [error, setError] = useState('')
    const [dateTime, setDateTime] = useState("");
    const [addressAll, setAddressAll] = useState('')
    const storePlace = data[0]?.user.city + ' ' + data[0]?.user.address
    const [userPlace, setUserPlace] = useState(storePlace)
    const [url, setUrl] = useState("");
    const [ref, setRef] = useState(null);
    const [value, setValue] = useState('')
    const [postcard, setPostCard] = useState('')
    const [allCount, setAllCount] = useState(0)
    const newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() + 1);
    const stateLoad = route?.params?.st
    const onPressFunc = () => {
        if (Object.keys(data).length) {
            if (name && phone && dateDate && dateTime && addressAll && km) {
                axiosFunc()
            } else if (!name) {
                setError('Укажите Имя')
            } else if (!phone) {
                setError('Укажите номер получателя')
            } else if (!dateDate) {
                setError('Укажите дата')
            } else if (!dateTime) {
                setError('Укажите время')
            } else if (!addressAll) {
                setError('Укажите адрес')
            } else if (!km) {
                setError('Укажите адрес')
            }
        }
    }
    const countryChangeFunc = (it) => {
        var str = it.GeoObject.Point.pos;
        var stringArray = str.split(/(\s+)/);
        setLocation({
            lat: +stringArray[2],
            lon: +stringArray[0],
            zoom: 9,
            name: it.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[2].name,
            address: it.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[3].name + ' ' + it.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[4].name
        });
    };


    const startDataYandex = () => {
        axios.get(`https://geocode-maps.yandex.ru/1.x?apikey=da4e12cb-3403-409e-948c-c34e4dfaafaa&geocode=${userPlace}&format=json`).then((res) => {
            countryChangeFunc(res.data.response.GeoObjectCollection.featureMember[0]);
        })
            .catch((e) => {
                console.log(e, "ff,'fffff");
            });
    };

    useEffect(() => {
        if (userPlace) {
            startDataYandex()
        }
    }, [userPlace])

    useEffect(() => {
        if (addressAll.length > 4) {
            let timer = setTimeout(() => {
                searchDataYandex(store.city + " " + addressAll);
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [addressAll])

    const searchDataYandex = (st) => {
        console.log(st)
        axios.get(`https://geocode-maps.yandex.ru/1.x?apikey=da4e12cb-3403-409e-948c-c34e4dfaafaa&geocode=${st}&format=json`).then((res) => {
            let loc = res.data.response.GeoObjectCollection.featureMember.length === 1 ?
                res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description + ' ' +  res.data.response.GeoObjectCollection.featureMember[0].GeoObject.name
                :
                res.data.response.GeoObjectCollection.featureMember[1].GeoObject.description + ' ' +  res.data.response.GeoObjectCollection.featureMember[1].GeoObject.name
            axios.get(`https://maps.googleapis.com/maps/api/directions/json?destination=${loc}&origin=${userPlace}&key=AIzaSyDGnTNMKk7nklAM7Z3dWTV5_JV_auarQVs`).then((res) => {
                let data = res.data.routes[0].legs[0];
                console.log(data.distance,userPlace,loc,Math.floor(data.distance.value/1000))
                // const k = +data.distance.text.match(/\d+/)[0];
                const k = Math.ceil(data.distance.value/1000)
                setKm(k)
                let polylineRes = [
                    {
                        lat: data.start_location.lat,
                        lon: data.start_location.lng,
                    }
                ]
                setLocationEnd({
                    lat: data.end_location.lat,
                    lon: data.end_location.lng,
                    zoom: 9,
                })
                for (let i = 0; i < data.steps.length; i++) {
                    polylineRes.push({
                        lat: data.steps[i].end_location.lat,
                        lon: data.steps[i].end_location.lng,
                    })
                }
                setPoints([...polylineRes]);
            })
                .catch((e) => {

                    Alert.alert(
                        "",
                        "не найдено",
                    );
                    console.log(e, "ff");
                });

        })
            .catch((e) => {
                Alert.alert(
                    "",
                    "не найдено",
                );
                console.log(e, "ff");
            });
    };

    const getValue = async () => {
        try {
            const response = await axiosInstance.post(`/orders/for_payment`);
            setValue(response.data.full_amount.$numberDecimal)
            return response.data.full_amount.$numberDecimal
        } catch (e) {
            console.log(e);
        }
    };
    const axiosFunc = async () => {
        setLoading(true)

        try {
            const data = {
                address: `${address ? `${address}п.` : ''} ${address1 ? `${address1}э.` : ''} ${address2 ? `${address2}кв.` : ''}`,
                name,
                phone_number: phone,
                city: store.city,
                day: dateDate,
                time: dateTime,
                comment,
                addressAll: addressAll,
                delivery: km
            }
            if (promoFlag) {
                data.promocode = promoCode
            }
            if (postcard) {
                data.postcard = postcard
            }
            const response = await axiosInstance.post('/orders', data)
            const value = await getValue()
            paymentFunc(value)
            // navigation.navigate(HomeScreenName)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            if (e?.response?.data?.message) {
                setError(e?.response?.data?.message)
            }
            console.log(e)
        }
    }

    const paymentFunc = async (value) => {
        try {
            const response = await axiosInstance.post("/orders/payment", {value: value});
            setUrl(response.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            setLoading(true)
            if (stateLoad) {
                setLoading(false)
            }
            getFav();
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        getBanner()
    }, []);

    const getBanner = async () => {
        try {
            const response = await axiosInstance.get('/goods/banner')
            setBanner(response.data.banner)
        } catch (e) {
            console.log(e,'banner')
        }
    }

    const activeFunc = async () => {
        try {
            const response = await axiosInstance.post('/promocodes/check', {text: promoCode})
            setPromoFlag(response.data)
            if (!response.data) {
                setPromoText('Неверный промокод')
            }
        } catch (e) {
            console.log(e)
        }
    }

    const onChangeFunc = (e, set) => {
        setError('')
        set(e)
    }

    const getFav = async () => {
        try {
            const response = await axiosInstance.get('/carts')
            if (Object.keys(response.data).length) {
                setData(response.data)
                setUserPlace(response.data[0]?.items[0]?.store_id.city + ' ' + response.data[0]?.items[0]?.store_id.address)
                let sum = 0
                for (let i = 0; i < response.data.length; i++) {
                    sum += response.data[i].items[0].good_id?.price * response.data[i].items[0].count
                }
                setAllCount(sum)
                setLoading(false)
                setDelivery(+response.data[0].items[0].store_id?.distance.$numberDecimal)
            } else {
                setLoading(false)

            }
        } catch (e) {
            setLoading(false)
            console.log(e, 'fff')
        }
    }

    const setOpenFunc = (num) => {
        setDateNum(num)
        setOpen(true);
    };
    const successFunc = (event) => {
        if (event?.nativeEvent?.url?.includes('success')) {
            try {
                const response = axiosInstance.post('/orders/confirm')
            } catch (e) {
                console.log(e)
            }
            navigation.goBack()
        } else if (event?.nativeEvent?.code === -6 || event?.nativeEvent?.code === -1004) {
            navigation.goBack()
        }
    }

    return (
        <View style={[globalStyles.container,
            Platform.OS === 'ios' && !url &&{marginTop: - (getStatusBarHeight(true) +6)}
        ]}>
            {Object.keys(data).length ?
                url ?
                    <WebView
                        ref={setRef} source={{uri: url}}
                        style={{flex: 1,marginTop:Platform.OS === 'ios' ? 20 : 0}}
                        onError={event => {
                            successFunc(event)
                        }}
                        goBack={() => {
                            navigation.goBack()
                        }}
                        onLoadEnd={event => {
                            successFunc(event)
                        }}
                    />
                    :
                    <View style={[globalStyles.container,
                    ]}>
                        <ScrollView bounces={false} contentContainerStyle={globalStyles.scrollContainer}
                                    canCancelContentTouches={isCanCancelContentTouches}
                                    scrollEnabled={isCanCancelContentTouches}>
                            <StatusBar barStyle="dark-content" hidden={false} backgroundColor={[Colors.blueBackground,

                            ]}/>
                            <View style={[styles.headerContainer,
                                Platform.OS === 'ios' && !url &&{paddingTop: (getStatusBarHeight(true) + globalHeight(30))}

                            ]}>
                                <Text style={styles.addText}>Корзина</Text>
                                <View style={styles.cameraContainer}>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightLight, styles.titleForm]}>Сделать
                                        заказ можно только выбрав товары одного магазина</Text>
                                </View>
                                <>
                                    <View style={styles.shopContAll}>
                                        <View>
                                            <View style={styles.shopCont}>
                                                <Image source={{
                                                    uri: BaseUrl + '/' +
                                                        data[0]?.items[0]?.store_id?.logo_url
                                                }} style={styles.imgShop}/>
                                                <View style={styles.contShp}>
                                                    <Text
                                                        style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightLight]}>Магазин</Text>
                                                    <Text
                                                        style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.ops]}>
                                                        {data[0]?.items[0]?.store_id?.title}</Text>
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
                                                // plusMinus={getFav}
                                            />
                                        )
                                    })}
                                    <View style={styles.applicationsContainer}>
                                        <View style={styles.changeContent}>
                                            <View style={[globalStyles.row]}>
                                                <Image source={{uri: BaseUrl + '/' + banner}} style={styles.imgForm}/>
                                                <View style={styles.textCont}>
                                                    <Text
                                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Текст
                                                        на открытке:</Text>
                                                    <AppInput
                                                        placeholder={'Введите текст для открытки'}
                                                        style={styles.otkritka}
                                                        onChangeText={(e) => {
                                                            setPromoText('')
                                                            onChangeFunc(e, setPostCard)
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
                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Сумма: <Text
                                        style={[globalStyles.weightBold,]}>{allCount} р</Text></Text>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Доставка: <Text
                                        style={[globalStyles.weightBold,]}>{delivery} р</Text> </Text>
                                </View>
                                <View style={styles.cont}>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.proText]}>Промокод</Text>
                                    <View style={styles.proCont}>
                                        {promoFlag ?
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.weightLight, styles.proTextActive]}>общая
                                                цена -5 %</Text>
                                            :
                                            <>
                                                <AppInput
                                                    placeholder={'Промокод'}
                                                    style={styles.inp}
                                                    autoCapitalize={"characters"}
                                                    value={promoCode}
                                                    onChangeText={(e) => {
                                                        setPromoText('')
                                                        onChangeFunc(e.toUpperCase(), setPromoCode)
                                                    }}
                                                />
                                                <AppButton
                                                    text={'Активировать'}
                                                    stylesText={styles.textBtn}
                                                    stylesContainer={styles.contBtn}
                                                    onPress={() => {
                                                        activeFunc()
                                                    }}
                                                />
                                            </>
                                        }
                                    </View>
                                    {promoText && (
                                        <Text style={[globalStyles.error, styles.promoErr]}>{promoText}</Text>)}
                                </View>
                                <View>
                                    <View style={styles.contAdd}>
                                        <Text
                                            style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Город</Text>
                                        <Text
                                            style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.text]}>{store.city}</Text>
                                    </View>
                                    <View style={styles.contAdd}>
                                        <Text
                                            style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Адрес</Text>
                                        <AppInput
                                            placeholder={'Адрес'}
                                            style={styles.addressStyle}
                                            onChangeText={(e) => onChangeFunc(e, setAddressAll)}

                                        />
                                    </View>
                                    <View style={styles.flatmateCont}>
                                        <View>
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Подъезд</Text>
                                            <AppInput
                                                placeholder={''}
                                                style={styles.inpSmall}
                                                keyboardType={'numeric'}
                                                onChangeText={(e) => onChangeFunc(e, setAddress)}
                                            />
                                        </View>
                                        <View>
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Этаж</Text>
                                            <AppInput
                                                placeholder={''}
                                                style={styles.inpSmall}
                                                keyboardType={'numeric'}
                                                onChangeText={(e) => onChangeFunc(e, setAddress1)}
                                            />
                                        </View>
                                        <View>
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Квартира</Text>
                                            <AppInput
                                                placeholder={''}
                                                style={styles.inpSmall}
                                                keyboardType={'numeric'}
                                                onChangeText={(e) => onChangeFunc(e, setAddress2)}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                        <Text
                                            style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.textCont]}>Имя
                                            получателя</Text>
                                        <AppInput
                                            placeholder={'Имя получателя'}
                                            onChangeText={(e) => onChangeFunc(e, setName)}

                                        />
                                    </View>
                                    <View style={styles.flatmateContCont}>

                                        <View style={styles.date}>
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft,]}>На
                                                когда</Text>
                                            <TouchableOpacity style={[globalStyles.row, styles.graphicContent]}
                                                              onPress={() => setOpenFunc(false)}>
                                                <Text
                                                    style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall]}>{dateDate ? dateDate : "00-00-00"}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Время</Text>
                                            <TouchableOpacity style={[globalStyles.row, styles.graphicContent]}
                                                              onPress={() => setOpenFunc(true)}>
                                                <Text
                                                    style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall]}>{dateTime ? dateTime : "00-00"}</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                    <View>
                                        <Text
                                            style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.textCont]}>Телефон
                                            получателя</Text>
                                        <AppInput
                                            placeholder={'Телефон'}
                                            keyboardType={'numeric'}
                                            onChangeText={(e) => onChangeFunc(e, setPhone)}
                                        />
                                    </View>
                                    <View>
                                        <Text
                                            style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.textCont]}>Коментарий</Text>
                                        <AppInput
                                            style={styles.inputBig}
                                            editable
                                            numberOfLines={5}
                                            multiline
                                            onChangeText={(e) => onChangeFunc(e, setComment)}

                                        />
                                    </View>
                                </View>
                                {error && (<Text style={globalStyles.error}>{error}</Text>)}
                                <AppButton
                                    text={'Заказать'}
                                    stylesContainer={styles.contButton}
                                    onPress={onPressFunc}
                                />
                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: globalHeight(20)
                            }}>
                                <YaMap
                                    initialRegion={location}
                                    zoomGesturesEnabled={false}
                                    scrollGesturesEnabled={false}
                                    nightMode={false}
                                    mapType={"vector"}
                                    style={{
                                        width: '100%',
                                        height: height / 2,
                                    }}>
                                    {points.length ?
                                        <Polyline
                                            points={points}
                                            strokeColor={'black'}
                                        />
                                        :
                                        null
                                    }
                                    <Marker
                                        point={location}
                                        scale={.02}
                                        source={wing}
                                    />
                                    {locationEnd ?
                                        <Marker
                                            point={locationEnd}
                                            scale={.02}
                                            source={wing}
                                        />
                                        :
                                        null
                                    }
                                </YaMap>
                            </View>
                        </ScrollView>
                        <DatePicker
                            modal
                            open={open}
                            locale={"ru"}
                            is24hourSource={"locale"}
                            mode={dateNum ? "time" : "date"}
                            title={dateNum ? 'Выберите время' : 'Выберите дату'}
                            confirmText="OK" // Set your confirm button text here
                            cancelText="Отмена" // Set your cancel button text here
                            format={'MMM'}
                            showIcon={false} // Disable the calendar icon
                            minimumDate={dateNum ? null : new Date()}
                            maximumDate={dateNum ? null : newDate}
                            date={date}
                            onConfirm={(date) => {
                                if (dateNum) {
                                    const hours = date.getHours();
                                    const minutes = date.getMinutes();
                                    const m = '' + minutes
                                    const min = m.length === 1 ? `0${minutes}` : minutes
                                    const h = '' + hours
                                    const ho = h.length === 1 ? `0${hours}` : hours
                                    setDateTime(`${ho}:${min}`);
                                    setDate(date);
                                } else {
                                    const result = date.toLocaleDateString('en-GB')
                                    let mm = date.getMonth() + 1;
                                    const m = "" + mm
                                    const mmm = m.length === 1 ? `0${m}` : m
                                    let dd = date.getDate();
                                    const d = "" + dd
                                    const ddd = d.length === 1 ? `0${d}` : d
                                    let yy = new Date().getFullYear();
                                    let myDateString = yy + '-' + mmm + '-' + ddd; //(US)
                                    setDateDate(myDateString)
                                }
                                setError('')
                                setOpen(false);
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                    </View>
                :
                <View style={[styles.contNoData, {opacity: loading ? 0 : 1},
                    Platform.OS === 'ios' &&{paddingTop: (getStatusBarHeight(true) + globalHeight(30))}

                ]}>
                    <Text
                        style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextBig, styles.pustaText]}>Корзина</Text>
                    <View>
                        <View style={styles.korzCont}>
                            <Image source={korz} style={styles.korz}/>
                        </View>
                        <Text
                            style={[globalStyles.titleText, globalStyles.titleTextBig, globalStyles.weightLight, styles.korzContText]}>Ваша
                            корзина пуста</Text>
                        <AppButton
                            text={'Выбрать товары'}
                            stylesContainer={styles.pustCont}
                            onPress={() => navigation.navigate(HomeScreenName)}
                        />
                    </View>
                    <View/>
                </View>}
            <Loading loading={loading}/>
        </View>
    );
};


