import React, {useState} from 'react';
import {styles} from './styles';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BaseUrl, globalStyles, GoodsImgName} from '../../../constants';

export function ImgForm({
  item,
  index,
  navigation,
  data,
  setIndex,
  indexActive,
  setActive,
}) {
  const [loading, setLoading] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.contImg}
      onPress={() => {
        setActive(true);
      }}>
      {loading ? (
        <ActivityIndicator
          size={40}
          color={'#569690'}
          style={{
            position: 'absolute',
            zIndex: 540000,
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      ) : null}
      <Image
        onLoadStart={e => {
          setLoading(true);
        }}
        onLoad={e => {
          setLoading(false);
        }}
        onLoadEnd={e => setLoading(false)}
        source={{uri: item.uri}}
        style={styles.logoStyle}
      />
    </TouchableOpacity>
  );
}
