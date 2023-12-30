import React, {useState} from "react";
import {styles} from "./styles";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {AppButton, AppForm, AppInput, BackButton, Loading, WaitingForm} from "../../../components";
import {Colors, globalStyles, MapsScreenName, SET_CUSTOMER, SignupName, VerifyPhoneName} from "../../../constants";
import pinkMonster from "../../../assets/images/pinkMonster.png";
import {setTokens} from "../../../utils";

import line from "../../../assets/images/line.png";
import giftIconPink from "../../../assets/images/giftIconPink.png";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import axiosInstance from "../../../networking/axiosInstance";
import {useDispatch} from "react-redux";
import SwitchToggle from "react-native-switch-toggle";
import AsyncStorage from "@react-native-community/async-storage";

const CELL_COUNT = 4;

async function setState() {
    try {
        await AsyncStorage.setItem("state", JSON.stringify(true));
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}

export const VerifyPhoneScreen = ({navigation, route}) => {
    const dispatch = useDispatch();

    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const phone_number = route?.params?.phone

    const navigationFunc = async () => {
        if(value.length === 4){
            setLoading(true)
            try {
                const data = {phone_number, confCode: value}
                const response = await axiosInstance.post("/users/register/buyer/confirm-number", data);
                console.log(response)
                await setTokens(response?.data.token);
                await setState();
                dispatch({
                    type: SET_CUSTOMER,
                    payload: response.data.user_data,
                });
                navigation.replace(MapsScreenName);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.log(e);
                setError('неправильно пароль');
            }
        } else {
            setError('неправильно пароль');
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
            <View style={[styles.container, globalStyles.container]}>
                <View style={styles.headerContainer}>
                    <View style={styles.backContainer}>
                        <BackButton navigation={navigation}/>
                    </View>
                    <Image source={pinkMonster} style={styles.pinkMonster}/>
                    <Image source={line} style={styles.lineImg}/>
                </View>
                <View style={styles.formContainer}>
                    <AppForm>
                        <View style={styles.formHeader}>
                            <Image source={giftIconPink} style={styles.giftIconPink}/>
                            <Text style={[styles.titleForm, globalStyles.titleText]}>Подтвердите номер телефона</Text>
                        </View>
                        <View>
                            <View style={styles.inputContainer}>
                                <CodeField
                                    ref={ref}
                                    {...props}
                                    value={value}
                                    onChangeText={(e)=>{
                                        setError('')
                                        setValue(e)}}
                                    cellCount={CELL_COUNT}
                                    rootStyle={styles.codeFieldRoot}
                                    keyboardType="number-pad"
                                    textContentType="oneTimeCode"
                                    renderCell={({index, symbol, isFocused}) => (
                                        <Text
                                            key={index}
                                            style={[styles.cell, isFocused && styles.focusCell]}
                                            onLayout={getCellOnLayoutHandler(index)}>
                                            {symbol || (isFocused ? <Cursor/> : null)}
                                        </Text>
                                    )}
                                />
                            </View>
                            <Text style={styles.error}>{error}</Text>

                            <AppButton
                                text={"Войти"}
                                onPress={() => navigationFunc()}
                            />

                        </View>
                        <View style={styles.footerContainer}>

                        </View>
                    </AppForm>
                </View>
            </View>
            <Loading loading={loading}/>
        </ScrollView>);
};
