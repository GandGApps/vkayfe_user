import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  containerForm: {
    alignItems: 'center',
    borderRadius: 100,
    marginHorizontal: globalWidth(7.5),
  },
  img: {
    width: globalWidth(86),
    height: globalWidth(86),
    borderRadius: 100,
    resizeMode: 'contain',
  },
  title: {
    width: globalWidth(90),
    textAlign: 'center',
  },
  pcs: {
    fontWeight: '300',
    color: Colors.titleColor,
    fontSize: globalWidth(14),
  },
});
