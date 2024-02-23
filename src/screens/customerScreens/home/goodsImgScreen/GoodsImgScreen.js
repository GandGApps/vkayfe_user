import React, {useState} from 'react';
import {styles} from './styles';
import {globalStyles} from '../../../../constants';
import {Dimensions, Image, TouchableOpacity, View, Text} from 'react-native';
import backWhite from '../../../../assets/images/backWht.png';
import Carousel from 'react-native-snap-carousel';
import {ImgForm} from '../../../../components';
import like from '../../../../assets/images/likeTifany.png';
import dntLike from '../../../../assets/images/dntLike.png';
import axiosInstance from '../../../../networking/axiosInstance';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
export const GoodsImgScreen = ({navigation, route}) => {
  const data = route.params.data;
  const [fullData, setFullData] = useState(route.params.fullData);
  const [index, setIndex] = useState(1);
  // console.log(fullData);
  const addFavoriteFunc = async () => {
    const arr = fullData;
    if (!arr.is_favorite) {
      try {
        const response = await axiosInstance.post(
          `/favorites?good_id=${arr._id}&store_id=${arr.store_id._id}`,
        );
        arr.is_favorite = !arr.is_favorite;
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axiosInstance.delete(
          `/favorites?good_id=${arr._id}`,
        );
        arr.is_favorite = !arr.is_favorite;
      } catch (e) {
        console.log(e);
      }
    }
    setFullData({...arr});
  };

  return (
    <View style={[globalStyles.container, styles.containerImg]}>
      <View style={[globalStyles.row, styles.contHeader]}>
        <TouchableOpacity
          style={styles.bckCont}
          onPress={() => navigation.goBack()}>
          <Image source={backWhite} style={styles.bckImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.likebtn, fullData.is_favorite && styles.styleLik]}
          onPress={() => {
            addFavoriteFunc();
          }}>
          <Image
            source={fullData.is_favorite ? like : dntLike}
            style={styles.likeIc}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerImgCarousel}>
        <Carousel
          inactiveSlideOpacity={0.6}
          inactiveSlideScale={0.65}
          firstItem={0}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={index => setIndex(index + 1)}
          data={data}
          renderItem={({item, index}) => {
            return (
              <ImgForm
                item={item}
                index={index}
                data={data}
                setIndex={setIndex}
              />
            );
          }}
          containerCustomStyle={{overflow: 'visible'}}
          contentContainerCustomStyle={{overflow: 'visible'}}
        />
      </View>
      <Text style={styles.colorText}>
        {index} - {data.length}
      </Text>
    </View>
  );
};
