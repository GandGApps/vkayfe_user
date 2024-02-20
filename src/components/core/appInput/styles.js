import {Colors} from '../../../constants';
import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../dimensions';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  input: {
    color: Colors.black,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    marginHorizontal: globalWidth(20),
    paddingVertical: globalHeight(9),
  },
});
