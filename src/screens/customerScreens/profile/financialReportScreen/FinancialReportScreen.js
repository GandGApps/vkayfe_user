import React, {useEffect, useState} from "react";
import {styles} from "./styles";
import {View, Text, TouchableOpacity, Image, FlatList, StatusBar} from "react-native";
import {BackButton, CategoryData, FinancialData_, FinancialForm, FormCategory} from "../../../../components";
import {Colors, FilterName, FinancialFilterName, globalStyles} from "../../../../constants";
import FilterIcon from "../../../../assets/images/filter.png";
import axiosInstance from "../../../../networking/axiosInstance";


export const FinancialReportScreen = ({navigation}) => {
    const [data, setData] = useState([])
    const [banner,setBanner] = useState('')
    useEffect(() => {
        getBuyer()
        getBanner()
    }, [])
    const getBanner = async () =>{
        try {
            const response = await axiosInstance.get('/goods/banner')
            setBanner(response.data.banner)
        } catch (e) {
            console.log(e)
        }
    }
    const getBuyer = async () => {
        try {
            const response = await axiosInstance.get('/orders/buyer')
            const arr = response.data;
            if(Object.keys(arr).length){
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].status_id.name === "approved") {
                        arr[i].status_id.title = "Заказан принят";
                    }
                    else if (arr[i].status_id.name === "assembling") {
                        arr[i].status_id.title = "Заказан в сборке";
                    }
                    else if (arr[i].status_id.name === "accepted") {
                        arr[i].status_id.title = "Ожидает подтверждения";
                    }
                    else if (arr[i].status_id.name === "pending") {
                        arr[i].status_id.title = "Ожидают подтверждения";
                    }
                    else if (arr[i].status_id.name === "in_transit") {
                        arr[i].status_id.title = "Заказан в пути";
                    }
                    else if (arr[i].status_id.name === "completed") {
                        arr[i].status_id.title = "Заказан завершен";
                    }
                    else if (arr[i].status_id.name === "cancelled") {
                        arr[i].status_id.title = "Заказан отменен";
                    }
                }
            }
            setData([...arr])
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={globalStyles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor={Colors.blueBackground}/>
            <View style={styles.headerContainer}>
                <BackButton
                    navigation={navigation}
                    text={"Мои покупки"}
                />
                <View style={[styles.headerContent]}>
                </View>
            </View>
            <FlatList data={data} renderItem={({item, index}) => {
                return (
                    <FinancialForm
                        item={item}
                        key={item._id}
                        navigation={navigation}
                        banner={banner}
                    />
                );
            }}/>
        </View>
    );
};
