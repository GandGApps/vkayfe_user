import React, {useEffect, useState} from "react";
import {styles} from "./styles";
import {BaseUrl, Colors, FilterName, globalStyles, MapsScreenName, ReviewName} from "../../../../constants";

import {FlatList, Image, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {AppButton, BackButton, FormGoods, globalHeight} from "../../../../components";
import axiosInstance from "../../../../networking/axiosInstance";
import place from "../../../../assets/images/wing.png";
import taxi from "../../../../assets/images/taxi.png";
import {getStatusBarHeight} from "react-native-status-bar-height";

export const ShopScreen = ({navigation, route}) => {

    const [shop, setShop] = useState(route.params.shop)
    const [active, setActive] = useState("Все товары");
    const [goodsData, setGoodsData] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    console.log(shop)
    useEffect(() => {
        getGoods();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            getReview()
        });
        return unsubscribe;
    }, [navigation]);
    const getGoods = async () => {
        try {
            const response = await axiosInstance.get(`/goods/by-store?store_id=${shop._id}`);
            // console.log(response)
            setGoodsData([...response.data]);
        } catch (e) {
            console.log(e);
        }
    };

    const getReview = async () => {
        try {
            const response = await axiosInstance.get(`/stores/reviews?store_id=${shop._id}`);
            setReviewData([...response.data]);
        } catch (e) {
            console.log(e);
        }
    };


    const addFavoriteFunc = async (item, index) => {
        const arr = goodsData
        if (!item.is_favorite) {
            try {
                const response = await axiosInstance.post(`/favorites?good_id=${item._id}&store_id=${item.store_id}`);
                arr[index].is_favorite = !arr[index].is_favorite
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const response = await axiosInstance.delete(`/favorites?good_id=${item._id}`);
                arr[index].is_favorite = !arr[index].is_favorite
            } catch (e) {
                console.log(e, 3);
            }
        }
        setGoodsData([...arr])
    }

    const changeFav = async (st) => {
        const arr = shop
        if (st) {
            try {
                const response = await axiosInstance.delete(`/favorites/stores?store_id=${shop._id}`);
                arr.is_favoritestore = !arr.is_favoritestore
            } catch (e) {
                console.log(e, 3);
            }
        } else {
            try {
                const response = await axiosInstance.post(`/favorites/stores?store_id=${shop._id}`);
                arr.is_favoritestore = !arr.is_favoritestore
            } catch (e) {
                console.log(e, 3);
            }
        }
        setShop({...arr})
    }

    return (
        <ScrollView style={[globalStyles.scrollContainer,styles.scroll,
            Platform.OS === 'ios' &&{paddingTop:  (getStatusBarHeight(true) + globalHeight(20))}

        ]} bounces={false}>
            <View style={styles.content}>
                <View style={styles.container}>
                    <BackButton
                        like
                        favorite={shop.is_favoritestore}
                        navigation={navigation}
                        changeFav={changeFav}
                    />
                </View>
                <View style={styles.shopCont}>
                    <Image source={{uri: BaseUrl + '/' + shop.logo_url}} style={styles.imgShop}/>
                    <View>
                        <Text
                            style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightLight]}>Магазин</Text>
                        <Text
                            style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.ops]}>{shop.title} </Text>
                    </View>
                </View>
                <View style={[globalStyles.row, styles.headerFooter]}>
                    <TouchableOpacity
                        style={active === 'Все товары' && styles.activeText}
                        onPress={() => setActive('Все товары')}>
                        <Text style={[
                            globalStyles.titleText,
                            globalStyles.weightLight,
                            globalStyles.titleTextSmall,
                            styles.headerFooterText,
                            active === 'Все товары' && styles.activeTextContent
                        ]}>Все товары</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={active === 'О нас' && styles.activeText}
                        onPress={() => setActive('О нас')}>
                        <Text style={[
                            globalStyles.titleText,
                            globalStyles.weightLight,
                            globalStyles.titleTextSmall,
                            styles.headerFooterText,
                            active === 'О нас' && styles.activeTextContent
                        ]}>О нас</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={active === 'Отзывы' && styles.activeText}
                        onPress={() => setActive('Отзывы')}>
                        <Text style={[
                            globalStyles.titleText,
                            globalStyles.weightLight,
                            globalStyles.titleTextSmall,
                            styles.headerFooterText,
                            active === 'Отзывы' && styles.activeTextContent
                        ]}>Отзывы</Text>
                    </TouchableOpacity>
                </View>
                {active === 'О нас' && (
                    <View style={styles.onas}>
                        <View>
                            <Text style={[styles.text]}>{shop.title}</Text>
                            <View style={styles.placeContainer}>
                                <Image source={place} style={styles.placeIcon}/>
                                <Text
                                    style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall4]}>{shop?.city} {shop?.address}</Text>
                            </View>
                            <View style={styles.placeContainer}>
                                <Image source={taxi} style={styles.placeIcon}/>
                                <Text
                                    style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall4]}>Стоимость
                                    доставки: {shop.distance.$numberDecimal} р</Text>
                            </View>
                        </View>
                        <View style={styles.contView}>
                            <Text
                                style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightBold, styles.priceText]}>График
                                работы</Text>
                            <Text style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.dataText]}>ПН-ПТ:  {shop?.weekdays?.from}—{shop?.weekdays?.to}</Text>
                            {shop.weekends.not_working ?
                                <Text style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.dataText]}>СБ-ВС:<Text style={[globalStyles.error,styles.closeText]}> выходной</Text></Text>
                                :
                                <Text style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.dataText]}>СБ-ВС: {shop?.weekends?.from}—{shop?.weekends?.to}</Text>
                            }
                        </View>
                        <View style={styles.contView}>
                            <Text
                                style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightBold, styles.priceText]}>Про
                                нас</Text>
                            <Text
                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall4, globalStyles.textAlignLeft]}>{shop.pro}</Text>

                        </View>
                    </View>
                )}

                {active === 'Отзывы' && (
                    <View style={styles.viewReview}>
                        <ScrollView bounces={false}>
                            {reviewData.map((item, index) => {
                                return (
                                    <View key={index} style={styles.reviewCont}>
                                        <View style={styles.viewContReview}>
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightBold, styles.nameUserReview]}>{item.user_name}</Text>
                                            <Text
                                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall4, globalStyles.textAlignLeft]}>{item.text}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </ScrollView>
                        <AppButton
                            text={'Добавить отзыв'}
                            onPress={() => navigation.navigate(ReviewName, {shop})}
                        />
                    </View>
                )}
                {active === 'Все товары' && (
                    <View style={styles.formContainer}>
                        <View style={styles.formContent}>
                            <FlatList
                                data={goodsData}
                                renderItem={({item, index}) => {
                                    return (
                                        <FormGoods
                                            item={item}
                                            key={index}
                                            index={index}
                                            navigation={navigation}
                                            addFavoriteFunc={addFavoriteFunc}
                                        />
                                    );
                                }}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                numColumns={2}

                            />
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};
