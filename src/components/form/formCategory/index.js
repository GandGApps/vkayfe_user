import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { BaseUrl, globalStyles, SubCategoryName } from "../../../constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

import rightIcn from "../../../assets/images/rightIcon.png";

export function FormCategory({ item, index, navigation, checkSubCategory }) {
  const [color] = useState(["#FFC24B", "#D67EFF", "#63FFFF"]);
  return (
      <TouchableOpacity style={[styles.containerForm, { backgroundColor: color[index % 3] }]} onPress={() => {
        checkSubCategory(item);
        navigation.goBack();
      }}>
        <View style={[globalStyles.row]}>
          <View>
            <Image source={{ uri: BaseUrl + "/" + item.photo_url }} style={styles.img} />
          </View>
          <View>
            <Text style={[globalStyles.titleText, globalStyles.textAlignLeft]}>{item.title}</Text>
            <Text
                style={[globalStyles.titleText, globalStyles.weightLight, globalStyles.titleTextSmall4, globalStyles.textAlignLeft]}>{item.productCount} товаров</Text>
          </View>
        </View>

      </TouchableOpacity>
  );
}
