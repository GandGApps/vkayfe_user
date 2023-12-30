import React, {useState} from "react";
import {styles} from "./styles";
import {FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {BaseUrl, Colors, globalStyles, MessagesName, ShopName} from "../../../../constants";
import messageIcon from "../../../../assets/images/chatIcon.png";

import {
    ApplicationsChangeForm,
    BackButton,
    HomeFormData,
    AppButton
} from "../../../../components";
import backIcon from "../../../../assets/images/rightIcon.png";
import axiosInstance from "../../../../networking/axiosInstance";
import store from "../../../../store";
import {useSelector} from "react-redux";

export const ApplicationsDataScreen = ({navigation, route}) => {
    const store = useSelector((s)=>s.customer)
    const item = route.params.item;
    console.log(item)
    const messageFunc = async () => {
        try {
            const response = await axiosInstance.get(`/chat/is-created?seller_id=${item.store_id.seller_user_id}`)
            navigation.navigate(MessagesName, {
                item: {
                    user_id: item?.user_id?._id,
                    seller_id:store._id,
                    chatID: response?.data?.chatID
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <ScrollView contentContainerStyle={[globalStyles.scrollContainer]}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor={Colors.blueBackground}/>
            <View style={styles.headerContainer}>
                <View style={styles.headerPadding}>
                    <BackButton
                        text={"Заказ"}
                        navigation={navigation}
                        stylesBack={styles.back}
                        applications={`№ ${item._id.substring(0,10)}`}
                    />
                    <Text style={[
                        globalStyles.titleText,globalStyles.weightLight,globalStyles.titleTextSmall,
                        { color: item.status_id.name === 'approved' ? "#138F2E" : "#E79800" },
                        styles.status]}>{item.status_id.title}</Text>
                    <Text
                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignRight, item.state && ({color: "#E38920"})]}>{item.state}</Text>
                </View>
                <View style={[styles.headerTextContainer, styles.headerPadding]}>
                    {item?.goods.map((it) => <Text
                        style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.contentStyleText]}>x{it.count} {it.title}</Text>)}
                </View>
                <View style={styles.headerBorderWidth}>
                    <View style={[styles.headerPadding]}>

                        <View style={[globalStyles.row, styles.between]}>
                            <View>
                                <View style={styles.contData}>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>На
                                        когда</Text>
                                    <Text>{item.delivery_date}</Text>
                                </View>
                                <View>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Телефон</Text>
                                    <Text>{item.phone_number}</Text>
                                </View>
                            </View>
                            <View>
                                <View style={styles.contData}>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Время</Text>
                                    <Text>{item.delivery_time}</Text>
                                </View>
                                <View>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Общая
                                        сумма</Text>
                                    <Text>{item.full_amount} p</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.countryView}>
                            <Text
                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Город</Text>
                            <Text>{item.delivery_city}</Text>
                        </View>
                        <View style={styles.countryView}>
                            <Text
                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Адрес</Text>
                            <Text>{item.delivery_address}</Text>
                        </View>
                        <View style={styles.countryView}>
                            <Text
                                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Имя
                                получателя</Text>
                            <Text>{item.username} user name</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.shopContAll}>
                <View style={styles.shopCont}>
                    <Image source={{uri: BaseUrl + '/' + item.store_id.logo_url}} style={styles.imgShop}/>
                    <View>
                        <Text
                            style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightLight]}>Магазин</Text>
                        <Text
                            style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.ops]}>{item.store_id.title} </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    messageFunc()
                }}>
                    <Image source={messageIcon} style={styles.messageIcon}/>
                </TouchableOpacity>
            </View>
            {item.goods.map((item, index) => {
                return (
                    <ApplicationsChangeForm
                        item={item}
                        key={index}
                        index={index}
                        navigation={navigation}
                    />
                );
            })}
                <View style={styles.applicationsContainer}>
                    <View style={styles.changeContent}>
                        <View style={[globalStyles.row]}>
                            <Image source={{uri:BaseUrl + '/' + route.params?.banner}} style={styles.imgForm} />
                            <View style={styles.textCont}>
                                <Text
                                    style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall, globalStyles.textAlignLeft]}>Текст
                                    на открытке:</Text>
                                <Text
                                    style={[globalStyles.titleText, globalStyles.weightBold, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.priceText]}>{item?.postcard}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            <View style={styles.priceView}>
                <Text style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.weightLight]}>Сумма:<Text
                    style={globalStyles.weightBold}>{item?.full_amount} р</Text></Text>
            </View>
            <View style={[styles.footerCont]}>
                <AppButton
                    stylesContainer={styles.buttonWhiteContainer}
                    stylesText={styles.buttonWhiteText}
                    text={"Назад"}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </ScrollView>
    );
};
