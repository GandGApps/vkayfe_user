import React, {useEffect, useState} from "react";
import {styles} from "./styles";
import {Image, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import rightIcon from "../../../../assets/images/rightIcon.png";
import place from "../../../../assets/images/wing.png";
import {
    Colors,
    FinancialReportName, globalStyles,
    PromotionServicesName,
    EditMyDetailsName, LoremName
} from "../../../../constants";
import {ChangePasswordModal, ChangeShopModal, globalHeight, Loading} from "../../../../components";
import axiosInstance from "../../../../networking/axiosInstance";
import {useSelector} from "react-redux";
import {getStatusBarHeight} from "react-native-status-bar-height";

export const ProfileScreen = ({navigation}) => {
    const store = useSelector(st => st.customer);
    const [loading, setLoading] = useState(false);

    const navigationFunc = (nav) => {
        navigation.navigate(nav);
    };

    return (
        <View style={[globalStyles.container,
            Platform.OS === 'ios' &&{marginTop:  -(getStatusBarHeight(true) +5)}
        ]}>
            <ScrollView bounces={false} contentContainerStyle={globalStyles.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor={Colors.blueBackground}/>
                <View style={[styles.headerContainer,
                    Platform.OS === 'ios' &&{paddingTop:  (getStatusBarHeight(true) + globalHeight(45))}

                ]}>
                    {store?.full_name && (
                        <Text
                            style={[globalStyles.titleText, globalStyles.titleTextSmall, globalStyles.textAlignLeft, styles.shopName]}>{store.full_name}</Text>
                    )}
                                <View style={globalStyles.row}>
                                    <Image source={place} style={styles.placeIcon}/>
                                    <Text
                                        style={[globalStyles.titleText, globalStyles.weightLight, styles.placeText]}>г. {store.city} {store.address}</Text>
                                </View>
                </View>
                <View>
                    <TouchableOpacity style={[styles.buttonContainer, styles.activeInActiveContainer]}
                                      onPress={() => navigationFunc(PromotionServicesName)}>
                        <View style={styles.activeContainer}>
                            <Text
                                style={[globalStyles.titleText, globalStyles.textAlignLeft, globalStyles.titleTextSmall, globalStyles.weightLight,styles.activeTextHeader]}>
                                Значимые даты
                            </Text>

                        </View>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}
                                      onPress={() => navigationFunc(FinancialReportName)}>
                        <Text style={[globalStyles.titleText, globalStyles.weightLight]}>Мои покупки</Text>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}
                                      onPress={() => navigationFunc(EditMyDetailsName)}>
                        <Text style={[globalStyles.titleText, globalStyles.weightLight]}>Мои данные</Text>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                        navigation.navigate(LoremName,{
                            name:"Частые вопросы",
                            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                                '\n' +
                                'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                        })
                    }}>
                        <Text style={[globalStyles.titleText, globalStyles.weightLight]}>Частые вопросы</Text>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                        navigation.navigate(LoremName,{
                            name:"Условия предоставления",
                            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                                '\n' +
                                'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                        })
                    }}>
                        <Text style={[globalStyles.titleText, globalStyles.weightLight]}>Условия предоставления
                            услуг</Text>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                        navigation.navigate(LoremName,{
                            name:"Политика обработки",
                            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                                '\n' +
                                'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                        })
                    }}>
                        <Text style={[globalStyles.titleText, globalStyles.weightLight]}>Политика обработки
                            персонал...</Text>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                        navigation.navigate(LoremName,{
                            name:"О приложении",
                            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                                '\n' +
                                'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                        })
                    }}>
                        <Text style={[globalStyles.titleText, globalStyles.weightLight]}>О приложении</Text>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                        navigation.navigate(LoremName,{
                            name:"Поддержка",
                            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                                '\n' +
                                'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
                        })
                    }}>
                        <Text style={[globalStyles.titleText, globalStyles.weightLight]}>Поддержка</Text>
                        <Image source={rightIcon} style={styles.RightIcon}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Loading loading={loading}/>
        </View>
    );
};
