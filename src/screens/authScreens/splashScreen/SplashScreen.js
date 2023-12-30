import React, {useEffect, useState} from "react";
import {styles} from "./styles";
import {ChooseName, CreateShopName, globalStyles, MapsScreenName, SET_CUSTOMER, SET_SHOP} from "../../../constants";
import {Image, ScrollView, Text, View} from "react-native";

import giftImg from "../../../assets/images/gift.png";
import {AppButton, AppForm, Loading} from "../../../components";
import giftIcon from "../../../assets/images/giftIcon.png";
import paymentIcon from "../../../assets/images/paymentIcon.png";
import machineIcon from "../../../assets/images/machineIcon.png";
import giftText from "../../../assets/images/prostoPodariImg.png";
import {checkStore, checkTokens, checkUser} from "../../../utils";
import axiosInstance from "../../../networking/axiosInstance";
import {useDispatch} from "react-redux";
import {MapsScreen} from "../mapsScreen";
import AsyncStorage from "@react-native-community/async-storage";

async function checkState() {
    try {
        const a = await AsyncStorage.getItem("state");
        return JSON.parse(a);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const SplashScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
            navigationFuncState();
    });
    const navigationFuncState = async () => {
        const state = await checkState();
        if (state) {
            navigationFunc(state);
        }
    };

    const navigationFunc = async (state) => {
        if(!state){
            setLoading(true);
        }
        const token = await checkTokens();
        const store = await checkStore();
        if (token) {
            await axiosFunc(store);
        } else {
            setLoading(false);
            navigation.navigate(ChooseName);
        }
    };

    const axiosFunc = async (store) => {
        try {
            const response = await axiosInstance.get("/users/profile/buyer");
            dispatch({
                type: SET_CUSTOMER,
                payload: response.data.user_data.user,
            });
            if (store) {
                navigation.replace("TabNavigation");
            } else {
                navigation.replace(MapsScreenName);
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
            <View style={[globalStyles.flexCenter, styles.splashContainer]}>
                <View style={styles.headerContainer}>
                    <Image source={giftImg} style={styles.giftImg}/>
                </View>
                <AppForm>
                    <View style={styles.giftImgContainer}>
                        <Image source={giftText} style={styles.giftText}/>
                    </View>
                    <Text style={[globalStyles.titleText, styles.platformText]}>
                        Платформа по продаже подарков и сувенирной продукции
                    </Text>
                    <View style={styles.informationContainer}>
                        <View style={[globalStyles.row, styles.formInformation]}>
                            <Image source={giftIcon} style={styles.informationIcon}/>
                            <Text style={[globalStyles.titleText, styles.TextInformation]}>Подарки, цветы,
                                сувениры</Text>
                        </View>
                        <View style={[globalStyles.row, styles.formInformation]}>
                            <Image source={paymentIcon} style={styles.informationIcon}/>
                            <Text style={[globalStyles.titleText, styles.TextInformation]}>Выгодные цены</Text>
                        </View>
                        <View style={[globalStyles.row, styles.formInformation]}>
                            <Image source={machineIcon} style={styles.informationIcon}/>
                            <Text style={[globalStyles.titleText, styles.TextInformation]}>Бесплатная доставка</Text>
                        </View>
                    </View>
                    <AppButton
                        text={"Далее"}
                        stylesContainer={styles.buttonContainer}
                        onPress={navigationFunc}/>
                </AppForm>
            </View>
            <Loading loading={loading}/>
        </ScrollView>
    );
};
