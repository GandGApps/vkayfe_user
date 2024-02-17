import React from "react";
import { styles } from "./styles";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {ApplicationsDataName, BaseUrl, globalStyles, GoodsDataName} from "../../../constants";
import like from "../../../assets/images/likeTifany.png";

export const ApplicationsForm = ({ item,navigation }, index) => {
    const img  = Array.isArray(item?.good_id?.photo_list[0]) ? item?.good_id?.photo_list[0][0] : item?.good_id?.photo_list[0]
    return (
         item?.good_id && (
            <TouchableOpacity style={styles.applicationsContainer} onPress={() =>{
                let a = item.good_id.photo_list.map((item) => {
                    return ({
                        uri: BaseUrl +'/' + item,
                    });
                });
                navigation.navigate(GoodsDataName, {
                    item: {
                        ...item.good_id,
                        store_id:item.store_id,
                        photo_list: a,
                    },
                });
            }}>
      <View style={[globalStyles.row,styles.rowCont]}>
          <Image source={{uri : BaseUrl + '/' + img}} style={styles.imgForm} />
      </View>
        <Image source={like} style={styles.likeIc}/>
        <View style={styles.foot}>
            <View style={styles.applContent}>
                <Text style={[globalStyles.titleText,globalStyles.titleTextSmall4,globalStyles.weightLight,globalStyles.textAlignLeft,styles.name]}>{item.good_id.title}</Text>
            </View>
            <View style={styles.applicationsContent}>
                <View style={styles.shopCont}>
                    <Image source={{uri:BaseUrl + "/" + item.store_id.logo_url}} style={styles.logo}/>
                    <Text style={[globalStyles.titleText,globalStyles.titleTextSmall4,globalStyles.textAlignLeft,globalStyles.weightBold,styles.name1]}>{item.store_id.title}</Text>
                </View>
                <View style={[globalStyles.row,styles.rowCont]}>
                    <Text style={[globalStyles.titleText,globalStyles.weightBold,styles.price]}>{item.good_id.price.$numberDecimal ? item.good_id.price.$numberDecimal : item.good_id.price } р</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
        )
  );
};
