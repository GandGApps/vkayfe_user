import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  logoStyle: {
    width: width,
    height: height / 2.4,
  },
  contImg: {
    position: 'relative',
  },
});
