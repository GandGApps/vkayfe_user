import * as React from "react";
import AddNavigation from "./AddNavigation";
import ChatNavigation from "./ChatNavigation";
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import {globalHeight, globalWidth} from "../components";
import {Image, View, StyleSheet, Text, Platform} from "react-native";
import ApplicationsNavigation from "./ApplicationsNavigation";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    AddName,
    ApplicationsDataName,
    ApplicationsName,
    ChatName,
    Colors,
    CreateShopName,
    DeleteShopName,
    EditMyDetailsName,
    FilterName,
    FinancialFilterName,
    FinancialReportDataName,
    FinancialReportName,
    GoodsDataName,
    GoodsImgName,
    HomeName,
    MyDetailsScreenName,
    ProfileName,
    PromotionServicesName,
    SaveEditProfileName,
    SaveItemName,
    ShopDataName,
    AddPromoCodeName,
    OkayPromoName,
    MapsScreenName,
    AddTrushName,
    ShopName,
    ReviewName,
    MessagesName,
    LoremName
} from "../constants";
import io from "socket.io-client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    const user = useSelector(st=>st.customer)
    const [messages,setMessages] = useState(0)
    const socket = io.connect(`http://194.58.121.218:3001/count/messages/buyer?buyer_id=${user._id}`);
    socket.on('count', (data) => {
        setMessages( data.count);
    });

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: Colors.tabBarActiveTintColor,
                tabBarStyle: styles.tabBarStyle,
                tabBarIcon: ({focused, color, size}) => {
                    let imageSource = null;
                    let imageSourceActive = null;
                    let chatIcon = null
                    if (route.name === HomeName) {
                        imageSource = require("../assets/images/homeIcon.png");
                        imageSourceActive = require("../assets/images/homeIconActive.png");

                    }
                    if (route.name === ApplicationsName) {
                        imageSource = require("../assets/images/dontdont.png");
                        imageSourceActive = require("../assets/images/likeTab.png");

                    }
                    if (route.name === AddName) {
                        imageSource = require("../assets/images/addIconActive.png");
                        imageSourceActive = require("../assets/images/addIcon.png");

                    }
                    if (route.name === ChatName) {
                        imageSource = require("../assets/images/chatIcon.png");
                        chatIcon = messages
                        imageSourceActive = require("../assets/images/chatIconActive.png");
                    }
                    if (route.name === ProfileName) {
                        imageSource = require("../assets/images/profileIcon.png");
                        imageSourceActive = require("../assets/images/profileIconActive.png");
                    }
                    return (
                        <View style={styles.container}>
                            <Image
                                style={styles.image}
                                source={focused ? imageSourceActive : imageSource}
                            />
                            {chatIcon ? (
                                <View style={styles.notNumberCont}>
                                    <Text style={styles.notNumber}>{chatIcon}</Text>
                                </View>
                            ) : null}
                            <Text style={styles.textStyle}>{route.name}</Text>
                        </View>
                    );
                },
                tabBarLabel: ({focused, color, size}) => {
                },
            })}
        >
            <Tab.Screen
                name={HomeName}
                component={HomeNavigation}
                options={({route}) => ({
                    tabBarVisible: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === FilterName) {
                            return false;
                        } else if (routeName === GoodsDataName) {
                            return false;
                        } else if (routeName === GoodsImgName) {
                            return false;
                        } else if (routeName === MapsScreenName) {
                            return false;
                        } else if (routeName === AddTrushName) {
                            return false;
                        } else if (routeName === ShopName) {
                            return false;
                        } else if (routeName === ReviewName) {
                            return false;
                        }
                        return true;
                    })(route),
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === FilterName) {
                            return {display: "none"};
                        } else if (routeName === GoodsDataName) {
                            return {display: "none"};
                        } else if (routeName === GoodsImgName) {
                            return {display: "none"};
                        } else if (routeName === MapsScreenName) {
                            return {display: "none"};
                        } else if (routeName === AddTrushName) {
                            return {display: "none"};
                        } else if (routeName === ShopName) {
                            return {display: "none"};
                        } else if (routeName === ReviewName) {
                            return {display: "none"};
                        }
                        return styles.tabBarStyle;
                    })(route),
                    tabBarButton: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === FilterName) {
                            () => null;
                        } else if (routeName === GoodsDataName) {
                            () => null;
                        } else if (routeName === GoodsImgName) {
                            () => null;
                        } else if (routeName === MapsScreenName) {
                            () => null;
                        } else if (routeName === AddTrushName) {
                            () => null;
                        } else if (routeName === ReviewName) {
                            () => null;
                        }
                    })(route),
                })}
            />
            <Tab.Screen
                name={ApplicationsName}
                component={ApplicationsNavigation}
                options={({route}) => ({
                    tabBarVisible: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === ApplicationsDataName) {
                            return false;
                        }
                        return true;
                    })(route),
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === ApplicationsDataName) {
                            return {display: "none"};
                        }
                        return styles.tabBarStyle;
                    })(route),
                    tabBarButton: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === ApplicationsDataName) {
                            () => null;
                        }
                    })(route),
                })}
            />
            <Tab.Screen
                name={AddName}
                component={AddNavigation}
                options={({route}) => ({
                    unmountOnBlur: true,
                    tabBarVisible: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === SaveItemName) {
                            return false;
                        }
                        return true;
                    })(route),
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === SaveItemName) {
                            return {display: "none"};
                        }
                        return styles.tabBarStyle;
                    })(route),
                    tabBarButton: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === SaveItemName) {
                            () => null;
                        }
                    })(route),
                })}
            />
            <Tab.Screen
                name={ChatName}
                component={ChatNavigation}
                options={({route}) => ({
                    tabBarVisible: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === MessagesName) {
                            return false;
                        }
                        return true;
                    })(route),
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === MessagesName) {
                            return {display: "none"};
                        }
                        return styles.tabBarStyle;
                    })(route),
                    tabBarButton: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === MessagesName) {
                            () => null;
                        }
                    })(route),
                })}
            />
            <Tab.Screen
                name={ProfileName}
                component={ProfileNavigation}
                options={({route}) => ({
                    tabBarVisible: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === ShopDataName) {
                            return false;
                        } else if (routeName === MyDetailsScreenName) {
                            return false;
                        } else if (routeName === EditMyDetailsName) {
                            return false;
                        } else if (routeName === SaveEditProfileName) {
                            return false;
                        } else if (routeName === FinancialReportName) {
                            return false;
                        } else if (routeName === FinancialReportDataName) {
                            return false;
                        } else if (routeName === PromotionServicesName) {
                            return false;
                        } else if (routeName === DeleteShopName) {
                            return false;
                        } else if (routeName === FinancialFilterName) {
                            return false;
                        } else if (routeName === CreateShopName) {
                            return false;
                        } else if (routeName === AddPromoCodeName) {
                            return false;
                        } else if (routeName === ApplicationsDataName) {
                            return false;
                        } else if (routeName === OkayPromoName) {
                            return false;
                        } else if (routeName === MessagesName) {
                            return false;
                        } else if (routeName === LoremName) {
                            return false;
                        }
                        return true;
                    })(route),
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === ShopDataName) {
                            return {display: "none"};
                        } else if (routeName === MyDetailsScreenName) {
                            return {display: "none"};
                        } else if (routeName === EditMyDetailsName) {
                            return {display: "none"};
                        } else if (routeName === SaveEditProfileName) {
                            return {display: "none"};
                        } else if (routeName === FinancialReportName) {
                            return {display: "none"};
                        } else if (routeName === FinancialReportDataName) {
                            return {display: "none"};
                        } else if (routeName === PromotionServicesName) {
                            return {display: "none"};
                        } else if (routeName === DeleteShopName) {
                            return {display: "none"};
                        } else if (routeName === FinancialFilterName) {
                            return {display: "none"};
                        } else if (routeName === CreateShopName) {
                            return {display: "none"};
                        } else if (routeName === AddPromoCodeName) {
                            return {display: "none"};
                        } else if (routeName === ApplicationsDataName) {
                            return {display: "none"};
                        } else if (routeName === OkayPromoName) {
                            return {display: "none"};
                        } else if (routeName === MessagesName) {
                            return {display: "none"};
                        } else if (routeName === LoremName) {
                            return {display: "none"};
                        }
                        return styles.tabBarStyle;
                    })(route),
                    tabBarButton: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                        if (routeName === ShopDataName) {
                            () => null;
                        } else if (routeName === MyDetailsScreenName) {
                            () => null;
                        } else if (routeName === EditMyDetailsName) {
                            () => null;
                        } else if (routeName === SaveEditProfileName) {
                            () => null;
                        } else if (routeName === FinancialReportName) {
                            () => null;
                        } else if (routeName === FinancialReportDataName) {
                            () => null;
                        } else if (routeName === PromotionServicesName) {
                            () => null;
                        } else if (routeName === DeleteShopName) {
                            () => null;
                        } else if (routeName === FinancialFilterName) {
                            () => null;
                        } else if (routeName === CreateShopName) {
                            () => null;
                        } else if (routeName === AddPromoCodeName) {
                            () => null;
                        } else if (routeName === ApplicationsDataName) {
                            () => null;
                        } else if (routeName === OkayPromoName) {
                            () => null;
                        } else if (routeName === MessagesName) {
                            () => null;
                        } else if (routeName === LoremName) {
                            () => null;
                        }
                    })(route),
                })}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    notNumber: {
        fontSize: globalWidth(10),
        fontWeight: '700',
        color: '#213F50'
    },
    notNumberCont: {
        width: globalWidth(15),
        height: globalHeight(18),
        backgroundColor: '#EF52B0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        right: globalWidth(20),
        bottom: globalHeight(30)
    },
    image: {
        height: globalWidth(31),
        width: globalWidth(31),
        resizeMode: "contain",
    },
    textStyle: {
        fontSize: globalWidth(13),
        color: Colors.black,
        // lineHeight: globalHeight(12),
        textAlign: "center",
        fontWeight: "400",
        marginVertical: globalHeight(4),
    },
    tabBarStyle: {
        backgroundColor: "#F4FCFF",
        height: Platform.OS === 'ios' ? globalHeight(90) : globalHeight(80),
    },
});
