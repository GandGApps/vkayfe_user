import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../constants';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  containerForm: {
    borderBottomWidth: 1,
    borderColor: Colors.borderGray,
    marginTop: globalHeight(17),
  },
  title: {
    marginLeft: globalWidth(37),
    marginBottom: globalHeight(16),
  },
});
