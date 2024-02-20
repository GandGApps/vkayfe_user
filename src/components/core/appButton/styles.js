import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../dimensions';
import {StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  containerButton: {
    borderRadius: 8,
    marginHorizontal: globalWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    height: globalHeight(50),
    backgroundColor: Colors.tifany,
  },
  text: {
    color: Colors.white,
  },
});
