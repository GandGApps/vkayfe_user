import React from 'react';
import {StyleSheet, View, ActivityIndicator, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export function Loading(props) {
  return props.loading ? (
    <View style={[styles.content, props.style]}>
      <ActivityIndicator size={40} color={'#569690'} />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  content: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999999,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});
