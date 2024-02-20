import {Colors} from '../../../constants';
import {StyleSheet, Dimensions} from 'react-native';
import {globalHeight, globalWidth} from '../../index';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  filterCategoryContainer: {
    borderRadius: 8,
    marginHorizontal: globalWidth(4),
    paddingVertical: globalHeight(7),
    paddingHorizontal: globalWidth(11),
    backgroundColor: Colors.filterBackground,
  },
});
