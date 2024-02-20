import React from 'react';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {removeTokens} from '../../../utils';
import {
  globalStyles,
  SET_CUSTOMER_DELETE,
  SignInName,
} from '../../../constants';
import backBtn from '../../../assets/images/backIcon.png';
import likeTifany from '../../../assets/images/likeTifany.png';
import dntLike from '../../../assets/images/dntLike.png';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {globalWidth} from '../../dimensions';

export function BackButton({
  navigation,
  text,
  pending,
  textStyle,
  stylesBack,
  deleteAll,
  applications,
  like,
  favorite,
  changeFav,
}) {
  const dispatch = useDispatch();
  const goBackFunc = async () => {
    if (pending) {
      await removeTokens();
      dispatch({
        type: SET_CUSTOMER_DELETE,
      });
      navigation.replace(SignInName);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, stylesBack, globalStyles.row]}>
      <TouchableOpacity onPress={goBackFunc} style={[globalStyles.row]}>
        <Image source={backBtn} style={styles.backBtnStyle} />
        {text && (
          <Text style={[styles.text, textStyle && {fontSize: globalWidth(17)}]}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
      {deleteAll && (
        <TouchableOpacity onPress={deleteAll}>
          <Text style={[globalStyles.titleText, styles.textDelete]}>
            ОЧИСТИТЬ ВСЕ
          </Text>
        </TouchableOpacity>
      )}
      {applications && (
        <Text
          style={[
            globalStyles.titleText,
            globalStyles.titleTextSmall,
            globalStyles.weightLight,
          ]}>
          {applications}
        </Text>
      )}
      {like && (
        <TouchableOpacity
          onPress={() => {
            changeFav(favorite);
          }}>
          <Image
            source={favorite ? likeTifany : dntLike}
            style={styles.likeIc}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
