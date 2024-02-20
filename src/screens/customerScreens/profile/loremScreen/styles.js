import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../constants';
import {globalHeight, globalWidth} from '../../../../components';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  text: {
    marginHorizontal: globalWidth(20),
    marginVertical: globalWidth(20),
  },
});
