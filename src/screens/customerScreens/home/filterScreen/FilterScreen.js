import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import {AppButton, FilterData, FilterForm, BackButton, AppInput, globalHeight} from "../../../../components";
import {View, Text, TouchableOpacity, ScrollView, Image, Platform} from "react-native";

import closeIcon from "../../../../assets/images/closeIcon.png";
import {CategoryName, globalStyles, HomeName, HomeScreenName, SearchName} from "../../../../constants";
import axiosInstance from "../../../../networking/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import {getStatusBarHeight} from "react-native-status-bar-height";

export const FilterScreen = ({ navigation,route }) => {
  let dispatch = useDispatch();
  const filterStore = useSelector((st) => st.filter);
  const user = useSelector((st)=>st.customer)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [sort, setSort] = useState([
    {
      id: 1,
      name: "В наличии",
      check: false,
      key: "stock",
    },
    {
      id: 2,
      name: "По дате публикации убыв",
      check: false,
      key: "newFirst",
    },
    {
      id: 3,
      name: "По дате публикации возр",
      check: false,
      key: "oldFirst",
    },
    {
      id: 4,
      name: "По убыванию цены",
      check: false,
      key: "priceDesc",
    },
    {
      id: 5,
      name: "По возрастанию цены",
      check: false,
      key: "priceAsc",
    },
    {
      id: 6,
      name: "По Кол-ву меньш",
      check: false,
      ley: "countAsc",
    },
    {
      id: 7,
      name: "По кол.ву больш",
      check: false,
      key: "countDesc",
    },
  ]);
  let [subCategory, setSubCategory] = useState([]);
  let [category, setCategory] = useState({});

  useEffect(() => {
    if (Object.keys(filterStore).length) {
      if(filterStore.price_from){
        setMinPrice(filterStore.price_from)
      }
      if(filterStore.price_to){
        setMaxPrice(filterStore.price_to)
      }
      if (filterStore.category_id) {
        checkSubCategory({ _id: filterStore.category_id, title: filterStore.category_name }).then(r => {
          for (let i = 0; i < r.length; i++) {
            for (let j = 0; j < filterStore.sub_id.length; j++) {
              if (filterStore.sub_id[j] === r[i]._id) {
                r[i].check = true;
              }
            }
          }
          setSubCategory([...r]);
        });
      }
    }
  }, [filterStore]);

  let checkSubCategory = async (item) => {
    try {
      let response = await axiosInstance.get(`/sub-categories`, {
        params: {
          category_id: item._id,
        },
      });
      let data = response.data.subcategories;
      for (let i = 0; i < data.length; i++) {
        data[i].check = false;
      }
      setCategory(item);
      setSubCategory(data);
      return data;
    } catch (e) {
      setCategory(item);
      console.log(e,'fffff');
    }
  };

  let checkFilterSub = (index) => {
    subCategory[index].check = !subCategory[index].check;
    setSubCategory([...subCategory]);
  };

  let filter = () => {
    let subcategoryText = "";
    let sortText = "";
    let stock = false;
    let sub_id = [];
    subCategory.map((data, index) => {
      if (data.check) {
        if (index === 0) {
          subcategoryText = subcategoryText + data._id;
        } else {
          subcategoryText = subcategoryText + "," + data._id;
        }
        sub_id.push(data._id);
      }
    });

    let data = {
      category_id: category._id,
      category_name: category.title,
      subcategory: subcategoryText,
      sub_id,
      price_from: minPrice,
      price_to: maxPrice
    };
    dispatch({
      type: "SET_FILTER",
      payload: data,
    });
    if(route.params?.state){
      navigation.navigate(SearchName);
    }else {
      navigation.navigate(HomeScreenName);

    }
  };

  return (
      <View style={[styles.container,
        Platform.OS === 'ios' &&{paddingTop:  (getStatusBarHeight(true) + globalHeight(20))}

      ]}>
        <View>
          <View style={styles.headerContainer}>
            <BackButton
                navigation={navigation}
                text={"Фильтры"}
                deleteAll={() => {
                  dispatch({
                    type: "SET_FILTER_DELETE",
                  });
                  for (let i = 0; i < sort.length; i++) {
                    sort[i].check = false;
                  }
                  setSort([...sort]);
                  setCategory({});
                  setSubCategory([]);
                  navigation.navigate(HomeScreenName);
                }}
            />
          </View>

          <View style={styles.containerCategory}>
            <Text
                style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.titleCategory, globalStyles.weightBold, globalStyles.titleTextSmall]}>Выберите
              категорию</Text>
            <TouchableOpacity onPress={() => navigation.navigate(CategoryName, { checkSubCategory: checkSubCategory })}>
              <View style={styles.category}>
                {category.title ?
                    <Text
                        style={[globalStyles.titleText, globalStyles.titleTextSmall, globalStyles.weightLight]}>{category.title}</Text>
                    :
                    <Text style={[globalStyles.titleText, globalStyles.titleTextSmall, globalStyles.weightLight]}>Выберите
                      категорию</Text>
                }
                <TouchableOpacity onPress={() =>{
                  setCategory({})
                  setSubCategory([])
                }}>
                  <Image source={closeIcon} style={styles.closeIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          {Object.keys(subCategory).length ?
              <View style={styles.containerCategory}>
                <Text
                    style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.titleCategory, globalStyles.weightBold, globalStyles.titleTextSmall]}>Подкатегория</Text>
                <ScrollView bounces={false} showsHorizontalScrollIndicator={false} horizontal={true}>
                  {subCategory.map((item, index) => {
                    return (
                        <FilterForm
                            check={checkFilterSub}
                            item={item}
                            index={index}
                            key={index}
                        />
                    );
                  })}
                </ScrollView>
              </View>
              : null}

          <View style={styles.containerCategory}>
            <Text
                style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.titleCategory, globalStyles.weightBold, globalStyles.titleTextSmall]}>Адрес доставки</Text>
            <TouchableOpacity enabled={false}>
              <View style={styles.category}>
                    <Text
                        style={[globalStyles.titleText, globalStyles.titleTextSmall, globalStyles.weightLight]}>{user.city}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.containerCategory}>
            <Text
                style={[globalStyles.titleText, globalStyles.textAlignLeft, styles.titleCategory, globalStyles.weightBold, globalStyles.titleTextSmall]}>Цена за 1шт.</Text>
            <View style={styles.containerInput}>
              <View>
                <Text  style={[globalStyles.titleText, globalStyles.titleTextSmall, globalStyles.weightLight,globalStyles.textAlignLeft]}>От</Text>
                <AppInput
                    style={styles.inpSmall}
                    keyboardType={'numeric'}
                    onChangeText={(e) => setMinPrice(e)}
                    value={minPrice}
                />
              </View>
              <View>
                <Text  style={[globalStyles.titleText, globalStyles.titleTextSmall, globalStyles.weightLight,globalStyles.textAlignLeft]}>до</Text>
                <AppInput
                    style={styles.inpSmall}
                    keyboardType={'numeric'}
                    onChangeText={(e) => setMaxPrice(e)}
                    value={maxPrice}
                />
              </View>
            </View>

          </View>

        </View>
        <View>
          <AppButton
              text={"Применить"}
              stylesContainer={styles.containerBtn}
              onPress={filter}
          />
        </View>
      </View>
  );
};
